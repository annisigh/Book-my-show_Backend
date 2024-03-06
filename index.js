const express = require("express");
const app = express();
const { connection } = require("./connection");
const cors = require("cors");
const bodyParser = require("body-parser");

//specifies the port on which the server will listen for incoming requests.
const port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to database
connection();

//This line employs the Routes middleware. It instructs the server to use the routes specified in the "./routes" file for all incoming requests to the "/api" endpoint.
app.use("/api", require("./routes"));

// For testing purposes
app.get("/", (req, res) => {
  return res.json({message:"Welcome Home Buddy!"});
});

// listening on a port.
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
