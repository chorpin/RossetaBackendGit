const express = require("express");
const poolController = require("./../controller/poolController");
const router = express.Router();

router.param("id", (req, res, next, value) => {
  console.log(`id is ${value}`);

  next();
});

router
  .route("/")
  .post(poolController.postToPool)
  .get(poolController.getAllPool);
router.route("/:id").get(poolController.getPoolById);
module.exports = router;
