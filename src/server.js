import {errorHandler} from './libs/routes/errorHandler';
import {notFound} from './libs/routes/notFoundRoute';
import { default as MainRouter } from './router';
import Database from './libs/Database';
var DbUrl = require('dotenv').config().parsed.MONGO_URL;
require('dotenv').config();
var bodyParser = require('body-parser')
const express = require('express');
const app = express();
app.use(express.json());

 class Server{
    constructor(config){
        this.run(config);
    }
    setupRoutes(){
        app.get("/", function  (req, res) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('Hello World!');
            res.end();
          });
        app.get('/health-check',function(req,res){
            res.send('I am Okay!');
        }); 
        app.use(MainRouter);
        app.use(notFound);
        //app.use(errorHandler); 
    }
    bootstrap(){
        this.setupRoutes();
        this.initBodyParser();
    }
    async run(config){
        const res  = await Database.open(DbUrl);
        if (res){
            app.listen(config);
        }
    }
    initBodyParser(){
        app.use(bodyParser.urlencoded({
            extended: true
        }));
    }
}

module.exports = Server;
