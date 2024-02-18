const zod= require("zod");

console.log("I am in zod")
const createToDo= zod.object({
    title: zod.string(),
    description: zod.string(),
}) 

const updateToDo= zod.object({
    id: zod.string()
})

module.exports= {
    createToDo: createToDo,
    updateToDo: updateToDo
}