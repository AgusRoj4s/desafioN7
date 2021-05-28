import express from 'express'
const app = express()


const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});


app.get('/', (req, res) => {
    console.log('request recibido!');
    res.json({ msg: 'Hola mund ' });
})

/*server.on('error', error => {
    console.log('Error en el servidor', error);
});*/