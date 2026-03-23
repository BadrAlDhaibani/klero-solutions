import { Resend } from "resend";
import { NextResponse } from "next/server";

const ALLOWED_SERVICES = [
  "A new website",
  "A website redesign",
  "A booking/scheduling system",
  "Internal tools or dashboards",
  "AI chat or automation",
  "Help getting found on Google (SEO)",
  "Ongoing support for an existing site",
  "Something else",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactForm {
  name: string;
  email: string;
  service: string;
  message?: string;
  company_url?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactForm;

    // Honeypot check — bots fill this, humans don't see it
    if (body.company_url) {
      return NextResponse.json({ success: true });
    }

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const service = (body.service ?? "").trim();
    const message = (body.message ?? "").trim();

    // Required fields
    if (!name || !email || !service) {
      return NextResponse.json(
        { error: "Name, email, and service are required." },
        { status: 400 }
      );
    }

    // Length limits
    if (name.length > 200) {
      return NextResponse.json(
        { error: "Name is too long." },
        { status: 400 }
      );
    }
    if (email.length > 320) {
      return NextResponse.json(
        { error: "Email is too long." },
        { status: 400 }
      );
    }
    if (message.length > 5000) {
      return NextResponse.json(
        { error: "Message is too long." },
        { status: 400 }
      );
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Service allowlist
    if (!ALLOWED_SERVICES.includes(service)) {
      return NextResponse.json(
        { error: "Please select a valid service option." },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Klero Solutions <noreply@klerosolutions.com>",
      to: "contact@klerosolutions.com",
      replyTo: email,
      subject: `New inquiry from ${name} — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e1b4b; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #6366f1; font-weight: 600; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #1e1b4b;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #6366f1; font-weight: 600; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #1e1b4b;"><a href="mailto:${escapeHtml(email)}" style="color: #4338ca;">${escapeHtml(email)}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #6366f1; font-weight: 600; vertical-align: top;">Looking for</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e0e7ff; color: #1e1b4b;">${escapeHtml(service)}</td>
            </tr>
            ${
              message
                ? `<tr>
              <td style="padding: 12px 0; color: #6366f1; font-weight: 600; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #1e1b4b; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>`
                : ""
            }
          </table>
          <p style="margin-top: 32px; font-size: 13px; color: #6366f1;">Sent from the Klero Solutions contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
