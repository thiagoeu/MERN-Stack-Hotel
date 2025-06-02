import { Router } from "express";

import {
  listAllUsersController,
  userRegisterController,
} from "../controllers/User.controller.js";

const userRouter = Router();

userRouter.get("/list-all", listAllUsersController);
userRouter.post("/register", userRegisterController);

export default userRouter;
