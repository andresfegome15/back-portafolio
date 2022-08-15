const express = require("express");
const {
  getcontactos,
  createContacto,
} = require("../controller/contacto.controller");

const contactoRouter = express.Router();

contactoRouter.get("/", getcontactos);
contactoRouter.post("/", createContacto);

module.exports = { contactoRouter };
