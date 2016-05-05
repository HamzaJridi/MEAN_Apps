var express = require('express');

var routes = function (Task) {

  var todoRouter = express.Router();
  todoRouter.route('/')
    .get(function (req, res) {
      console.log('I received a GET request');
      Task.find(function (err, tasks) {
        if (err) {
          res.status(500).send(err);
        }

        res.json(tasks);
      });
    })
    .post(function (req, res) {
      var task = new Task(req.body);
      task.save();
      res.status(201).send({
        taskId:task._id
      });
    });

  //middleware to get the taskID
  todoRouter.use('/:id', function (req, res, next) {
    Task.findById(req.params.id, function (err, task) {
      if (err) {
        res.status(500).send(err);
      }
      else if (task) {
        req.task = task;
        next();
      }
      else {
        res.status(404).send('Task not found');
      }
    });
  });

  todoRouter.route('/:id')
    .get(function(req,res){
      res.json(req.task);
    })
  .delete(function (req,res) {
      req.task.remove(function (err) {
        if(err) { res.status(500).send(err);}

        res.status(204).send('Task Removed');
      });
  });


  return todoRouter;
};

module.exports = routes;
