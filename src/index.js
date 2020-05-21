const express = require('express');
const cors = require('cors');
const routes = require('./routes/');
const PORT = 3000;
//
const app = express();
//
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
//
app.listen(PORT, () => {
    console.log('Servidor rodando na porta ' + PORT);
});

