import { TraineeController } from './controller';
import validationHandler from '../../libs/validationHandler'
import validation from './validation';
const express = require('express');
const router = express.Router();
const traineeController = new TraineeController();

router.route('/')
.post(validationHandler(validation.create),traineeController.create)
// .get(validationHandler(validation.get),traineeController.get)
// .put(validationHandler(validation.update),traineeController.update)
// .delete(validationHandler(validation.delete),traineeController.delete)
 
export default router;
