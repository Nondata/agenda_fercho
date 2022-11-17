require ('dotenv').config();

const express = require("express");
const conexion = require('./database/config');

conexion();
const app = express();

app.set("view engine", "pug");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(require("./routes/contactos"));

app.listen(process.env.PORT, ()=>{
    console.log(`escuchando en http://localhost:$(process.env.PORT)`);
});

