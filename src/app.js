import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js";

const app = express();

app.use(cors({ origin: "*", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static("uploads")); // serve uploaded files

app.get("/", (req, res) => res.send("✅ API is running..."));
app.use("/api/v1/users", userRouter);

export { app };
