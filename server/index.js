const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// Node serve the files for our react app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
    res.json({ message: "Connected to server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
}); 

// app.listen should be the bottom function
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});