const JobseekerModel = require("../../models/JobseekerModel.js");

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
exports.deleteOneJobseeker = async (req, res) => {
  try {
    await JobseekerModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Delete specific jobseeker Info failed",
      message: err,
    });
    console.log("err from getAllJobseeker:", err);
  }
};

exports.updateOneJobseeker = async (req, res) => {
  try {
    const jobseeker = await JobseekerModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json({
      status: "success",
      data: {
        jobseeker,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Updated specific jobseeker Info failed",
      message: err,
    });
    console.log("err from getAllJobseeker:", err);
  }
};
