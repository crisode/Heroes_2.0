const express = require("express");//requiero express
const router = express.Router();// asigo la funcion Router a una variable
const creditosControlller =require("../controllers/creditosController")
// Ruta Raíz / ➝ Home
router.get('/',creditosControlller.index);


module.exports = router // exporto el modulo