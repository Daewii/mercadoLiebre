const express = require('express');
const { get } = require('http');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(process.env.PORTGIT ||3000, () => {
    console.log('Servidor corriendo en el puerto 3000')
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.post('/login', (req, res) => {
    res.send('recibi un dato')
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.post('/register', (req, res) => {
    res.send('recibi un formulario')
})