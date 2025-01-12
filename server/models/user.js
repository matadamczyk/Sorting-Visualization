import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  preferences: { type: Object, default: {} },
});

export default mongoose.model("User", userSchema);
