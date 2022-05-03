const express = require("express");
const app = express();
const authRoute = require("./routes/user");
const petsRoute = require("./routes/pets");

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/pets", petsRoute);

app.listen(3001, () => {
  console.log("port 3001");
});
