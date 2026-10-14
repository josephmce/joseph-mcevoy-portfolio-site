import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
  "cf-turnstile-response"?: string;
};

type TurnstileResult = {
  success: boolean;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    // 1. Honeypot
    if (body.website) {
      return NextResponse.json({
        message: "Thanks — your message has been sent.",
      });
    }

    // 2. Required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete all fields." },
        { status: 400 },
      );
    }

    // 3. Maximum lengths
    if (name.length > 100) {
      return NextResponse.json(
        { message: "Name is too long." },
        { status: 400 },
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        { message: "Email address is too long." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: "Message is too long." },
        { status: 400 },
      );
    }

    // 4. Email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    // 5. Turnstile verification
    const turnstileToken = body["cf-turnstile-response"];

    if (!turnstileToken) {
      return NextResponse.json(
        { message: "Please complete the security check." },
        { status: 400 },
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    if (!turnstileSecret) {
      console.error("TURNSTILE_SECRET_KEY is not configured.");

      return NextResponse.json(
        { message: "Unable to verify the security check." },
        { status: 500 },
      );
    }

    const turnstileResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: turnstileSecret,
          response: turnstileToken,
        }),
      },
    );

    const turnstileResult =
      (await turnstileResponse.json()) as TurnstileResult;

    if (!turnstileResult.success) {
      console.warn(
        "Turnstile verification failed:",
        turnstileResult["error-codes"],
      );

      return NextResponse.json(
        {
          message:
            "Security verification failed. Please refresh the page and try again.",
        },
        { status: 400 },
      );
    }

    // 6. Send email
    const { error } = await resend.emails.send({
      from: "Portfolio <contact@YOUR-DOMAIN.co.uk>",
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        { message: "Unable to send your message." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      message: "Thanks — your message has been sent.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}