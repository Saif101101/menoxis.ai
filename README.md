# Menoxis — The Company Brain

A cinematic, dark/purple marketing site for Menoxis, built with **Next.js (App Router)** and a small **Node.js (Express + Nodemailer)** backend that handles demo-request emails.

## What's inside

```
menoxis/
├─ app/                 # Next.js App Router (layout, page, global styles)
├─ components/          # All sections + animations
│  ├─ CursorGlow.jsx        # custom trailing cursor
│  ├─ NeuralBackground.jsx  # animated particle network (hero)
│  ├─ AnimatedStory.jsx     # signature: tools flowing into the core
│  ├─ IntelligenceLayer.jsx # orbiting capabilities around the core
│  └─ … (Hero, Challenge, etc.)
├─ lib/data.js          # nav links, tool list, FOUNDER NAMES (edit here)
├─ public/logo.svg      # logo (replace with your own)
└─ server/              # Node.js email backend
   ├─ index.js
   └─ .env.example
```

## Run it locally

You need **two terminals** — one for the site, one for the email server.

### 1. Frontend (Next.js)

```bash
cd menoxis
npm install
cp .env.local.example .env.local   # optional; defaults to localhost:4000
npm run dev
```

Open http://localhost:3000

### 2. Backend (email)

```bash
cd menoxis/server
npm install
cp .env.example .env                # then fill in your SMTP details
npm start
```

Runs on http://localhost:4000. Until you add SMTP credentials, demo
requests are logged to the server console (nothing is lost), and the form
still shows a success state.

## Things to customize

- **Logo** — replace `public/logo.svg`, or edit the inline mark in
  `components/Logo.jsx`.
- **Founder names** — edit `FOUNDERS` in `lib/data.js` (names only, as requested).
- **Overview video** — drop your video URL into `components/VideoModal.jsx`.
- **Tools shown in the flow** — edit `TOOLS` in `lib/data.js`.
- **Email recipient / SMTP** — `server/.env`.

## Notes

- Fonts (Space Grotesk / Inter / JetBrains Mono) load from Google Fonts via a
  `<link>` in `app/layout.jsx`. No build-time font fetch is required.
- Motion respects `prefers-reduced-motion`, and the custom cursor only
  activates on fine-pointer (desktop) devices.

## Build for production

```bash
cd menoxis && npm run build && npm start   # frontend
cd menoxis/server && npm start             # backend
```

## Deploy it live

The cleanest split is **Vercel for the site** + a **Node host (Render/Railway)
for the email server**. Push this folder to a GitHub repo first.

### Frontend → Vercel
1. vercel.com → New Project → import your repo.
2. Root Directory: `menoxis` (leave build/output as Next.js defaults).
3. Add an Environment Variable:
   `NEXT_PUBLIC_API_URL = https://your-backend-url` (from the step below).
4. Deploy. You get a `your-site.vercel.app` URL.

### Backend → Render (one click)
1. render.com → New + → **Blueprint** → point at the same repo.
   It reads `render.yaml` and creates the `menoxis-email` service.
   (Or: New Web Service → Root Directory `server` → Start `npm start`.)
2. In the service's **Environment**, fill in: `SMTP_HOST`, `SMTP_USER`,
   `SMTP_PASS`, `MAIL_TO`, `MAIL_FROM`, and
   `CORS_ORIGIN = https://your-site.vercel.app`.
3. Deploy. Copy the service URL back into Vercel's `NEXT_PUBLIC_API_URL`.

### Last step
Set `CORS_ORIGIN` on the backend to your real Vercel domain so the demo
form is allowed to call it. Redeploy both. Done — the site is live and the
form sends real email.
