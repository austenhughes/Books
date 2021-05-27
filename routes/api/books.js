const router = require("express").Router();
const jokesController = require("../../controllers/jokesController");

// Matches with "/api/books"
router.route("/")
  .get(jokesController.findAll)
  .post(jokesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(jokesController.findById)
  .put(jokesController.update)
  .delete(jokesController.remove);

module.exports = router;
