const fs = require('fs');
const test = require('fast-csv');
console.log(test)


const stream = fs.createReadStream('../database/lista_municipios.csv')
    //console.log(stream)
const streamCsv = test.on();
console.log(streamCsv)



//module.exports = Municipios