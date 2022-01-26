const express = require("express");
const jobseekerController = require("./../models/controller/jobseekerController.js");
const router = express.Router();

router.param("id", (req, res, next, value) => {
  console.log(`id is ${value}`);

  next();
});

router
  .route("/")
  .post(jobseekerController.postToJobseeker)
  .get(jobseekerController.getAllJobseeker);
router.route("/:id").patch(jobseekerController.updateOneJobseeker);
module.exports = router;
