const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3011, () => {
  console.log(`Server Book Running on 3011`);
});
