const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('favorites', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pokemon_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
