const { Adduser, getUser, UpdateUser, DeleteUser } = require('../Services/user.Services');

const router = require('express').Router();

//post
router.post('/Adduser',Adduser)
//get
router.get('/getuser',getUser)
//update
router.put('/updateuser', UpdateUser)
//delete
router.delete('/updateuser', DeleteUser)




module.exports = router;