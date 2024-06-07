const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path")
const ejs = require("ejs");
const port = 3001;

app.use(bodyParser.json())
app.use(express.json());

app
  .use(express.static(`views`))
  .set(`views`, path.join(`views`))
  .set(`view engine`, `ejs`);

app.get(`/`, (req, res) => {
  var mascots = [
    { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
    { name: "Tux", organization: "Linux", birth_year: 1996 },
    { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
  ];
  var tagline =
    "No programming concept is complete without a cute animal mascot.";

  res.render("index", {
    mascots: mascots,
    tagline: tagline,
  });
  // res.render(`index`);
});
app.post(`/api`, (req, res) => {
  console.log(req.body);
});
app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
