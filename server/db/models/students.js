const Sequelize = require('sequelize');
const db = require('../database');

const Students = db.define('Students', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Dog-Emoji.png'
    },
    gpa: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
        validate: {
            min: 0.0,
            max: 4.0
        }
    }
})

module.exports = Students;