const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
    res.send("Bem vindo");
});

module.exports = routes;