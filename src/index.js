import express from 'express'


const app = express()
const port = 3030

app.get('/health', (req, res) => {
  res.json({msg: 'healthy'})
})

app.get('/', (req, res) => {
  res.json({msg: 'Hello, from express js'})
})


app.listen(port, () => {
  console.log(`server started on port ${port}`)
})