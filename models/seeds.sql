INSERT INTO Guests (firstName, lastTime, email, phone, createdAt, updatedAt)
VALUES ('John','Doe','john.doe@me.com','214-300-5000', NOW(), NOW()),
       (' Murray','Ronda ','Murray.Ronda@me.com','215-650-5450', NOW(), NOW()),
       ('Wardell','Lotus','Wardell.Lotus@me.com','234-320-5010', NOW(), NOW()),
       ('Terrie','Lilian','Terrie.Lilian@me.com','543-100-6050', NOW(), NOW()),
       ('Kaden',' Luanne','Kaden.Luanne@me.com','542-123-4320', NOW(), NOW()),
       ('Josephine','Cailin','Josephine.Cailin@me.com','963-330-0320', NOW(), NOW()),
       ('Winston','Arden','Winston.Arden@me.com','146-344-1040', NOW(), NOW());

INSERT INTO Rooms (type, roomNumber, price, createdAt, updatedAt)
VALUES   ('double',451,34.99, NOW(), NOW()),
         ('single',451,24.99, NOW(), NOW()),
         ('double',134,34.99, NOW(), NOW()),
         ('double',118,34.99, NOW(), NOW()),
         ('single',120,24.99, NOW(), NOW()),
         ('single',341,24.99, NOW(), NOW()),
         ('double',402,34.99, NOW(), NOW()),
         ('double',311,34.99, NOW(), NOW()),
         ('single',320,24.99, NOW(), NOW()),
         ('double',310,34.99, NOW(), NOW()),
         ('single',111,24.99, NOW(), NOW());

INSERT INTO Reservations (checkInDate, checkOutDate, createdAt, updatedAt) VALUES (NOW(), NOW(),NOW(), NOW());

UPDATE Guests AS g, Rooms as r SET  g.ReservationId = 1, r.ReservationId = 1
where r.id = 1 and g.id = 1;