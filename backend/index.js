const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const ErrorHandler = require("./middleware/Error");
const user = require("./controller/userController");

//configuration
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

//Routes
app.use("/api/v2/user", user);

//mongoose setup
const PORT = process.env.PORT;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })

  .catch((error) => console.log(`${error} did not connected`));

app.use(ErrorHandler);
app.get("/", (req, res) => {
  res.send("yaa server is running");
});
