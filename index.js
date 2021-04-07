const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('fullStack Master');
});

app.listen(port, () => console.log('litening on port' + port));