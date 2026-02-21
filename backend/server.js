const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (Note the hostname 'mongodb' matches the Docker service name)
mongoose.connect('mongodb://mongodb:27017/tasksdb');

const Task = mongoose.model('Task', { name: String });

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).send(task);
});

app.listen(5000, () => console.log('Backend running on port 5000'));