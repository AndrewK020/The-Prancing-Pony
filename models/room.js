module.exports = function(sequelize, DataTypes) {
  
  var Room = sequelize.define("Room", {
    type: DataTypes.STRING,
    roomNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  });
  
  return Room;
};
