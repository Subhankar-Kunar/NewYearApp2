const express= require("express");
const { createToDO, updateToDo }= require("./types");
const { todo } = require("./db");

const app= express();

app.use(express.json());

app.post("/todo", async function(req, res){
    
    const createPayload= req.body;
    console.log(createPayload);
    const parsedPayload= createToDO.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "Invalid inputs"
        })
        return;
    }

    //put it in MongoDB
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })
     
})
app.get("/todos", async function(req, res){
    console.log("GEtttttttttttttt-----------11111111111")
    const todos= await todo.find({})

    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayload= req.body;
    const parsedPayload= updateToDo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.safeParse(411).json({
            msg: "Invalid Inputs"
        })
        return;
    }
    //put it in mongoDB
    await todo.update({
        _id: req.body,
    },{
        completed: true
    })
    
    res.json({
        msg: "Completed"
    })

})

app.listen(3000, ()=>{
    console.log("Checkingggggggggggggggggggggggggg")
});