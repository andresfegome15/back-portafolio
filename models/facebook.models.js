const { db, DataTypes } = require("../utils/db");

const Facebook = db.define("facebook", {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  email: { allowNull: false, type: DataTypes.STRING },
  password: { allowNull: false, type: DataTypes.STRING },
});

module.exports = { Facebook };
