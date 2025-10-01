import express from 'express'

const app = express()
// route handlers
app.get('/', (req, res) => {
  res.send('Hello World')
})

// we can add our own routes
app.get('/tanay', (req, res) => {
  res.send('Hello Tanay')
})

app.listen(3000) // which port