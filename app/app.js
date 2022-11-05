const express = require("express")
const app = express()
const port = 3000

const { MongoClient } = require("mongodb")
// Replace the uri string with your connection string.
const uri =
  "mongodb+srv://testUser:testPassword@cluster0.qtg7mac.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)
console.log("client :", client)

// testUser
// testPassword

app.get("/", (req, res) => {
  res.send("Yellowwwww")
})

app.get("/ciao", (req, res) => {
  res.send(JSON.stringify(client))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

console.log("it works")
