const express = require('express');
const cors = require('cors');
const routes = require('./routes');//Importação das rotas

const app = express();

app.use(cors(
    //{origin: 'http://barcvonwill.com.br'}
    ));
app.use(express.json());//Informamos ao express que estamos usando json
app.use(routes);

app.listen(3333);//Porta em que esta o backend