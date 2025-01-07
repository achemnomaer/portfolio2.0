import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { firstname, lastname, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  // Email to you
  const adminMailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `New Message from ${firstname} ${lastname} (${email})`,
    text: message,
  };

  // Confirmation email to the user
  const userMailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "Received your message!",
    text: `Hi ${firstname},\n\nThank you for reaching out. I’ve received your message and I will get back to you shortly.\n\nBest regards,\nAchem`,
  };

  try {
    // Send the email to you
    await new Promise((resolve, reject) => {
      transport.sendMail(adminMailOptions, (err, info) => {
        if (err) {
          reject(err.message);
        } else {
          resolve("Admin email sent");
        }
      });
    });

    // Send the confirmation email to the user
    await new Promise((resolve, reject) => {
      transport.sendMail(userMailOptions, (err, info) => {
        if (err) {
          reject(err.message);
        } else {
          resolve("User confirmation email sent");
        }
      });
    });

    return NextResponse.json({ message: "Emails sent successfully" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
