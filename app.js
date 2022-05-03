const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs/promises");
const app = express();
const authRoute = require("./routes/user");
const petsRoute = require("./routes/pets");

const port = process.env.PORT || 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/auth", authRoute);
app.use("/pets", petsRoute);
app.use("/", async (req, res, next) => {
    const file = await fs.readFile('./view/main.html')
    res.setHeader('Content-Type', 'text/html')
    res.send(file)
    next()
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
