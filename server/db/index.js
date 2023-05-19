const db = require('./database');
const Students = require('./models/students');
const Campus = require('./models/campus');

Campus.hasMany(Students);
Students.belongsTo(Campus);

module.exports = {
    db,
    Students, 
    Campus
}