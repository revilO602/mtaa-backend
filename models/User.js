const Sequelize = require('sequelize');
const {db} = require('../database/init');

const User = db.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {underscored: true})

module.exports = {
  User: User,
}
