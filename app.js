const express = require("express");

const app = express();

app.listen(5050);

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.get("/contact", (req, res) => {
	console.log(req.query);
	res.render(`contact`, { qs: req.query });
});

app.get("/profile/:id", (req, res) => {
	let data = {
		age: 29,
		job: "ninja",
		hobbies: ["eating", "fighting", "sleeping"]
	};
	res.render("profile", { person: req.params.id, data: data });
});
