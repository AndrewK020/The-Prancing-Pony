module.exports = function(sequelize, DataTypes) {
  var Guest = sequelize.define("Guest", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    lastTime: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 20]
      }
    },
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  });

  Guest.associate = function(models) {
    Guest.belongsTo(models.room, {
      foreignKey: {
        allowNull: true
      },
      targetKey: "id"
    });
  };
  return Guest;
};
