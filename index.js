
// This is a root index.js folder of the entire app, not index.js files of other apps
// This folder is to connecting to Heroku server.
const express = require("express");
const app = express();
const path = require('path')
const publicDir = path.join(__dirname, 'public');

app.use(express.static(publicDir))
app.get("/ping", (req, res) => {
    res.send("pong")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
