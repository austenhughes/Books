const router = require("express").Router();
const { authPerson } = require("../../controllers/authController");

router.post("/", authPerson);

router.get("/:id")

module.exports = router;
