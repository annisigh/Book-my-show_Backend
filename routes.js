const express = require("express");
const router = express.Router();
const Schema = require("./schema");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

//This middleware function parses incoming request bodies in URL-encoded format. To parse the URL-encoded data, set the extended option to false, which uses the basic and quick string library.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Creating new booking and adding it to database.
router.post("/booking", async (req, res) => {
  const { movie, slot, seats } = req.body;
  
  const myData = new Schema({ movie, slot, seats });
  const saved = await myData.save();

  if (saved) {
    //on successful
    res.status(200).json({ data: myData, message: "Booking successful!" });
  } else {
    //on error
    res
      .status(500)
      .json({
        data: null,
        message: "Something went wrong!. Please try again.",
      });
  }
});


//This route handler function for the /booking route supports GET queries. It is an asynchronous function that does not require any data in the request body or query parameters.
router.get("/booking", async (req, res) => {
    // This line retrieves all documents from the Schema collection, organizes them in descending order by the _id field, and limits the output to one document.
  const myData = await Schema.find().sort({ _id: -1 }).limit(1);

  if (myData.length === 0) {
    //Sending "No previous Booking found" message if no last booking found
    res.status(200).json({ data: null, message: "No previous Booking found!" });
  } else {
    //Sending data if last booking found.
    res.status(200).json({ data: myData[0] });
  }
});

module.exports = router;
