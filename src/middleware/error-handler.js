console.log(process.env)

const errorHandler = (err, req, res, next) => {
    if (process.env.NODE_ENV === "development") {
        return res.status(500).json({ error: err })
    } else {
        return res.status(500).json({ error: "Something went wrong" })
    }
}

module.exports = errorHandler
