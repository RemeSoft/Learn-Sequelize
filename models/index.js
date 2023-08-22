const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('learnsequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging : true
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./user')(sequelize, DataTypes)
db.contact = require('./contact')(sequelize, DataTypes)

db.user.hasOne(db.contact);
db.contact.belongsTo(db.user);

sequelize.sync({force: false});
module.exports = db;
