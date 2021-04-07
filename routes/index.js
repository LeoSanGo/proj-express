const express = require('express');
const app = express();
const router = express.Router();




app.get('/', (req, res) => {
    res.send('fullStack Master');
});
app.get('/pagina1', (req, res) => {
    res.send('fullStack Master');
});

module.exports = router;