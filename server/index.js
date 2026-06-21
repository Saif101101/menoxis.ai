import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

// Allow the Next.js frontend to call this server.
const ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
app.use(cors({ origin: ORIGIN.split(",").map((s) => s.trim()) }));

const PORT = process.env.PORT || 4000;

// Configure SMTP from environment variables (see .env.example).
function makeTransport() {
  if (!process.env.SMTP_HOST) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "menoxis-email" });
});

app.post("/api/demo", async (req, res) => {
  const { name, email, company, message } = req.body || {};

  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required." });
  }

  const transport = makeTransport();

  // If SMTP isn't configured yet, log the lead so nothing is lost in dev.
  if (!transport) {
    console.log("[menoxis] Demo request (SMTP not configured):", {
      name,
      email,
      company,
      message,
    });
    return res.json({ ok: true, delivered: false });
  }

  try {
    await transport.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SMTP_USER,
      replyTo: email,
      subject: `New demo request — ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Menoxis demo request</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(company || "—")}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(message || "—")}</p>
      `,
    });
    res.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[menoxis] Email send failed:", err.message);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => {
  console.log(`Menoxis email server running on http://localhost:${PORT}`);
});
