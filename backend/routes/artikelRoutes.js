const express = require("express");
const router = express.Router();
const controller = require("../controllers/artikelController.js");
const auth = require("../middlewares/authMiddleware.js");

router.get("/", controller.getAllArtikel);
router.get("/:id", controller.getArtikel);

// ✅ Require login to create artikel
router.post("/", auth, controller.createArtikel);

router.put("/:id", controller.updateArtikel);
router.delete("/:id", controller.deleteArtikel);

module.exports = router;
