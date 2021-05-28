const router = require("express").Router();
const jokeRoutes = require("./jokes");

// Jokes route
router.use("/jokes", jokeRoutes);

module.exports = router;
