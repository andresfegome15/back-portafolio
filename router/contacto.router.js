const express = require("express");
const {
  getcontactos,
  createContacto,
  getContactoById,
} = require("../controller/contacto.controller");

const contactoRouter = express.Router();

contactoRouter.get("/:id", getContactoById);
contactoRouter.get("/", getcontactos);
contactoRouter.post("/", createContacto);

module.exports = { contactoRouter };
