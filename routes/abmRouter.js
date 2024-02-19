const express = require("express");
const router = express.Router();

/* Requerimos los controladores */
const user = require("../controllers/user");
const superheroe = require("../controllers/superheroe");


/* ------------------------------ Superheroe ABM ----------------------------------------- */
router.delete("/superheroe/:idSuperheroe", async function (req, res) {
  const { idSuperheroe } = req.params;
  const r = await superheroe.abmSuperheroDelete(idSuperheroe);
  return res.sendStatus(200).send(r);
});
/* ------------------------------ Superheroe ABM ----------------------------------------- */

/* ------------------------------ ABM USER ----------------------------------------- */
router.delete("/user/:userId", async function (req, res) {
  const { userId } = req.params;
  await user.deleteUser(userId);
  return res.sendStatus(200);
});

router.get("/user", async function (req, res) {
  const users = await user.read();
  return res.status(200).send(users);
});

router.put("/user/rol", async function (req, res) {
  const { userId, rol } = req.body;
  const resU = await user.updateRol(userId, rol);
  const users = await user.read();
  return res.status(200).send(users);
});

/* ------------------------------ ABM USER ----------------------------------------- */

module.exports = router;
