// Wrap try-catch block to our controller functions
const wrapController = (controllerObj) => {
    const wrappedController = {}

    for (const controller in controllerObj) {
        wrappedController[controller] = async (req, res) => {
            try {
                await controllerObj[controller](req, res)
            } catch (error) {
                console.log(error)
                return res.status(500).json({ error })
            }
        }
    }

    return wrappedController
}

module.exports = wrapController
