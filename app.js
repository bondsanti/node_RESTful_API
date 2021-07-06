const express = require("express");
const app = express();

app.use(express.json())
app.use(require('./src/routes/routes'))

const port = 3333;

app.listen(port, () => {
  console.log(`Start port : ${port}`);
  console.log("Press Ctrl + C to quit.");
});
