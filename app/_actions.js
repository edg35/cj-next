"use server";

import { db } from "@/utils/db";
import { ContactForm } from "@/utils/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmail(contactFormData) {
  const { name, email, phone, message } = contactFormData;

  try {
    const data = await resend.emails.send({
      to: "ethandavid111@gmail.com",
      from: "CJ Environmental <onboarding@resend.dev>",
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
        Please do not reply to this email.
      `,
    });
    return { success: true, data };
  } catch (err) {
    return { success: false, error: err };
  }
}

export async function saveContactFrom(contactFormData) {
  const { name, email, phone, message } = contactFormData;

  const dbResponse = await db.insert(ContactForm).values({
    name: name,
    email: email,
    phone: phone,
    message: message,
  });

  return dbResponse;
}
