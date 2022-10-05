const { db, DataTypes } = require("../utils/db");

const Visita = db.define("visita", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  counter: { type: DataTypes.INTEGER },
});

module.exports = { Visita };
