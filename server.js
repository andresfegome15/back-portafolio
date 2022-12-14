const { db } = require("./utils/db");
const dotenv = require("dotenv");
const { app } = require("./app");

dotenv.config({ path: "./config.env" });

db.authenticate()
  .then(() => console.log("db authenticate"))
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log("db sync done"))
  .catch(error => console.log(error));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("music player runing in port ", PORT);
});
