const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", function(request, response) {
  response.send("<h1>Hello, World!</h1>");
});

app.get("/users/:name", function(req, res) {
  res.send(`<h1>Hello, ${req.params["name"]}</h1>`);
});

app.listen(PORT, function(error) {
  if (error) {
    console.log("An error occurred: " + error);
  } else {
    console.log("express started");
  }
});