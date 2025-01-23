const express = require("express");
const router = express.Router();

// Example route
router.get("/ping", (req, res) => {
  res.json({ message: "pong" });
});

module.exports = router;
