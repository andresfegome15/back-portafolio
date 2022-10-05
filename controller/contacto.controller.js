const path = require("path");

// Models
const { Contacto } = require("../models/contacto.models");

// Utils
const { catchAsync } = require("../utils/catchAsync.utils");
const { Email } = require("../utils/email.utils");

const getContactoById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const contacto = await Contacto.findOne({ where: { id } });
  res.status(201).json({ contacto });
});

const getcontactos = catchAsync(async (req, res, next) => {
  const contactos = await Contacto.findAll();
  res.status(202).json({ contactos });
});

const createContacto = catchAsync(async (req, res, next) => {
  const { name, email, mensaje } = req.body;
  await Contacto.create({ name, email, mensaje });
  await new Email(email).sendWelcome(name);

  res.status(201).json({ status: "success" });
});

module.exports = { getcontactos, createContacto, getContactoById };
