// fetch-events.js

import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import https from "https";
import fetch from "node-fetch";

dotenv.config();

export const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
export const AIRTABLE_TABLE_NAME = "Events";
export const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT;

if (!AIRTABLE_BASE_ID || !AIRTABLE_PAT) {
  console.error("❌ Missing Airtable credentials in environment variables.");
  process.exit(1);
}

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;

async function fetchAllRecords() {
  let allRecords = [];
  let offset = null;

  try {
    do {
      const url = new URL(AIRTABLE_API_URL);
      if (offset) {
        url.searchParams.append("offset", offset);
      }

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${AIRTABLE_PAT}`,
        },
      });

      if (!res.ok) {
        throw new Error(`Airtable fetch failed: ${res.status} ${res.statusText}`);
      }

      const data = await res.json();
      allRecords = allRecords.concat(data.records);
      offset = data.offset;
    } while (offset);

    return allRecords;
  } catch (error) {
    console.error("❌ Failed to fetch Airtable data:", error);
    process.exit(1);
  }
}

// 🧠 Helper: Download image from URL to local path
function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close(resolve);
        });
      })
      .on("error", (err) => {
        fs.unlink(filepath, () => reject(err));
      });
  });
}

async function fetchAndSaveEvents() {
  const records = await fetchAllRecords();

  const outputDir = "./public/data";
  const imageDir = "./public/images/events";
  fs.mkdirSync(outputDir, { recursive: true });
  fs.mkdirSync(imageDir, { recursive: true });

  const formatted = await Promise.all(
    records.map(async (record) => {
      let localImagePath = null;

      const airtableImage = record.fields.Image?.[0]?.url;
      if (airtableImage) {
        const imageExt = path.extname(new URL(airtableImage).pathname) || ".jpg";
        const imageFileName = `${record.id}${imageExt}`;
        const imagePath = path.join(imageDir, imageFileName);
        const publicPath = `/images/events/${imageFileName}`;

        try {
          await downloadImage(airtableImage, imagePath);
          localImagePath = publicPath;
        } catch (err) {
          console.warn(`⚠️ Failed to download image for record ${record.id}:`, err.message);
        }
      }

      return {
        id: record.id,
        title: record.fields.Title || "",
        date: record.fields.Date || "",
        location: record.fields.Location || "",
        description: record.fields.Description || "",
        image: localImagePath,
      };
    })
  );

  fs.writeFileSync(`${outputDir}/events.json`, JSON.stringify(formatted, null, 2), "utf-8");
  console.log(`✅ Successfully fetched and saved ${formatted.length} events.`);
}

fetchAndSaveEvents();
