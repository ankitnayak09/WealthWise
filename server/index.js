import express from "express";

// To Work with Env Variables
import * as dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", function (req, res) {
	console.log("Server is Listening on 8080");
	res.send("Hello");
});

app.listen(process.env.PORT, () => console.log("Server is Listening on 8080"));
