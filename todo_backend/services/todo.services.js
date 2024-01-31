const ToDoModel = require('../model/todo.model');

class TodoServices{
    static async createTodo(userId, title, desc){
        const createTodo = new ToDoModel({userId, title, desc});
        return await createTodo.save();
    }

    static async getUserToDoList(userId){
        const todoList = await ToDoModel.find({userId})
        // console.log(todoList);
        return todoList;
    }

    static async deleteTodo(id){
        const todoData = await ToDoModel.findOneAndDelete({_id:id});
        console.log(todoData);
        return todoData;
    }
}

module.exports = TodoServices;