import User from "../models/user.js";
import VisualizationHistory from "../models/VisualizationHistory.js";
import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get("/algorithms", (req, res) => {
  const algorithms = ["Bubble Sort", "Quick Sort", "Merge Sort"];
  res.json({ algorithms });
});

router.post("/save-visualization", async (req, res) => {
  const { algorithm, date } = req.body;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    const newHistory = new VisualizationHistory({ algorithm, date, user: user._id });
    await newHistory.save();
    res.status(201).json({ message: "Visualization history saved successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save visualization history" });
  }
});

router.post("/change-username", async (req, res) => {
  const { newUsername } = req.body;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    user.username = newUsername;
    await user.save();
    res.status(200).json({ message: "Username changed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to change username" });
  }
});

router.get("/visualization-history", async (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    console.error("Authorization header missing");
    return res.status(401).json({ error: "Authorization header missing" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded token:", decoded); // Add this line to log the decoded token
    const history = await VisualizationHistory.find({ user: decoded.id }).sort({ date: -1 });
    res.json({ history });
  } catch (error) {
    console.error("Failed to fetch visualization history:", error); // Add this line to log the error
    res.status(500).json({ error: "Failed to fetch visualization history" });
  }
});

export default router;
