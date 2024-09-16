import { httpAction } from "./_generated/server";
import { Resend } from "resend";
import { EmailTemplate } from "../src/emails/welcome";

const resend = new Resend(process.env.AUTH_RESEND_KEY || "");

export const sendEmail = httpAction(async (ctx, request) => {
  try {
    const { to, from, subject, body } = await request.json();

    const { data, error } = await resend.emails.send({
      from,
      to,
      subject,
      html: "<h1>Welcome</h1>",

      // react: EmailTemplate({ firstName: body }),
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
});
