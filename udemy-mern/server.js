const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() =>console.log('MongoDB connected.'))
  .catch(err =>console.log(err)); 


app.get('/', (req, res) => {
  res.send('hello')
});

//Use routes

app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`))