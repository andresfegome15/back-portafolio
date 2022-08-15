const { db, DataTypes } = require("../utils/db");

const Sugerencia = db.define("sugerencia", {
  id: {
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  sugerencia: { type: DataTypes.STRING },
});

module.exports = { Sugerencia };
