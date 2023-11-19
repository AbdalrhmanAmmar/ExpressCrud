const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./model/user.model');
app.use(express.json())
app.use(require('./Api/user.routes'))




    












    mongoose.connect('mongodb://localhost:27017/demo').then(()=> {
    console.log('connected');
})


























app.listen(9000)