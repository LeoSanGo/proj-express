const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('fullStack Master');
});
router.get('/pagina1', (req, res) => {
    res.send('fullStack Master');
});

module.exports = router;