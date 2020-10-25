const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/users');
var cors = require('cors');

// connect to the database using mongoose
mongoose.connect('mongodb+srv://noah:' + process.env.MONGO_ATLAS_PW + '@cluster0-ixbnn.mongodb.net/node-angular?retryWrites=true&w=majority')
.then( () => {
  console.log('Connection successful :)');
})
.catch( () => {
  console.log('Connection failed :(');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());
app.use("/api/jobs", jobRoutes);
app.use("/api/users", userRoutes);



module.exports = app;
