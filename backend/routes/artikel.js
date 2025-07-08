const express = require("express");
const router = express.Router();
const Artikel = require("../models/Artikel");

// Get all articles
router.get("/", async (req, res) => {
  const data = await Artikel.query().orderBy("created_at", "desc");
  res.json(data);
});

// Get article by ID
router.get("/:id", async (req, res) => {
  const artikel = await Artikel.query().findById(req.params.id);
  if (!artikel) return res.status(404).json({ error: "Artikel tidak ditemukan" });
  res.json(artikel);
});

// Create new article
router.post("/", async (req, res) => {
  const artikelBaru = await Artikel.query().insert(req.body);
  res.status(201).json(artikelBaru);
});

// Update article
router.put("/:id", async (req, res) => {
  const artikelUpdate = await Artikel.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning("*");
  res.json(artikelUpdate);
});

// Delete article
router.delete("/:id", async (req, res) => {
  await Artikel.query().deleteById(req.params.id);
  res.status(204).end();
});

module.exports = router;
