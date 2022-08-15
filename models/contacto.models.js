const { db, DataTypes } = require("../utils/db");

const Contacto = db.define("Contacto", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  mensaje: { type: DataTypes.STRING, allowNull: false },
});

module.exports = { Contacto };
