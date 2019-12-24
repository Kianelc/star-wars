/*
    * Arquivo: app.js
    * Descrição: Arquivo responsável por executar a aplicação e levantar o servidor local.
    * Data: 23/12/2019
    * Author: Kiane L. Casagrande
*/

const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('App - Intro Star Wars');
});

app.listen(3000, () => console.log('Aplicação executando na porta 3000!'));