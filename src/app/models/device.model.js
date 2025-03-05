export default (sequelize, Sequelize) => {
  const Device = sequelize.define('device', {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    category: {
      type: Sequelize.STRING,
    },
    color: {
      type: Sequelize.STRING(128),
      validate: {
        isAlpha: true,
        max: 16,
      },
    },
    partNumber: {
      type: Sequelize.INTEGER.UNSIGNED,
      validate: {
        isNumeric: true,
        isInt: true,
      },
    },
  });
  return Device;
};
