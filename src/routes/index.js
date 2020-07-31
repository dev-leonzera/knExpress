const { Router } = require('express');

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({
        error: false,
        message: 'Bem vindo à selva'
    })
});

require('./routes/auth')(routes)
require('./routes/profile')(routes)

module.exports = routes;