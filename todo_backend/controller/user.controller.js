const UserService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try {
        const {email, password} = req.body; //get email and password

        const successRes = await userService.registerUser(email,password);

        res.json({status:true, success:"User Registered Successfully"});
    } catch (error) {
        next(error);
    }
}

exports.login = async(req,res,next)=>{
    try {
        const {email, password} = req.body; //get email and password

        const user = await UserService.checkUser(email);
        if(!user){
            throw new Error('user don\'t exist');
        }

        const isMatch = await user.comparePassword(password);
        if(isMatch === false) {
            throw new Error("password invalid");
        }

        let tokenData = {_id:user._id, email:user.email}; 

        const token = await UserService.generateToken(tokenData,"123",'1h');

        res.status(200).json({status:true,token:token});

    } catch (error) {
        next(error);
    }
}