import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

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

export async function POST(request) {
  const body = await request.json();
  const { name, email, company, message } = body || {};

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
  }

  const transport = makeTransport();

  if (!transport) {
    console.log("[menoxis] Demo request (SMTP not configured):", {
      name,
      email,
      company,
      message,
    });
    return NextResponse.json({ ok: true, delivered: false });
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

    return NextResponse.json({ ok: true, delivered: true });
  } catch (err) {
    console.error("[menoxis] Email send failed:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
