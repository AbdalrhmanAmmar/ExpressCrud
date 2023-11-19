const UserModel = require("../model/user.model")

module.exports.Adduser =async (req, res) => {
     const { name, email, password } = req.body
    await UserModel.insertMany({name, email, password})
    

    res.send('success')
}


module.exports.getUser = async  (req, res) => {
    const user = await UserModel.find({}, { name:-1, email:1, password:-1 })
    
    res.send(user)

}

module.exports.UpdateUser = async (req, res) => { 
    await UserModel.updateMany({ name: 'holmes' }, { name: 'Abdelrhman' })
    


    res.send('updated')
}


module.exports.DeleteUser = async (req, res) => { 
    await UserModel.deleteOne({_id:'655a158badafadd6d1aa191b' })
    


    res.send('deleted')
}