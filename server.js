// assistance from module resources

// dependency added
const express = require('express');
const fs = require('fs');
const path = require('path');

//env variable port created
const PORT = process.env.PORT || 3001;

//use of express
const app = express();

//Middleware parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// Homepage : GET Route
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// An example of route to 404 page
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);