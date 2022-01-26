const PoolContentModel = require("./../models/PoolContentModel.js");

exports.postToPool = async (req, res) => {
  try {
    const poolContent = await PoolContentModel.create(req.body);
    console.log(req.body);
    //res.send("Response From Ptolemy");
    res.status(200).json({
      status: "success",
      message: "Hello From Ptolemy",
      message2: "Ready to Post!",
      costumerAdd: req.addByHeisenberg,
      data: poolContent,
    });
  } catch (err) {
    res.status(400).json({
      status: "Client Bad Request",
      message: err,
    });
    console.log("err from postToPool:", err);
  }
};

exports.getAllPool = async (req, res) => {
  try {
    const allFish = await PoolContentModel.find();
    res.status(200).json({
      quantity: allFish.length,
      status: "Catching all fish",
      fish: allFish,
    });
  } catch (err) {
    res.status(400).json({
      status: "Get all fish failed",
      message: err,
    });
    console.log("err from getAllPool:", err);
  }
};

exports.getPoolById = (req, res) => {
  res.send(
    `Previlige the Pool from Port :${process.env.PORT}, ${process.env.NODE_ENV}, Not Implemented`
  );
};

// An implemented by Level
exports.getPoolByLevel = (req, res) => {
  try {
    const fishAtRequiredLevel = PoolContentModel.find({
      level: req.param.level,
    });
  } catch (err) {
    res.status(400).json({
      status: "Get fish by level failed",
    });
    console.log("err from getAllPool:", err);
  }
};
