const express = require('express');
const router = express.Router();
const { asignar } = require('../controllers/amigoSecretoController');

router.post('/asignar', asignar);

module.exports = router;
