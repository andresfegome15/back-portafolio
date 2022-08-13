const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

//init express
const app = express();

//utils json
app.use(express.json());

//midleware
const { ErrorHandler } = require("./middleware/handlerError.middleware");

//utils
const { GlobalError } = require("./utils/ErrorGlobal.utils");

//Router
const { homeRouter } = require("./router/home.router");
const { contactoRouter } = require("./router/contacto.router");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000, // 1 hr
  message: "Number of requests have been exceeded",
});

app.use(limiter);

app.use(helmet());

app.use(compression());

app.use(cors());

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

//endpoints
app.use("/", homeRouter);
app.use("/api/v1/contactos", contactoRouter);

//endponit no found
app.all("*", (req, res, next) => {
  next(
    new GlobalError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(ErrorHandler);
module.exports = { app };
