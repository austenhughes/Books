const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// const { authPerson } = require("../controllers/authController");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// router.post("/auth", authPerson);

// router.get("/", function (req, res, next) {
//   consol.log("hi");
// });

module.exports = router;
