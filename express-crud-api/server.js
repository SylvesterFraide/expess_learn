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


  // Get user by ID (READ)
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');
    res.json(user);
});


  // add new user (CREATE)
app.post('/users', (req, res) => {

    const { name, email } = req.body;
    const user = {
        id: users.length + 1,
        name,
        email
    };
    users.push(user);
    res.status(201).json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});