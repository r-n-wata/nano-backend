// controllers/reviewController.js
const Review = require("../models/reviewModel");

// Add a new client review
exports.addReview = async (req, res) => {
  const { clientName, review, rating } = req.body;

  try {
    const newReview = new Review({ clientName, review, rating });
    await newReview.save();
    res
      .status(201)
      .json({ message: "Review added successfully", review: newReview });
  } catch (error) {
    console.error("Error adding review:", error);
    res.status(500).json({ error: "Failed to add review" });
  }
};

// Fetch all reviews
exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 }); // Sort by newest first
    res.status(200).json(reviews);
  } catch (error) {
    console.error("Error fetching reviews:", error);
    res.status(500).json({ error: "Failed to fetch reviews" });
  }
};
