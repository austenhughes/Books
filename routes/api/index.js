const router = require("express").Router();
const jokeRoutes = require("./jokes");
const userRoutes = require("./user");
const authRoutes = require("./auth");

// Jokes route
router.use("/jokes", jokeRoutes);
// User route
router.use("/user", userRoutes);
// Auth route
router.use("/auth", authRoutes);

module.exports = router;
