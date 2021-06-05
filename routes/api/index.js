const router = require("express").Router();
const jokeRoutes = require("./jokes");
const userRoutes = require("./user");

// const { authPerson } = require("../controllers/authController");

// Jokes route
router.use("/jokes", jokeRoutes);
// User route
router.use("/user", userRoutes);

module.exports = router;
