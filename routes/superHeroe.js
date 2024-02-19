const superheroe = require("../controllers/superheroe");
const express = require("express");
const router = express.Router();

router.get("/", async function (req, res) {
  const result = await superheroe.getSuperheroe();
  return res.status(200).send(result);
});

router.get("/mysuperhero/:idUser", async function (req, res) {
  const { idUser } = req.params;
  if(idUser){
    const result = await superheroe.getMySuperheroe(idUser);
    return res.status(200).send(result);
  }
  return res.status(304)
});

router.post("/add", async function (req, res) {
  superheroe.addSuperheroeByUser(req.body)
  .then(async () => {
    const result = await superheroe.getMySuperheroe(req.body.userId);
    return res.status(200).send(result);
  })
  .catch(() =>{
    return res.status(409);
  })
});

router.post("/delete", async function (req, res) {
  const { userId, superheroeId } = req.body;
  await superheroe.deleteSuperheroeByUser(userId, superheroeId);
  const result = await superheroe.getMySuperheroe(userId);
  return res.status(200).send(result);
});

module.exports = router;
