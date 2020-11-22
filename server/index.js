const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//hide your key
const dotenv = require("dotenv")
dotenv.config()

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};


//mongoose connection
mongoose.connect(process.env.CONNECTDB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("MongoDB Connected…")
  })
  .catch(err => console.log(err.message))



app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
