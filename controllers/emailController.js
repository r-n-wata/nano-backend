// controllers/emailController.js
const nodemailer = require("nodemailer");

// Create transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruthnwata@gmail.com",
    pass: "nhfe boxi sxqg qawl",
  },
});

// Send email
exports.sendEmail = async (req, res) => {
  const mailOptions = {
    from: req.body.from || "",
    to: "ruthnwata@gmail.com",
    subject: req.body.subject,
    text: req.body.text,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
};
