const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./model/user.model');
const { Adduser, getUser, UpdateUser, DeleteUser } = require('./Services/user.Services');
app.use(express.json())




    


//post

app.post('/Adduser',Adduser)
    
    
    mongoose.connect('mongodb://localhost:27017/demo').then(()=> {
    console.log('connected');
})



//get

app.get('/getuser',getUser)



//update
app.put('/updateuser', UpdateUser)

//delete


app.delete('/updateuser', DeleteUser)




































app.listen(9000)