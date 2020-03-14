const express = require("express");

const app = express();

app.listen(5050);

app.get("/", (req, res) => {
	res.send("This is the homepage");
});

app.get("/contact", (req, res) => {
	res.send("This is the contact page");
});
