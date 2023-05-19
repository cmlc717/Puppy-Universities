const Sequelize = require('sequelize');
const db = require('../database');

const Campus = db.define('Campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://clipartix.com/wp-content/uploads/2016/06/College-campus-clipart-clipart-kid.jpg'
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.STRING,
        defaultValue: 'extremely large text'
    }
})

module.exports = Campus;