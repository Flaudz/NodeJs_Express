const express = require("express");

const app = express();

app.listen(5050);

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
	res.sendFile(`${__dirname}/contact.html`);
});

app.get("/profile/:id", (req, res) => {
	res.send(`You requested to see a profile with the if of ${req.params.id}`);
});
