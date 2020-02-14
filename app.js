const express = require('express')
const router = require('./router/index')
const bodyParser = require('body-parser')
const cors = require('cors')

// 创建 express 应用
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)

// app.get('/', function(req, res) {
//   res.send('hello node')
// })

const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http Server is running on http://%s:%s', address, port)
})
