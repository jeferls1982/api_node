const { type } = require('express/lib/response');
const Sequelize = require('sequelize');
const connection = require('../database/db');

const Viagem = connection.define('viagem', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    origem: {
        type: Sequelize.STRING,
        allowNull: false
    },
    latitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    longitude: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    itinerario: {
        type: Sequelize.JSON,
        allowNull: true,
        default: null
    }


})

Viagem.sync({ force: false }).then(() => {});

module.exports = Viagem;