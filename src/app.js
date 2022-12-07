const express = require("express")
const router = require("./routes/index")
const connectDb = require("./db/connect-db")
require("dotenv").config()

const app = express()

app.use(express.json())

app.get("/api", router)

const PORT = process.env.PORT

const start = async () => {
    try {
        await connectDb(process.env.DB_CONNECTION_STRING)

        app.listen(PORT, () => console.log("Server is running on port", PORT))
    } catch (error) {
        console.log(error)
    }
}

start()
