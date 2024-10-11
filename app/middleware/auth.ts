import { axios } from 'axios';
import { Request, Response, NextFunction } from "express";


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Authentication logic here

  const cookie = req.cookies["auth"];
  if (!cookie) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  axios.get("http://localhost:3000/user").then((response) => {
    if (response.data.username !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }
  }
  );
  // If the user is authenticated, call next() to proceed to the next middleware
  next();
};

export default authMiddleware;
