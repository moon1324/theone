import express from "express";
import { index } from "../controller/index.js";
import userRouter from "./userRouter.js";
import authRouter from "./authRouter.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);
// rootRouter.use("/auth", authRouter);

export default rootRouter;
