const path = require("path");

// Models
const { Visita } = require("../models/visitas.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.utils");

const getVisita = catchAsync(async (req, res, next) => {
  const visita = await Visita.findAll({ order: [["id", "DESC"]] });

  res.status(200).json({ visita });
});

const createVisita = catchAsync(async (req, res, next) => {
  const { counter } = req.body;
  const visitas = await Visita.create({ counter });
  res.status(201).json({ visitas });
});

module.exports = { getVisita, createVisita };
