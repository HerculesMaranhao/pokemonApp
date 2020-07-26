const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db.config')

/** routes */
const routes = require('./routes/index');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', routes);

db()

let port = 5000;

app.listen(port, () => {
    console.log('Servidor em execução na porta ' + port);
});