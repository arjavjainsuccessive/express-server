import { TraineeController } from './controller';
import validationHandler from '../../libs/validationHandler'
import validation from './validation';
import hasPermission from '../../../extra/utils/permission';
const express = require('express');
const router = express.Router();
const traineeController = new TraineeController();

router.route('/')
.post(validationHandler(validation.create),traineeController.create)
.get(validationHandler(validation.get),traineeController.get)
.put(validationHandler(validation.update),traineeController.update)
router.route('/:id')
.delete(validationHandler(validation.delete),traineeController.delete)
export default router;
