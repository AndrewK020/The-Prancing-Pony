module.exports = function(sequelize, DataTypes) {
  var Room = sequelize.define("Room", {
    type: DataTypes.STRING
  });
  return Room;
};
