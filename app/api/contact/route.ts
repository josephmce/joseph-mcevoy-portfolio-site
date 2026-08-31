import { NextResponse } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Please complete every field." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { message: "Please keep the message below 5,000 characters." },
        { status: 400 },
      );
    }

    // Connect an email provider here before production.
    console.info("Validated portfolio enquiry", {
      name,
      email,
      messageLength: message.length,
    });

    return NextResponse.json({
      message:
        "The form was validated successfully. Connect an email provider before using it in production.",
    });
  } catch {
    return NextResponse.json(
      { message: "The request could not be processed." },
      { status: 400 },
    );
  }
}
