module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      checkInDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
      },
      checkOutDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: true,
      }
    });
  
    Reservation.associate = function(models) {
      
      Reservation.belongsTo(models.Guest, {
        as: "Guest",
        foreignKey: {
          allowNull: false
        },
        targetKey: "id",
        onDelete: 'cascade'
      });
    
      Reservation.belongsTo(models.Room, {
        as: "Room",
        foreignKey: {
          allowNull: false
        },
        targetKey: "id",
        onDelete: 'cascade'
      });
    };
  return Reservation;
};
  