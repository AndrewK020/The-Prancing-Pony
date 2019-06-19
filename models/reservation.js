module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
      // Giving the Author model a name of type STRING
      checkInDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      checkOutDate: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: true,
      }
    });
  
    // Author.associate = function(models) {
    //   // Associating Author with Posts
    //   // When an Author is deleted, also delete any associated Posts
    //   Author.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return Reservation;
  };
  