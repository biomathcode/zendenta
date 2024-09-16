import * as React from "react";

import { EmailTemplate } from "../../../emails/welcome";
import { Resend } from "resend";

const resend = new Resend(process.env.AUTH_RESEND_KEY || "");

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["sharma.pratik2016@gmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
