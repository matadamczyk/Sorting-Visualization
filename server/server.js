import apiRoutes from "./routes/api.js";
import authRoutes from "./routes/auth.js";
import bodyParser from "body-parser";
import connectDB from "./database.js";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";

dotenv.config();

if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables");
}

const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
    },
  })
);

app.use((req, res, next) => {
  if (req.url.endsWith('.js')) {
    res.setHeader('Content-Type', 'application/javascript');
  }
  next();
});

app.use("/public", express.static("public", { extensions: ['js'] }));
app.use("/views", express.static("views"));

app.get("/sortingWorker.js", (req, res) => {
  res.sendFile("sortingWorker.js", { root: "public/js" });
});

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "views" });
});

app.get("/profile", (req, res) => {
  res.sendFile("profile.html", { root: "views" });
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "views" });
});

app.use("/auth", authRoutes);
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 3069;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});