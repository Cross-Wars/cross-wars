const router = require("express").Router()
const crosswordRouter = require("./crossword")

router.use("/crosswords", crosswordRouter)

router.use((req, res, next) => {
  const error = new Error("Not Found")
  error.status = 404
  next(error)
})

module.exports = router
