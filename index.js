const express = require("express");
const app = express();
const port = 3000;

const indexRouter = require("./routes/index");
const clientsRouter = require("./routes/clients");

<<<<<<< HEAD
app.use("/", indexRouter);
app.use("/clients", clientsRouter);
=======
app.use((req,res, next) => {
    console.log('passou por aqui');
    res.send('não chama mais nada');
}); 
>>>>>>> 9833a35356be7b0587c15dd4235b859174626651

app.listen(port, () => console.log("listening on port " + port));
