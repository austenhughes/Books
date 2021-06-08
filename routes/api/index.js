const router = require("express").Router();
const jokeRoutes = require("./jokes");
const userRoutes = require("./user");

// const { authPerson } = require("../controllers/authController");

const authRoutes = require("./auth");

// Jokes route
router.use("/jokes", jokeRoutes);
// User route
router.use("/user", userRoutes);


// Auth route
router.use("/auth", authRoutes);

// other

// router.post("/auth", authPerson);

// /* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

module.exports = router;
