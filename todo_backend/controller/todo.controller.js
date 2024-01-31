const TodoServices = require('../services/todo.services');

exports.createTodo = async (req, res, next)=>{
    try {
        const {userId, title, desc } = req.body;

        let todo = await TodoServices.createTodo(userId, title, desc);
        res.json({status:true, success:todo})
    } catch (error) {
        next(error);
    }
};

exports.getToDoList =  async (req,res,next)=>{
    try {
        const userId = req.query.userId; // Access userId from query parameters
        // console.log("user id: " +  userId);
        let todoData = await TodoServices.getUserToDoList(userId);
        res.json({status: true,success:todoData});
    } catch (error) {
        console.log(error, 'err---->');
        next(error);
    }
}

exports.deleteTodo = async (req, res, next)=>{
    try {
        const {id} = req.body;

        // console.log("id: " + id);

        let deleted = await TodoServices.deleteTodo(id);
        res.json({status:true, success:deleted})
    } catch (error) {
        next(error);
    }
};