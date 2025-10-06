import express from 'express'

const app = express()

// function isOldEnough(age){
//     if(age >= 14){
//         return true 
//     } else {
//         return false
//     }

// }    this is our basic function 

app.get('/ride1', (req, res) => {
  if(isOldEnough(req.query.age)){
    res.json({
        msg: "you successfully riden the ride 1"
    })
  }
  else{
    res.status(411).json({
        msg:"you are not of age yet"
    })
  }
})

app.get('/ride2', (req, res) => {
  if(isOldEnough(req.query.age)){
    res.json({
        msg: "you successfully riden the ride 2"
    })
  }
  else{
    res.status(411).json({
        msg:"you are not of age yet"
    })
  }
})

app.listen(3000)

