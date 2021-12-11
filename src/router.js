import { router } from "./controllers/trainee/index";
import { routers } from "./controllers/user/index";
const express = require('express');
const MainRouter = express.Router();
MainRouter.use('/trainee',router);
MainRouter.use('/login',routers);
export default MainRouter;
