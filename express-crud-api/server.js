const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {
        id: 1,
        name: "Jade",
        email: "jade@example.com"
    },
    {
        id: 2,
        name: "Jaylan",
        email: "jaylan@example.com"
    }
];

  // Get all users (READ)
app.get('/users', (req, res) => {
    res.json(users);
});



app.listen(3000, () => {
  console.log("Server running on port 3000");
});