var db = require("../models");

module.exports = function(app) {
  
//Get routes

// get rooms
  app.get("/api/rooms", function(req, res){
    db.Room.findAll({
      }).then(function(data){
      res.json(data);
    });
  });
// get room by id
app.get("/api/rooms/:id", function(req, res){
  db.Room.findOne({
    where: {
      id: req.params.id
    }
    }).then(function(data){
    res.json(data);
  });
});

//get reservations
  app.get("/api/reservations", function(req, res){
    db.Reservation.findAll({
    }).then(function(data) {
      res.json(data);
    });
  });
// get reservations by id with the guest and room
app.get("/api/reservations/:id", function(req, res){
  db.Reservation.findOne({
    where: {
      id: req.params.id
    },
    include: [
      { model: db.Room, as: 'reserved_room' },
      { model: db.Guest, as: 'guest'}
    ]
  }).then(function(data) {
    res.json(data);
  });
});
// get guests
  app.get("/api/guests", function(req, res){
    db.Guest.findAll({
    }).then(function(data) {
      res.json(data);
    });
  });
// get guests by id
  app.get("/api/guests/:id", function(req, res){
    db.Guest.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(data) {
      res.json(data);
    });
  });

// **********************************************************************************************************

  // Post routes

  //create a room
  app.post("/api/rooms", function(req, res) {
    db.Room.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  //create a guest
  app.post("/api/guest", function(req, res) {
    db.Guest.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  //create a reservation
  //must have guest id and room id
  app.post("/api/reservation", function(req, res) {
    db.Guest.create(req.body).then(function(data) {
      res.json(data);
    });
  });

};