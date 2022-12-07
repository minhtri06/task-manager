const express = require("express")
const router = require("./routes/index")
const connectDb = require("./db/connect-db")
const notFound = require("./middleware/not-found")
require("dotenv").config()

const app = express()

app.use(express.json())

app.use("/api", router)
app.use(notFound)

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
