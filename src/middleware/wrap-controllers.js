// Wrap try-catch block to our controller functions
const wrapController = (controllerObj) => {
    const wrappedController = {}

    for (const controller in controllerObj) {
        wrappedController[controller] = async (req, res, next) => {
            try {
                await controllerObj[controller](req, res)
            } catch (error) {
                next(error)
            }
        }
    }

    return wrappedController
}

module.exports = wrapController
