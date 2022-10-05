const express = require("express");
const { getVisita, createVisita } = require("../controller/visita.conroller");

//controller

const visitaRouter = express.Router();

visitaRouter.get("/", getVisita);
visitaRouter.post("/", createVisita);

module.exports = { visitaRouter };
