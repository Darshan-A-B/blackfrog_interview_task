const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

const taskSchema = new mongoose.Schema({
  title: String,
  relatedTask: String,
  description: String,
  assignTo: String,
  reportTo: String,
  startDate: Date,
  dueDate: Date,
  startTime: String,
  dueTime: String,
  priority: String,
  markCritical: Boolean,
  attachFile: String
});

const Task = mongoose.model('Task', taskSchema);

app.get('/successpost', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/successpost', (req, res) => {
  const task = new Task({
    title: req.body.title,
    relatedTask: req.body.relatedTask,
    description: req.body.description,
    assignTo: req.body.assignTo,
    reportTo: req.body.reportTo,
    startDate: req.body.startDate,
    dueDate: req.body.dueDate,
    startTime: req.body.startTime,
    dueTime: req.body.dueTime,
    priority: req.body.priority,
    markCritical: req.body.markCritical,
    attachFile: req.body.attachFile
  });
  console.log('posted')
  task.save()
    .then(result => {
      console.log(result);
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
