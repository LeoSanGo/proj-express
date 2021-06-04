const express = require("express");
const app = express();
const path = require('path')
const port = 3000;

const indexRouter = require("./routes/index");
const clientsRouter = require("./routes/clients");

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use("/", indexRouter);
app.use("/clients", clientsRouter);

app.listen(port, () => console.log("listening on port " + port));
