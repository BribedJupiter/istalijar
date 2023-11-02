const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

// For the api page
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

// For the landing page
app.get("", (req, res) => {
    res.json({ message: "Welcome weary traveler!" });
});

// app.listen should be the bottom function
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});