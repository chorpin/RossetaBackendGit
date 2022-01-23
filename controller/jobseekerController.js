const JobseekerModel = require("./../models/JobseekerModel.js");

exports.postToJobseeker = async (req, res) => {
  try {
    const jobseekerInfo = await JobseekerModel.create(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "success",
      costumerAdd: req.addByHeisenberg,
      data: jobseekerInfo,
    });
  } catch (err) {
    res.status(400).json({
      status: "Client Bad Request",
      message: err,
    });
    console.log("err from postToJobseekers:", err);
  }
};

exports.getAllJobseeker = async (req, res) => {
  try {
    const allJobseeker = await JobseekerModel.find();
    res.status(200).json({
      quantity: allJobseeker.length,
      status: "Catching all jobseekers Info",
      Jobseekers: allJobseeker,
    });
  } catch (err) {
    res.status(400).json({
      status: "Get all jobseekers failed",
      message: err,
    });
    console.log("err from getAllJobseeker:", err);
  }
};
