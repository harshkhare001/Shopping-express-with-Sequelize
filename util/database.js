const Sequelize = require('sequelize');

const  sequilze = new Sequelize('node-complete', 'root', 'hulk@123', {dialect:'mysql', host:'localhost'});

module.exports = sequilze; 
