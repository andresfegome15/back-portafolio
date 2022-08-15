const express = require("express");
const {
  getSugerencia,
  createSugerencia,
} = require("../controller/sugerencia.controller");

//controller

const sugerenciaRouter = express.Router();

sugerenciaRouter.get("/", getSugerencia);
sugerenciaRouter.post("/", createSugerencia);

module.exports = { sugerenciaRouter };
