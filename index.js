const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to db
connectDB();

app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "michalkulesza.me/urlShort");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(process.env.PORT, () => console.log(`Server is running on port ${PORT}`));
