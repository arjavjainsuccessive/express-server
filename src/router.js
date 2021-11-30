import { router } from "./controllers/trainee/index";
const express = require('express');
const MainRouter = express.Router();
MainRouter.use('/trainee',router);

export default MainRouter;
