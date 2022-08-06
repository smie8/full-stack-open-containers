const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000

const data = [
    { "name": "Amy", "number": "0101231234" },
    { "name": "Joseph", "number": "0102231234"},
    { "name": "Natalie", "number": "0101331238"}
]

const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})