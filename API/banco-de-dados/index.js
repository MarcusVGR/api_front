const Sequelize = require('sequelize');
const config = require('config');

const instancia = new Sequelize(
    config.get('mysql.banco_de_dados'),
    config.get('mysql.usuario'),
    config.get('mysql.senha'),
    config.get('mysql.porta'),
    {
        host: config.get('mysql.host'),
        dialect: 'mysql',
    }
);

module.exports = instancia;