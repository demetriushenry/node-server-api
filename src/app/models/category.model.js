export default (sequelize, Sequelize) => {
  const Category = sequelize.define("category", {
    id: {
      type: Sequelize.BIGINT(20),
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING(128),
      validate: {
        notNull: true,
        notEmpty: true,
        max: 128,
      },
    },
  });
  return Category;
};
