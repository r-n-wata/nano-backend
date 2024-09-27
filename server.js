const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const reviewRoutes = require("./routes/reviewRoutes");
const emailRoutes = require("./routes/emailRoutes");

require("dotenv").config();

const app = express();
const port = 8000;

// MongoDB connection (replace with your credentials)
const mongoURI = process.env.MONGODB_KEY;
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error.message));

// Middleware
app.use(cors()); // Allow requests from any origin
app.use(express.json()); // Parse incoming JSON

// Routes
app.use("/api", reviewRoutes);

app.use("/api", emailRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
