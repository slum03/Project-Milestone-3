const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Store movie collection in memory
let movieCollection = [];

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serves static files in the 'public' folder

// Route to serve the index.html (or home page) at the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Route to get the movie collection
app.get('/movies', (req, res) => {
    res.json(movieCollection);
});

// Route to handle movie form submission
app.post('/submit-movie', (req, res) => {
    const { title, genre } = req.body;

    // Add the new movie to the in-memory collection
    movieCollection.push({ title, genre });

    res.json({ message: 'Movie added successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
