const express = require("express");
const app = express();

// Sending http response.........
// getting response Object in the Console....
app.get("/", (request, response) => {
  response.send("Hello World.");
  console.log(response);
});

// Getting date Object has a response.........
app.get("/date", (request, response) => {
  let date = new Date();
  response.send(`Today's Date is ${date}...`);
});

// Getting HTML Content as http response.........
app.get("/page", (request, response) => {
  response.sendFile("./page.html", { root: __dirname });
});

app.listen(3000);
