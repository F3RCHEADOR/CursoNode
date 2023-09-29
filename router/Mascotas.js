const express = require('express')
const router = express.Router();


router.get('/',(req,res) =>{
    res.render("mascotas",{
        ArrayMascotas : [
            {
                id: 'jdjdj', nombre: 'Perro', descripcion: 'raza de perro'
            },
            {
                id: 'jfjfj', nombre:'Gato', descripcion:'raza de Gato'
            },
        ]
    })
})

module.exports = router;
