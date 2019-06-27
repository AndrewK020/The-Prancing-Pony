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
      
      Reservation.hasMany(models.Guest, {
       // as: "Guest",
        foreignKey: {
          allowNull: true
        },
       // as: 'guest',
        targetKey: "id",
        onDelete: 'cascade'
      });
    
      Reservation.hasMany(models.Room, {
        as: "Room",
        foreignKey: {
          allowNull: true
        },
        as: 'reserved_room',
        targetKey: "id",
        onDelete: 'cascade'
      });
    };
  return Reservation;
};
  