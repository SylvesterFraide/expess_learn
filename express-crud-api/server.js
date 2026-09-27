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

    // Validate user input
    if (!name) {
        return res.status(400).json({
            error: "Name is required"
        });
    }

    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Invalid email format"
        });
    }

    const user = {
        id: users.length + 1,
        name,
        email
    };
    users.push(user);
    res.status(201).json(user);
});


//UPDATE (PUT/EDIT)

app.put("/users/:id", (req, res) => {
    const user = users.find((u) => u.id === parseInt(req.params.id));

    if(!user) {
        return res.status(404).json({
            error: "user not found"
        })
    }

    const {name, email} = req.body;

        if (!name) {
        return res.status(400).json({
            error: "Name is required"
        });
    }

    if (!email) {
        return res.status(400).json({
            error: "Email is required"
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: "Invalid email format"
        });
    }

    user.name = name;
    user.email = email;
    res.json(user);
})


app.listen(3000, () => {
  console.log("Server running on port 3000");
});