const Sequelize = require('sequelize');
const connection = require('../database/db');

const Itinerario = connection.define('itinerario', {
    viagem_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estado: {
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
    }


})

Itinerario.sync({ force: false }).then(() => {});

module.exports = Itinerario;