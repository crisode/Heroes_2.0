const express = require("express");//requiero express
const router = express.Router();// asigo la funcion Router a una variable
const heroesControlller =require("../controllers/heroesController")

// Ruta Raíz / ➝ Home
router.get('/',heroesControlller.index);
router.get('/detalle/:id',heroesControlller.detalle)
router.get('/bio/:id/:ok?',heroesControlller.bio)


module.exports = router // exporto el modulo