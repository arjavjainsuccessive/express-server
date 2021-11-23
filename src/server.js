import {errorHandler} from './libs/routes/errorHandler';
import {notFound} from './libs/routes/notFoundRoute';
require('dotenv').config();
var bodyParser = require('body-parser')
const express = require('express');
const app = express();
 class Server{
    constructor(config){
        app.listen(config);
        this.run();
    }
    setupRoutes(){
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        }); 
        app.use(notFound);
        //app.use(errorHandler); 
    }
    bootstrap(){
        this.setupRoutes();
        this.initBodyParser();
    }
    run(){
        app.get("/",function (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
    }
    initBodyParser(){
        app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
}

module.exports = Server;
