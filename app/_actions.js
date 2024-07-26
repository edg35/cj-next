"use server";

import { db } from "@/utils/db";
import { ContactForm } from "@/utils/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function saveContactForm(contactFormData) {
  const sendEmail = await resend.emails.send({
    to: "ethandavid111@gmail.com",
    from: "CJ Environmental <onboarding@resend.dev>",
    subject: "New Contact Form Submission",
    text: `
        Name: ${contactFormData.get("name")}
        Email: ${contactFormData.get("email")}
        Phone: ${contactFormData.get("phone")}
        Message: ${contactFormData.get("message")}
        Please do not reply to this email.
      `,
  });

  const saveContactForm = await db.insert(ContactForm).values({
    name: contactFormData.get("name"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    message: contactFormData.get("message"),
  });

  return { sendEmail, saveContactForm };
}
