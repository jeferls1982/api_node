const Sequelize = require('sequelize');
const connection = require('../database/db');

const Pessoa = connection.define('pessoa', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: true
    },

})

Pessoa.sync({ force: false }).then(() => {});

module.exports = Pessoa;