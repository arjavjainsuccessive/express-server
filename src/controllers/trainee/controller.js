export class TraineeController{
    create = function(req,res){
        res.send({Data:'This is trainee post respond'});
    }
    get = function (req,res) {
        res.send({Data:'this is trainee get response'});

    }
    update = function (req,res) {
        res.send({Data:'this is trainee put response'});
    }
    delete = function (req,res) {
        res.send({Data:'this is trainee delete response'});
    }
} 
