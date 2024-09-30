import express from "express";
import userRouter from "./userRouter.js";
import { index } from "../controller/index.js";

const rootRouter = express.Router();

rootRouter.get("/", index);
rootRouter.use("/user", userRouter);

export default rootRouter;
