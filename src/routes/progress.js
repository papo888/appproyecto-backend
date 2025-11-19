const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

router.get("/weekly", auth, async (req, res) => {
  res.json({
    progress: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
    }
  });
});

module.exports = router;

