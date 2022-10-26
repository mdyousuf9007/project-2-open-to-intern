const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes/route");

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://mdyousuf9007:yousuf9007@cluster0.0ldwd.mongodb.net/project-2-intern",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/", route);

app.listen(3001, () => {
  console.log("Express app running on server:" + 3001);
});
