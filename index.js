import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({ extended: true }));

// app.set("view engine", "ejs");
// app.set("views", __dirname + "/views");

app.get('/', function (req, res) {
  res.send('Home page');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
