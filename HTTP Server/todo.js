import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)

app.use(express.json()) // Parsing JSON Data: When a client sends data in JSON format within the request body, 
// express.json() automatically parses this data and makes it accessible in the req.body object within your Express route handlers. Without it, 
// req.body would be undefined, and you would not 
// be able to access the submitted data.

let todos =[]
let idc = 1

app.get("/todos",(req,res)=>{
    res.json(todos)
})

app.post("/todos",(req,res)=>{
    const {title} = req.body
    const newTodo = {id : idc++ , title,completed : false}
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

app.delete("/todos/:id",(req,res)=>{
    const {id} = req.params // Get ID from URL
    todos = todos.filter(t=>t.id !== parseInt(id))
    res.json({message : "todo deleted" })
})