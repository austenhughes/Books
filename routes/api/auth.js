const router = require("express").Router();
const { authPerson } = require("../../controllers/authController");
// const  authController = require("../../controllers/authController");

// router.route("/")
// .post(authController.authPerson)
// .get(function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.post("/", authPerson);

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log("hi im sorta working")
  res.render("index", { title: "Express" });
});

module.exports = router;
