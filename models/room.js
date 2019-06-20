module.exports = function(sequelize, DataTypes) {
  
  var Room = sequelize.define("Room", {
    type: DataTypes.STRING
  });

  Room.associate = function(models) {
  
  };
  return Room;
};
