const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes')

const server = express();

mongoose.connect('mongodb+srv://maxuelOliveira:tinderDev@cluster0.iaqsm.mongodb.net/tinderdev?retryWrites=true&w=majority', {
  useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(3333);