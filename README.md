# Shashwat Chikitsa Landing Page (React + Vite)

## Requirements
- Install Node.js LTS from https://nodejs.org/ (npm is included).
- Install Visual Studio Code from https://code.visualstudio.com/.

## Run locally
1. Extract the ZIP folder.
2. Open VS Code → File → Open Folder → select `shashwat-landing`.
3. Open Terminal → New Terminal.
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL shown in terminal (usually http://localhost:5173).

## Build for hosting
```bash
npm run build
```
Upload the generated `dist` folder to your hosting provider or deploy the project to Vercel.

## Replace image placeholders
Search in `src/App.jsx` for these labels:
- `ADD GURU JI PHOTO`
- `ADD PROGRAM / GURU PHOTO`
- `ADD BABA JI PORTRAIT`
- `ADD FEATURE VIDEO HERE`
- `PHOTO 01`, `PHOTO 02`

For an image, put your file in `src/assets/`, import it at the top of `App.jsx`, and replace the relevant placeholder `<div className="image-placeholder ...">` with an `<img src={yourImportedImage} alt="..." />`. Add `className="your-image-class"` and CSS such as `width:100%;height:100%;object-fit:cover;`.

For a YouTube video, replace the feature-video placeholder with:
```jsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  title="Shashwat Chikitsa training video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
/>
```
Then add CSS: `.gallery-main iframe { width:100%; height:100%; border:0; }`.

## Important settings
- WhatsApp number: change `PHONE` near the top of `src/App.jsx`. Use country code without `+` or spaces (India: 91 + 10-digit number).
- GPay display number: change `GPayNumber` near the top of `src/App.jsx`.
- Dates, timings, text: edit the relevant text in `src/App.jsx`.
- Form currently opens WhatsApp with the entered details. It does not store leads in a database. Connect a CRM, Google Sheets, or a backend if you need automatic lead storage.
- Payment is not processed on the site. Confirm payment manually or integrate a payment gateway before marking a registration as confirmed.

## Suggested VS Code extensions
- ES7+ React/Redux/React-Native snippets (optional)
- Prettier - Code formatter (optional)


## Add your permanent ₹99 payment link
1. Open `src/App.jsx`.
2. Find `const PAYMENT_LINK = '';` near the top.
3. Paste your real Razorpay / payment gateway URL between the quotes, for example: `const PAYMENT_LINK = 'https://rzp.io/l/your-link';`
4. Save the file. The floating `Pay ₹99` button (desktop) and fixed bottom payment bar (mobile), plus the main payment CTAs, will open this link.
5. If the link is left blank, clicking the button scrolls to registration and shows a reminder to add the link. No payment is collected until you add a valid live payment URL.
