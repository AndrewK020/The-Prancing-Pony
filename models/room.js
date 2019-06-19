module.exports = function(sequelize, DataTypes) {
  
  var Room = sequelize.define("Room", {
    type: DataTypes.STRING
  });

  Room.associate = function(models) {
  
  //   Room.belongsTo(models.Reservation, {
  //     foreignKey: {
  //       allowNull: true
  //     },
  //     targetKey: "id"
  //   });
  };
  return Room;
};
