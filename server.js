const express = require("express")
const path = require('path')
const app = express()
const MongoClient = require("mongodb").MongoClient
const cors = require("cors")
const PORT = 5000
// const router = express.Router()
require("dotenv").config()
// const testAPIRouter = require("./routes/api")
const staticPath = path.join(__dirname, '/')

let db,
    uri = process.env.ATLAS_URI
    dbName = "task-tracker"

MongoClient.connect(uri, {useUnifiedTopology: true})
    .then(client => {
        console.log(`Successfully connected to the Task Tracker Database`)
        db = client.db(dbName)    
})

app.use(express.static('staticPath'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())

app.get("/api", (req, res) => {
    res.send({message: `Backend successfully running on port ${PORT}`})
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})

// module.exports = router