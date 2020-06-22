const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const dataApi = require("./data");

app.use(bodyParser.json());
app.use("/data", dataApi);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));