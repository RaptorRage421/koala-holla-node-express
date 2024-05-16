CREATE TABLE "koala" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250) NOT NULL,
	"age" INTEGER,
	"favorite color" VARCHAR (100) NOT NULL,
	"ready_for_transfer" BOOLEAN DEFAULT FALSE,
	"notes" VARCHAR (100) NOT NULL
);

INSERT INTO "koala"
	("name", "age", "favorite color", "notes")
VALUES 
	('Scotty','4', 'Red', 'Born in Guatemala'),
	('Jean',	 '5', 'Green', 'Allergic to lots of lava'),
	('Ororo', '7', 'Yellow', 'Loves listening to Paula Abdul'),
	('KLeaf',	'15', 'Purple', 'Never refuses a treat'),
	('Charlie', '9', 'Orange',	'Favorite band is Nirvana'),
	('Betsy', '4', 'Blue',	'Has a pet iguana')