require("dotenv").config()
const express = require("express")
const router = require("./routes/index")
const connectDb = require("./db/connect-db")
const notFound = require("./middleware/not-found")
const errorHandlerMiddleware = require("./middleware/error-handler")

const app = express()

app.use(express.json())

app.use("/api", router)
app.use(errorHandlerMiddleware)
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
