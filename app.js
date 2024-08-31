const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
 
mongoose.connect('mongodb://localhost/simplecrud', {useNewUrlParser: true, useUnifiedTopology: true});
 
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
 
const User = mongoose.model('User', userSchema);
 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
 
app.post('/user', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});
 
app.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
});
 
app.put('/user/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send({message: 'User updated'});
  } catch (error) {
    res.status(400).send(error);
  }
});
 
app.delete('/user/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'User deleted'});
  } catch (error) {
    res.status(400).send(error);
  }
});
 
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
