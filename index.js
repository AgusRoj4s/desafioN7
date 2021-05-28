import express from 'express';
import fs from 'fs';
const app = express();

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let visitas1 = 0;
let visitas2 = 0;
const puerto = 8080;

const server = app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});


app.get('/items', (req, res) => {
    console.log('request recibido!');
    visitas1++;
    try {
        let data = fs.readFileSync('./productos.txt', 'utf-8');
        let obj = JSON.parse(data);
        res.send({ items: obj, cantidad: obj.length });
    } catch (error) {
        console.log(error);
    }
});

app.get('/item-random', (req, res) => {
    console.log('request recibido!');
    visitas2++;
    try {
        let data = fs.readFileSync('./productos.txt', 'utf-8');
        let obj = JSON.parse(data);
        let random = obtenerRandom(0, obj.length);
        res.send({ item: obj[random] });
    } catch (error) {
        console.log(error);
    }
});

app.get('/visitas', (req, res) => {
    console.log('request recibido!');
    res.send({ visitas: `{ items:${visitas1}, item:${visitas2} }` });
});

server.on('error', error => {
    console.log('Error en el servidor', error);
});
