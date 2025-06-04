// utils/sendEmail.js
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendEmail = async ({ to, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const htmlTemplate = `
      <div style="max-width: 600px; margin: auto; font-family: 'Segoe UI', sans-serif; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #0d6efd; padding: 20px; color: white; text-align: center;">
          <img src="https://yourdomain.com/logo.png" alt="TechVision Logo" style="height: 60px;" />
          <h2 style="margin: 10px 0;">TechVision Support</h2>
        </div>
        <div style="padding: 25px; font-size: 16px; color: #333;">
          <p>Dear User,</p>
          <p><strong>Response from our team:</strong></p>
          <div style="background-color: #f1f1f1; padding: 15px; border-left: 4px solid #0d6efd; margin: 20px 0;">
            ${message}
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://google.com" style="background-color: #0d6efd; color: white; padding: 12px 25px; text-decoration: none; border-radius: 5px; font-weight: bold;">
              Visit TechVision
            </a>
          </div>

          <p style="margin-top: 40px;">If you have any further questions, feel free to contact us again.</p>
          <p>Best regards,<br><strong>TechVision Team</strong></p>
        </div>
        <div style="background-color: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #888;">
          This is an automated email from TechVision. Please do not reply to this message.
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"TechVision" <${process.env.MAIL_USER}>`,
      to,
      subject,
      html: htmlTemplate,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export default sendEmail;
