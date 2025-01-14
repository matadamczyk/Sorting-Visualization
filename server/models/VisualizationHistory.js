import mongoose from "mongoose";

const VisualizationHistorySchema = new mongoose.Schema({
  algorithm: { type: String, required: true },
  date: { type: Date, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

const VisualizationHistory = mongoose.model("VisualizationHistory", VisualizationHistorySchema);

export default VisualizationHistory;