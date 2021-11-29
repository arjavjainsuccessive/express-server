import  { TraineeController } from "./controller";
const express = require('express');
const routes = express.Router();
const trainee = new TraineeController();
routes.get('/',trainee.trainne_get_routes);
routes.put('/',trainee.trainee_put_routes);
routes.post('/',trainee.trainee_post_routes);
routes.delete('/',trainee.trainee_delete_routes);
export default routes;
