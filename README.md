# 💍 Yogesh & Karishma's Wedding Invitation

A high-aesthetic, mobile-first digital wedding invitation with an **interactive 3D physical envelope opening animation**, live countdown timer, dynamic calendar with heart badge, interactive Google Map, timeline schedule, and romantic background music synthesizer.

**100% Serverless — Zero Build Steps — Deploy Directly to GitHub Pages for FREE in 10 seconds!**

---

## 📁 Ultra-Simple 4-File Structure

```
d:/bhai/
├── assets/             # SVG illustrations, wax seal, decorations
├── index.html          # Main invitation webpage
├── style.css           # Fonts, colors, and 3D envelope animation
├── app.js              # Countdown, calendar, lightbox, and audio engine
├── weddingDetails.js   # 👈 ALL WEDDING DETAILS (Edit names, dates, venues here!)
└── README.md           # Instructions
```

---

## 🚀 How to Deploy on GitHub Pages (100% Free, Zero Build Steps)

Because this is a pure static website with no npm build or dependencies needed, you can deploy it to GitHub in 3 clicks:

1. **Push this folder to a GitHub repository**:
   ```bash
   git init
   git add .
   git commit -m "Wedding invitation"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. On GitHub, go to your repository **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment**:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main`, Folder: `/ (root)`
   - Click **Save**.
4. That's it! In about 10 seconds, GitHub Pages gives you a free live URL:
   `https://<your-username>.github.io/<your-repo-name>/`

---

## ✏️ How to Customize Wedding Details

Open **`weddingDetails.js`** in any text editor. You can change:
- **Couple Names**: `couple.groom` and `couple.bride`
- **Family Details**: `families.groom` and `families.bride`
- **Events & Times**: `events` (Ceremony & Reception dates — *countdown and calendar auto-update!*)
- **Venue & Google Map**: `venue`
- **Timeline**: `schedule`
- **Photos**: `gallery` (paste your brother's couple photos)

---

## 💌 Personalized Guest Invitations

Send guests personalized links that display their name directly on the envelope and invitation:
- `https://<your-username>.github.io/<your-repo-name>/?guest=Uncle+Rajesh`
- `https://<your-username>.github.io/<your-repo-name>/?guest=Marcus+%26+Chloe`

Guests visiting without a name parameter will see a warm invitation addressed to **Honored Guest**.
