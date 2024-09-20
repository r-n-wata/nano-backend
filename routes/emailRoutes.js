// routes/emailRoutes.js
const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/emailController");

// POST /send-email - Send an email
router.post("/send-email", sendEmail);

module.exports = router;
