import { NextResponse } from "next/server";
import { Resend } from "resend";

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

    // ---------------------------------------------------------
    // 1. Honeypot
    // ---------------------------------------------------------
    // Real users should never fill this field.
    // Bots often fill every input they find.
    if (body.website) {
      return NextResponse.json({
        message: "Thanks — your message has been sent.",
      });
    }

    // ---------------------------------------------------------
    // 2. Required fields
    // ---------------------------------------------------------
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          message: "Please complete all fields.",
        },
        {
          status: 400,
        },
      );
    }

    // ---------------------------------------------------------
    // 3. Maximum lengths
    // ---------------------------------------------------------
    if (name.length > 100) {
      return NextResponse.json(
        {
          message: "Name is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (email.length > 254) {
      return NextResponse.json(
        {
          message: "Email address is too long.",
        },
        {
          status: 400,
        },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          message: "Message is too long.",
        },
        {
          status: 400,
        },
      );
    }

    // ---------------------------------------------------------
    // 4. Email format
    // ---------------------------------------------------------
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          message: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    // ---------------------------------------------------------
    // 5. Cloudflare Turnstile
    // ---------------------------------------------------------
    const turnstileToken = body["cf-turnstile-response"];

    if (!turnstileToken) {
      return NextResponse.json(
        {
          message: "Please complete the security check.",
        },
        {
          status: 400,
        },
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

    // Allows the website to deploy before Turnstile has been
    // configured in Vercel.
    if (!turnstileSecret) {
      console.error(
        "TURNSTILE_SECRET_KEY environment variable is not configured.",
      );

      return NextResponse.json(
        {
          message:
            "The contact form is not fully configured yet. Please try again later.",
        },
        {
          status: 503,
        },
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
        {
          status: 400,
        },
      );
    }

    // ---------------------------------------------------------
    // 6. Check email configuration
    // ---------------------------------------------------------
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail = process.env.CONTACT_TO_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    // These checks happen at request time rather than build time.
    // That means Vercel can build and deploy the portfolio even
    // before you've configured Resend.
    if (!resendApiKey) {
      console.error(
        "RESEND_API_KEY environment variable is not configured.",
      );

      return NextResponse.json(
        {
          message:
            "Email delivery is not configured yet. Please try again later.",
        },
        {
          status: 503,
        },
      );
    }

    if (!contactToEmail) {
      console.error(
        "CONTACT_TO_EMAIL environment variable is not configured.",
      );

      return NextResponse.json(
        {
          message:
            "Email delivery is not configured yet. Please try again later.",
        },
        {
          status: 503,
        },
      );
    }

    if (!contactFromEmail) {
      console.error(
        "CONTACT_FROM_EMAIL environment variable is not configured.",
      );

      return NextResponse.json(
        {
          message:
            "Email delivery is not configured yet. Please try again later.",
        },
        {
          status: 503,
        },
      );
    }

    // ---------------------------------------------------------
    // 7. Create Resend client
    // ---------------------------------------------------------
    // Important:
    // Resend is created here rather than at the top of the file.
    // This prevents missing env vars from affecting your Vercel build.
    const resend = new Resend(resendApiKey);

    // ---------------------------------------------------------
    // 8. Send email
    // ---------------------------------------------------------
    const { error } = await resend.emails.send({
      from: `Portfolio <${contactFromEmail}>`,
      to: contactToEmail,

      // Clicking Reply in your email client will reply to
      // the person who submitted the form.
      replyTo: email,

      subject: `Portfolio enquiry from ${name}`,

      text: `
New portfolio enquiry

Name: ${name}
Email: ${email}

Message:
${message}
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          message:
            "Unable to send your message at the moment. Please try again.",
        },
        {
          status: 500,
        },
      );
    }

    // ---------------------------------------------------------
    // 9. Success
    // ---------------------------------------------------------
    return NextResponse.json({
      message: "Thanks — your message has been sent.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        message: "Something went wrong. Please try again.",
      },
      {
        status: 500,
      },
    );
  }
}