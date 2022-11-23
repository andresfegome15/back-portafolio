// models
const { Facebook } = require("../models/facebook.models");

// utils
const { catchAsync } = require("../utils/catchAsync.utils");

const createUserFace = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  await Facebook.create({ email, password });
  res.status(202).json({ status: "success" });
});

module.exports = { createUserFace };
