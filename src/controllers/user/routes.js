import authMiddleWare from '../../libs/routes/authMiddleWare';
import validationHandler from "../../libs/validationHandler";
import { UserController } from "./controller";
import valid from "./validation";
const express = require('express');
const router = express.Router();
const userController = new UserController();
router.route('/')
.post(validationHandler(valid.login),userController.login,authMiddleWare('getUsers','all'))
export default router;
