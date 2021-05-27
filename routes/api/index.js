const router = require("express").Router();
const jokeRoutes = require("./jokes");

// Book routes
router.use("/books", jokeRoutes);

module.exports = router;
