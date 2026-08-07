# How to Connect Real Mobile Phone SMS ("Messages" App) to awaaz.ai

This guide explains how to connect a real phone number (via Twilio) so that any SMS text message sent from an Android / iPhone native **Messages** app automatically posts live to **awaaz.ai**.

---

## 📱 How the Real SMS Integration Works

1. **Citizen Phone:** Citizen opens their phone's native **Messages** app and sends an SMS to `+91 98765 43210` (e.g. *"Deep road pothole near ABC School Dharampeth"*).
2. **Twilio Webhook:** Twilio forwards the SMS text to our backend endpoint:
   `POST https://your-server-domain.com/api/complaints/sms-webhook`
3. **Automatic Triage:** Our Node.js server receives the SMS, redacts PII, extracts the category (`Road Damage`), generates a SHA-256 blockchain audit hash, and saves the ticket.
4. **Real-Time Display:** The complaint **instantly appears on the Officer Dashboard Kanban Board and City Digital Twin Map**.
5. **Auto-SMS Reply:** Twilio sends a reply SMS back to the citizen's phone:
   `📩 [awaaz.ai] Ticket CMP-2026-008 registered! Category: Road Damage. Live Track: http://awaaz.ai/track`

---

## 🚀 3-Step Setup for Live Deployment

### Step 1: Create a Free Twilio Account & Phone Number
1. Sign up at [Twilio.com](https://www.twilio.com/).
2. Get a virtual phone number (e.g., `+1 800 xxx xxxx` or local Indian number `+91 xxxxx xxxxx`).

### Step 2: Configure the Twilio Messaging Webhook
1. Go to **Twilio Console -> Phone Numbers -> Active Numbers -> Configure**.
2. Under **A MESSAGE COMES IN**, set:
   - **Webhook URL:** `https://your-server-domain.com/api/complaints/sms-webhook`
   - **HTTP Method:** `HTTP POST`

*(For local testing without deploying to cloud, run `ngrok http 5000` to get a public URL like `https://xxxx.ngrok-free.app/api/complaints/sms-webhook`).*

### Step 3: Test from your Mobile Phone
1. Open **Messages** app on your real phone.
2. Send an SMS to your Twilio phone number.
3. Watch the ticket pop up live on **awaaz.ai**!
