const express = require("express");
const router = express.Router();
const controller = require("../controllers/artikelController.js");

router.get("/", controller.getAllArtikel);
router.get("/:id", controller.getArtikel);
router.post("/", controller.createArtikel);
router.put("/:id", controller.updateArtikel);
router.delete("/:id", controller.deleteArtikel);

module.exports = router;