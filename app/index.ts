import express, { Express } from "express";
import dotenv from "dotenv";
import authMiddleware from "./middleware/auth";
import userRouter from "./routes/user";
import routes from "./routes/routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 6969;
app.use(express.json());

app.use("/api/", routes);


app.get("/protected", authMiddleware, (req, res) => {
  res.send("This is a protected route");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
