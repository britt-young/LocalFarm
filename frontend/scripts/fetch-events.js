import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Events";
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;

if (!AIRTABLE_BASE_ID || !AIRTABLE_PAT) {
  console.error("❌ Missing Airtable credentials in environment variables.");
  process.exit(1);
}

const AIRTABLE_API_URL = `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`;
const DATA_DIR = "./public/data";
const IMAGE_DIR = "./public/images/events";

async function fetchAllRecords() {
  let allRecords = [];
  let offset = null;

  try {
    do {
      const url = new URL(AIRTABLE_API_URL);
      if (offset) url.searchParams.append("offset", offset);

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

async function downloadImage(url, destPath) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to download image: ${res.status} ${res.statusText}`);
  const buffer = await res.buffer();
  fs.writeFileSync(destPath, buffer);
}

async function fetchAndSaveEvents() {
  const records = await fetchAllRecords();

  // Ensure output directories exist
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.mkdirSync(IMAGE_DIR, { recursive: true });

  // Optionally clear old images
  fs.readdirSync(IMAGE_DIR).forEach((file) =>
    fs.unlinkSync(path.join(IMAGE_DIR, file))
  );

  const formatted = await Promise.all(
    records.map(async (record) => {
      const { id, fields } = record;
      let localImagePath = null;

      if (fields.Image?.[0]?.url) {
        try {
          const imageUrl = fields.Image[0].url;
          const ext = path.extname(new URL(imageUrl).pathname) || ".jpg";
          const filename = `${id}${ext}`;
          const savePath = path.join(IMAGE_DIR, filename);

          await downloadImage(imageUrl, savePath);

          localImagePath = `/images/events/${filename}`;
        } catch (err) {
          console.warn(`⚠️ Failed to download image for record ${id}:`, err.message);
        }
      }

      return {
        id,
        title: fields.Title || "",
        date: fields.Date || "",
        location: fields.Location || "",
        description: fields.Description || "",
        image: localImagePath,
      };
    })
  );

  fs.writeFileSync(
    `${DATA_DIR}/events.json`,
    JSON.stringify(formatted, null, 2),
    "utf-8"
  );

  console.log(`✅ Successfully fetched and saved ${formatted.length} events.`);
}

fetchAndSaveEvents();
