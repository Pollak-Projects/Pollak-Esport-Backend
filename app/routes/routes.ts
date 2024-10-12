import bracketRouter from "./bracket";
import gameRouter from "./game";
import teamRouter from "./team";
import userRouter from "./user";
import { Router } from "express";

const routes = Router();

routes.use("/bracket", bracketRouter);
routes.use("/game", gameRouter);
routes.use("/team", teamRouter);
routes.use("/user", userRouter);


export default routes;