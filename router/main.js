
const express = require("express");//requiero express
const router = express.Router();// asigo la funcion Router a una variable
const mainControlller =require("../controllers/mainController")
// Ruta Raíz / ➝ Home
router.get('/',mainControlller.index);
router.get("*",mainControlller.error)


module.exports = router // exporto el modulo