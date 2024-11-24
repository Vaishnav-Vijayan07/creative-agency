import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, number, subject, message } = await req.json();

  // Set up the transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Update based on your SMTP provider
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your SMTP user
      pass: process.env.SMTP_PASSWORD, // Your SMTP password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL, // Your email address
      subject: `Contact Form Submission from ${name}`,
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Number:</strong> ${number}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
    });

    return new Response(JSON.stringify({ message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
