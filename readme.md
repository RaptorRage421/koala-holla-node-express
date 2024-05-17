# Koala Holla

## Description

_Duration:_ 2 Day Group Project

This is a practice in building a database via PostgreSQL and utilizing it to:
- Render to the DOM via GET requests
- Allow user input to be added to the database and re-rendered
- Allow user input to modify data in the database via PUT or DELETE requests

We have also added some extra features:
- Can edit any information for koalas in the database by filling out the corresponding input form and clicking the edit button within the table
- Koalas can be be toggled "ready for transfer" and "not ready for transfer" via the same button, indicated by both text and styling on the button
- Interactive styling via CSS

## Screen Shot

![screenshot](./Screenshot%202024-05-17%20at%2010.42.52 AM.png)

### Prerequisites
- [PostgreSQL](https://www.postgresql.org/download/)
- [Postico](https://eggerapps.at/postico/v1.php) (_or another way to interact with database for setup_)
- [Node.js](https://nodejs.org/en/download/package-manager/current)
- [Express](https://www.npmjs.com/package/express) (install via npm i)
- [node-postgres](https://www.npmjs.com/package/pg) (install via npm i)

## Installation

1. Create a database named `koala_holla`
2. The queries within `database.sql` will be all that is needed to create the necessary tables and populate the needed data to render the koalas to the DOM. This was built using PostgreSQL and Postico to run the queries.
3. Open this repo up in an IDE and run `npm install` in the terminal
4. Run `npm run server` 
    - **Note** this project used [nodemon](https://www.npmjs.com/package/nodemon) for server management, but it is not a dependancy in the `package.json`. If not using nodemon you will need to change the `server` script to say `node server/server.js`
5. Visit `localhost:5001` in your browser to interact with the app

## Usage

1. Vist `localhost:5001`
2. All current koalas within the database will be rendered into the table below
3. To add a koala to the database, input values into the forms above and hit the `add koala` button
    - This will not send data unless all forms are filled
4. If you would like to edit any current koala, input the new information into the corresponding form above and when ready hit the `edit` button where you would like the update to occur.
5. If you would like to remove a koala from the database, hit the `delete` button
6. If you would like to toggle that a koala is ready for transfer, click the button in the `Mark Ready` colum and you will see this change illustrated on screen