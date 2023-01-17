import { Router } from "express";
import { deleteUser, getUser, getUsers, postUser, putUser } from "../controllers/user.controller";
import { BASE_PATH, ID_PATH } from "../constants/routes.constant";

const userRouter = Router();

userRouter.get(BASE_PATH, getUsers);

userRouter.get(ID_PATH, getUser);

userRouter.post(BASE_PATH, postUser);

userRouter.put(ID_PATH, putUser);

userRouter.delete(ID_PATH, deleteUser);


export default userRouter;