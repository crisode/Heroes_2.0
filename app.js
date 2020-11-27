
const express = require('express');
const fs = require('fs');
const app = express();

app.listen(3030, () => console.log('Server running in 3030 port'));

const heroes = JSON.parse(fs.readFileSync(__dirname + '/data/heroes.json', 'utf-8'));
//RUTAS//
const mainRoute = require("./router/main")// requiero el archivo de carpeta router y el archivo main
//APP.USE//
const heroeRoute = require("./router/heroes")
const creditosRoute = require("./router/creditos")
// Ruta /heroes ➝ se envía todo el array y Express lo parsea para el browser como JSON :D
app.use("/heroes",heroeRoute)
app.use('/heroes/detalle/:id',heroeRoute)
app.use('/heroes/bio/:id/:ok?',heroeRoute)
app.use("/creditos", creditosRoute)
app.use("/",mainRoute) // si por navegador viene / le digo que la busque en main route
app.use("*",mainRoute)
