import { Router } from "express";

import {
  listAllUsersController,
  userRegisterController,
  userLoginController,
} from "../controllers/User.controller.js";

const userRouter = Router();

userRouter.get("/list-all", listAllUsersController);
userRouter.post("/register", userRegisterController);
userRouter.post("/login", userLoginController);

export default userRouter;
