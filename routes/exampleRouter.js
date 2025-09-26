const express = require('express');
const router = express.Router();

const expController = require('../controllers/expController');

router.get("/list",expController.example);
router.get("/random",expController.random);

module.exports = router;