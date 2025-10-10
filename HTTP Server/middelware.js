import express from 'express'

const app = express()

// function isOldEnough(age){
//     if(age >= 14){
//         return true 
//     } else {
//         return false
//     }

// }    this is our basic function 

// lets create function using middelware

function isOldEnoughMiddelware(req,res,next){
    const age = req.query.age
    if(age >= 14){
        next()
     } else {
        res.json({
        msg: "you are not of age yet"
    })
    }
}

// we can use app.use() to create middelware that can automatically get called
// app.use(req,res,next=>{
// count = count + 1})  it will directly get called


app.get('/ride1', isOldEnoughMiddelware ,(req, res) => {
  
    res.json({
        msg: "you successfully riden the ride 1"
    })   
})

app.get('/ride2',isOldEnoughMiddelware , (req, res) => {
 
    res.json({
        msg: "you successfully riden the ride 2"
    })
 
  
})

app.listen(3000)

