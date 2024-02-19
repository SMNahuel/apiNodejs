const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./database/db");
const app = express();
require("./database/associate");
//require("./database/seed");
app.use(cors()); //Habilitamos peticiones (GET - PUT - POST - DELETE)
app.use(logger("dev")); //Muestra peticiones
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // ?
app.get("/api", (req, res) => {
  const path = `/api/item/${v4()}`;
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Go to item: <a href="${path}">${path}</a>`);
});
const setContext = (req, res, next) => {
  if (!req.context) req.context = {};
  next();
};
app.use(setContext);

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

//Defino las rutas
const port = process.env.PORT || 3000;
app.use("/", require("./routes"));

app.listen(port, () => {
  sequelize
    .sync({ force: false })
    .then(() => {
      console.log("Nos hemos conectado a la base de datos");
    })
    .catch((error) => {
      console.log("Se ha producido un error", error);
    });
    
  console.log("Servidor iniciado en el puerto 5000");
});
