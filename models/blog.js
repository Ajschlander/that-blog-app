module.exports = function(sequelize, DataTypes) {
  const Blog = sequelize.define("Blog", {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    author: DataTypes.STRING,
    body: DataTypes.STRING(10000)
  });
  return Blog;
};
