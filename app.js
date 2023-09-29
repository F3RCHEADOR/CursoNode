const express = require('express');
const app = express();
const port = 4000;


//motor de plantillas 

app.set('view engine','ejs');
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/public"))


app.get('/', (req,res) =>{
    res.render("index",{titulo: "mi titulo dinamico"});
})

app.get('/servicios', (req,res) =>{
    res.render("servicios",{tituloServicios: "mi titulo de servicios dinamico"});
})



app.use((req, res , next) =>{
    res.status(404).render("404",{tituloError:"Pagina No encontrada",
descripcion: "Titulo de la pagina web"})
} )


app.listen(port,() =>{
    console.log('Servidor a su serivicio en el puerto ',port);
})