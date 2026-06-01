const express = require('express');
const multer = require('multer');

const generateCaption = require('../services/ai.service');

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});

router.post(
  "/generate-caption",
  upload.single("image"),
  async (req, res) => {

    try {

      const result =
        await generateCaption(
          req.file.buffer
        );

      res.json({
        success: true,
        result
      });

    } catch (err) {

      res.status(500).json({
        success: false,
        message: err.message
      });
    }
});

module.exports = router;