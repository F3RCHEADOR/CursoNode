const express = require('express');
const app = express();
const port = 3000;


//motor de plantillas 

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/public"))


//Rutas de la Api
app.use('/',require('./router/RutasWebs'));
app.use('/mascotas',require('./router/Mascotas'));

app.use((req, res , next) =>{
    res.status(404).render("404",{tituloError:"Pagina No encontrada",
descripcion: "Titulo de la pagina web"})
} )


app.listen(port,() =>{
    console.log('Servidor a su serivicio en el puerto ',port);
})