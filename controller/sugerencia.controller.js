const path = require("path");

// Models
const { Sugerencia } = require("../models/sugerencia.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.utils");

const getSugerencia = catchAsync(async (req, res, next) => {
  const sugerencia = await Sugerencia.findAll({ order: [["id", "DESC"]] });

  res.status(200).json({ sugerencia });
});

const createSugerencia = catchAsync(async (req, res, next) => {
  const { sugerencia } = req.body;
  const sugerencias = await Sugerencia.create({ sugerencia });
  res.status(201).json({ sugerencias });
});

module.exports = { getSugerencia, createSugerencia };
