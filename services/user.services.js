const userModel = require('../model/user.model');

class userService {
    static async registerUser(id,name,email)
{
    try {
        const createUser = new userModel({id, name, email});
        return await createUser.save();
    } catch (error) {
        throw error;
    }
}
}
module.exports = userService;