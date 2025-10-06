import express from 'express'

const app = express()

function sum(n){
    let ans = 0
    for(let i = 1 ; i < n ; i++){
        ans = ans + i

    }
    return ans
}

app.get('/', (req, res) => {
  const n = req.query.n
  const ans = sum(n)
  res.send("your ans is" + ans)
})

app.listen(3000)

//to give input start with ? mark and write like this ?n=3 