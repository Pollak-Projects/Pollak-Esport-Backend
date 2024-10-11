import axios from "axios";
import { Router } from "express";

const userRouter = Router();
//get user from a different backend

userRouter.get("/login", async (req, res) => {
  try {
    const response = await axios.get("http://localhost:3000/user");
    res.send(response.data);
  } catch (error) {
    res.send(error);
  }  
});

userRouter.post("/login", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:3000/user", req.body);
    res.send(response.data);
  } catch (error : any
  ) {
    res
    .status(error.response.status)
    .send(error.response.data);
  }
}
);


export default userRouter;
