const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const port = 3000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ruthnwata@gmail.com",
    pass: "nhfe boxi sxqg qawl",
  },
});

app.get("/send-test-email", async (req, res) => {
  const mailOptions = {
    from: "your-email@gmail.com",
    to: "ruthnwata@gmail.com",
    subject: "Test Email",
    text: "This is a test email sent from Node.js using Nodemailer!",
  };

  try {
    await transporter.sendMail(mailOptions);
    res.send("Test email sent successfully!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to send test email.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
