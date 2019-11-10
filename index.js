const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Connect to db
connectDB();

app.use(express.json());

//Define routes
app.use("/", require("./routes/index"));
app.use("/api/url", require("./routes/url"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
