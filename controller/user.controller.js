const userService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try {
        const {id,name,email} = req.body;
        const successRes = await userService.registerUser(id,name,email);
        res.json({
            status: true,
            success: "User registered successfully"
        });
    } catch (error) {
        throw error;
    }
}