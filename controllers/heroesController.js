const fs = require("fs")
const bd = "./data/heroes.json";
const heroes = JSON.parse(fs.readFileSync(bd, "utf-8"));

module.exports = {
    index: (req, res) => {
        res.send(heroes);
    },
    detalle: (req, res) => {
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        if (heroe[0] == undefined) {
            res.send('Heroe no disponible en estos momento..... ')
        } else {
            res.send(`Hola, mi nombre es ${heroe[0].nombre} y soy ${heroe[0].profesion}`)
        }
    },
    bio : (req, res)=>{
        let heroe = heroes.filter(heroe => {
            return heroe.id == req.params.id
        });
        if(heroe[0] == undefined){
            res.send('No encontramos un héroe para mostrarte su biografía')
        }else if(req.params.ok){
            res.send(`
            Héroe: ${heroe[0].nombre}\n
             || Reseña: ${heroe[0].resenia}`)
        }else{
            res.send(`${heroe[0].nombre} dice: Lamento que no quieras saber más de mí :(`)
        }
    }
    
}