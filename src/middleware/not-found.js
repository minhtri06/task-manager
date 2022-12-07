const notFound = (req, res) => {
    return res.status(404).send("route's not found")
}

module.exports = notFound
