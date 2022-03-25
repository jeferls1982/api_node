const Sequelize = require('sequelize');
const connection = require('./db');

const Game = connection.define('game', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

})

Game.sync({ force: false }).then(() => {});

module.exports = Game;