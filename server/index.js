const express = require("express");
const fs = require("fs");
const { parse } = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const DATA = {
    words: JSON.parse(fs.readFileSync(__dirname + "/data/words.json")),
};

app.get("/api", (request, response) => response.json(DATA));
app.get("/api/words", (request, response) => response.json(DATA.words));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT} (http://localhost:${PORT})`);
});
