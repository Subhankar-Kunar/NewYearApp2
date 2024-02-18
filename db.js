const mongoose= require("mongoose")

mongoose.connect("mongodb+srv://Subhankar99Kunar:Lotus%40123@cluster0.lag8yir.mongodb.net/todos")
.then(() => console.log('connected to mongodb...'))
.catch((err) => console.log('could not connect to mongodb...', err))

const todoSchema= mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo= mongoose.model('todos', todoSchema)

module.exports= {
    todo: todo
}