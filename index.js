const express = require("express");
const app = express();

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
var gameRouter = require('./routes/games')





app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/games', gameRouter);





// ---------------------------------------------------------------rodando o servidor na porta 3000
app.listen(3000, () => {
    console.log('rodando');
});