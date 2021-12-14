import { router } from "./controllers/trainee/index";
import { routers } from "./controllers/user/index";
import  route  from "./repositories/user/routes"
const express = require('express');
const MainRouter = express.Router();
MainRouter.use('/trainee',router);
MainRouter.use('/login',routers);
MainRouter.use('/user',route);
export default MainRouter;
