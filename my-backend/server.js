const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send([{name:'jade', age:3, location: 'USA'}, {name:'Rinah', age: 20, location: 'Canada'}])
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
});