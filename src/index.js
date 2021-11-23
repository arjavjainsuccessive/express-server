const Server = require("./server");
const Configuration =  require('./config/configuration');
const myserver = new Server(Configuration);
myserver.bootstrap();
