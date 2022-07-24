const express = require("express")
const app = express()
const MongoClient = require("mongodb").MongoClient
const PORT = 8000
require("dotenv").config()

let db,
    uri = process.env.ATLAS_URI
    dbName = "task-tracker"

MongoClient.connect(uri, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Successfully connected to the Task Tracker Database`)
        db = client.db(dbName)    
})

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/", (req, res) => {
    
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})