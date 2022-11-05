const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  console.log("req", req)
  res.send("Yellowwwww")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("it works")
