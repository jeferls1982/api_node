const express = require("express");
const app = express();
const geolib = require('geolib');


// ------------------------------------------------------------arquivos de configuração da api
const bodyParser = require("body-parser");
const cors = require("cors");

// -----------------------------------------------------------------conexão com o banco
const connection = require('./database/db');
connection
    .authenticate()
    .then(() => {
        console.log('sucesso');
    })
    .catch((err) => {
        console.log(err);
    })

// ------------------------------------------------------------------chamando os arquivos de rotas
var contactRouter = require('./routes/cadastro/cadastro_contato')
var viagemRouter = require('./routes/viagem/viagem')
var itinerarioRouter = require('./routes/viagem/itinerario')


//-------------------------------------------------------------------geolib
const { getDistance } = require("geolib");
var teste = getDistance({ latitude: -25.09, longitude: -50.16 }, { latitude: -24.79, longitude: -50.01 });


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/contato', contactRouter);
app.use('/viagem', viagemRouter);
app.use('/itinerario', itinerarioRouter);








// ---------------------------------------------------------------rodando o servidor na porta 3000
app.listen(3001, () => {
    console.log('rodando');
});

console.log(teste);