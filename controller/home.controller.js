const path = require("path");

// Models
const { Contacto } = require("../models/contacto.models");

// Utils
const { catchAsync } = require("../utils/catchAsync.utils");

const renderIndex = catchAsync(async (req, res, next) => {
  const albums = await Contacto.findAll();

  res.status(200).render("index", {
    title: "Rendered with Pug",
    albums,
  });
});

module.exports = { renderIndex };
