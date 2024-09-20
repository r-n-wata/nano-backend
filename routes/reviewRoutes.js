// routes/reviewRoutes.js
// eslint-disable-next-line node/no-unsupported-features/es-syntax
const express = require("express");
const router = express.Router();
const { addReview, getReviews } = require("../controllers/reviewController");

// POST /reviews - Add a new review
router.post("/reviews", addReview);

// GET /reviews - Get all reviews
router.get("/reviews", getReviews);

module.exports = router;
