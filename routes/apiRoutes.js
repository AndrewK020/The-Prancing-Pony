var db = require("../models");

module.exports = function(app) {
  
// app.get("/api/dashboard", function(req, res) {
//   db.Room
//     .findAll({
//       where: {
//         available: "yes"
//       }
//     })
//     .then(function(data) {
//       res.render("rooms", { available: data });
//     });
// }),

app.get("/api/rooms", function(req, res){
  db.Room.findAll({
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
      { model: db.Room },
      { model: db.Guest }
    ]
  }).then(function(data) {
    res.json(data);
  });
});

app.get("/api/guests", function(req, res){
  db.Guest.findAll({
  }).then(function(data) {
    res.json(data);
  });
});

};