// assistance from module resources

const express = require('express');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

//Middleware parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// Homepage : GET Route
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// An example of route to 404 page
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);