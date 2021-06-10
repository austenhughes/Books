const router = require("express").Router();
const { authPerson } = require("../../controllers/authController");
// const  authController = require("../../controllers/authController");

// router.route("/")
// .post(authController.authPerson)

router.post("/", authPerson);

module.exports = router;
