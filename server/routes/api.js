import express from "express";

const router = express.Router();

router.get("/algorithms", (req, res) => {
  const algorithms = ["Bubble Sort", "Quick Sort", "Merge Sort"];
  res.json({ algorithms });
});

export default router;
