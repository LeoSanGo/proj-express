const express = require('express');
const router = express.Router();

router.get('/list', (req, res) => {
    res.send('fullStack Master');
});
router.get('/new', (req, res) => {
    res.send('fullStack Master');
});

module.exports = router