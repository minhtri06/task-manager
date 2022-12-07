const express = require("express")
const router = require("./routes/index")

const app = express()

app.use(express.json())

app.get("/api", router)

const PORT = 3000

app.listen(PORT, console.log("Server is running on port", PORT))
