import express, { Express } from "express";
import dotenv from "dotenv";
import authMiddleware from "./middleware/auth";
import userRouter from "./routes/user";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6969;
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api",);

app.get("/protected", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
