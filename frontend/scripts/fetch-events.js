// pull Airtable data

import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
const AIRTABLE_TABLE_NAME = "Events"; // Your Airtable table name
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;

if (!AIRTABLE_BASE_ID || !AIRTABLE_PAT) {
  console.error("Missing Airtable credentials in environment variables.");
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

async function fetchAndSaveEvents() {
  const records = await fetchAllRecords();

  const formatted = records.map(record => ({
  id: record.id,
  title: record.fields.Title || "",
  date: record.fields.Date || "",
  location: record.fields.Location || "",
  description: record.fields.Description || "",
  image: record.fields.Image?.[0]?.url || null,
}));


  const outputDir = "./public/data";
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(
    `${outputDir}/events.json`,
    JSON.stringify(formatted, null, 2),
    "utf-8"
  );

  console.log(`✅ Successfully fetched and saved ${formatted.length} events.`);
}

fetchAndSaveEvents();
