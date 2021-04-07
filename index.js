const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('./routes/index');

app.get('/', indexRouter);

app.get('/clients/list', (req, res) => {
    res.send('fullStack Master');
});
app.get('/clients/new', (req, res) => {
    res.send('fullStack Master');
});
app.listen(port, () => console.log('listening on port ' + port));