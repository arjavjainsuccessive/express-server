import { traineeRoutes } from "./controllers/trainee/index";
const express = require('express');
const MainRouter = express.Router();
MainRouter.use('/trainee',traineeRoutes);

export default MainRouter;
