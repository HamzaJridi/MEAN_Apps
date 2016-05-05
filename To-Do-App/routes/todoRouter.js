var express = require('express');

var routes = function (Task) {
  var todoRouter = express.Router();
  todoRouter.route('/')
    .get(function (req, res) {
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
      res.status(201).send(task);
    });

  todoRouter.use('/:taslId', function (req, res, next) {
    Task.findById(req.params.taskId, function (err, task) {
      if (err) {
        res.status(500).send(err);
      }
      else if (task) {
        req.task = task;
      }
      else {
        res.status(404).send('Task not found');
      }

    });
    todoRouter.route('/:taskId')
      .delete(function (req, res, next) {


      })
  });
  return todoRouter;
};

module.exports = routes;
