CREATE TABLE "koala" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (250) NOT NULL,
    "age" INTEGER,
    "favorite_color" VARCHAR (100) NOT NULL,
    "ready_for_transfer" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (100) NOT NULL
);


INSERT INTO "koala"
    ("name", "age", "favorite_color", "ready_for_transfer", "notes")
VALUES
    ('Scotty','4', 'Red', 'Y', 'Born in Guatemala'),
    ('Jean',     '5', 'Green', 'Y', 'Allergic to lots of lava'),
    ('Ororo', '7', 'Yellow', 'N', 'Loves listening to Paula Abdul'),
    ('KLeaf',   '15', 'Purple', 'N', 'Never refuses a treat'),
    ('Charlie', '9', 'Orange',  'Y', 'Favorite band is Nirvana'),
    ('Betsy', '4', 'Blue',  'Y', 'Has a pet iguana');