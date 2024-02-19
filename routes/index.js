const { Router } = require("express");
const router = Router();

const superheroeRouter = require("./superHeroe.js");
const abmRouter = require("./abmRouter.js");
const authRouter = require("./auth.js");
const userRouter = require("./user.js");
router.use("/abm", abmRouter);
router.use("/auth", authRouter);
router.use("/superheroe", superheroeRouter);
router.use("/user", userRouter);

module.exports = router;
