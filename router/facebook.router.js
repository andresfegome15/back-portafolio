const express = require("express");

const { createUserFace } = require("../controller/facebook.controller");

const facebookRouter = express.Router();

facebookRouter.post("/", createUserFace);

module.exports = { facebookRouter };
