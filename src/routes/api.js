const express = require('express');
const router = express.Router();

const generateController = require('../controllers/generateController');

router.post('/generate', (req, res) => generateController.generate(req, res));

module.exports = router;