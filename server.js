const { google } = require("googleapis");

// Load service account credentials from environment variable
const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth });

// Example function to add an event
async function addEvent() {
  const event = {
    summary: "Test Event",
    start: { dateTime: "2025-03-06T10:00:00-05:00" },
    end: { dateTime: "2025-03-06T11:00:00-05:00" },
  };

  const response = await calendar.events.insert({
    calendarId: "primary",
    resource: event,
  });

  console.log("Event created:", response.data.htmlLink);
}

addEvent();