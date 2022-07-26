const express = require("express")
const app = express.Router()
const MongoClient = require("mongodb").MongoClient
const cors = require("cors")
const PORT = 8000
const router = express.Router()
require("dotenv").config()
const testAPIRouter = require("./routes/testAPI")

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
app.use(cors())


app.get("/", (req, res) => {
    
})

app.use("/testAPI", testAPIRouter)

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})

module.exports = router