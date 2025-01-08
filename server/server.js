import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";

import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

// app.use(
//   helmet.contentSecurityPolicy({
//     directives: {
//       defaultSrc: ["'self'", "http://localhost:8080"],
//       scriptSrc: ["'self'", "'unsafe-inline'"],
//       styleSrc: ["'self'", "'unsafe-inline'"],
//       imgSrc: ["'self'", "data:", "http://localhost:8080"],
//       connectSrc: ["'self'"],
//       fontSrc: ["'self'", "https:", "data:"],
//       objectSrc: ["'none'"],
//       mediaSrc: ["'self'"],
//       frameSrc: ["'none'"],
//     },
//   })
// );

app.use("/public", express.static("public"));
app.use("/views", express.static("views"));

mongoose
  .connect(process.env.MONGO_URI, {
    userNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected with MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3012;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
