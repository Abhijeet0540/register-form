const express = require('express');
const app = express();
const path = require('path');
const userModel = require('./moduls/user');

// Configure Express app
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Home route - Registration form
app.get('/', (req, res) => {
    res.render("index");
});

// Create a new user
app.post('/create', async (req, res) => {
    try {
        let { name, email, imageurl } = req.body;

        // Validate required fields
        if (!name || !email || !imageurl) {
            return res.status(400).render('error', { error: 'All fields are required' });
        }

        let createUser = await userModel.create({ name, email, imageurl });
        res.redirect('/read');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).render('error', { error: 'Failed to create user: ' + error.message });
    }
});

// Read all users
app.get('/read', async (req, res) => {
    try {
        let users = await userModel.find();
        res.render("read", { users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.render("read", { users: [], error: 'Error fetching users: ' + error.message });
    }
});

// Delete a user
app.get("/delete/:id", async (req, res) => {
    try {
        await userModel.findOneAndDelete({ _id: req.params.id });
        res.redirect('/read');
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).render('error', { error: 'Failed to delete user' });
    }
});

// Edit user form
app.get("/edit/:id", async (req, res) => {
    try {
        let user = await userModel.findOne({ _id: req.params.id });
        if (!user) {
            return res.status(404).render('404');
        }
        res.render("edit", { user });
    } catch (error) {
        console.error('Error fetching user for edit:', error);
        res.status(500).render('error', { error: 'Failed to fetch user' });
    }
});

// Update a user
app.post("/update/:id", async (req, res) => {
    try {
        let { name, email, imageurl } = req.body;
        let user = await userModel.findOneAndUpdate(
            { _id: req.params.id },
            { name, email, imageurl },
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).render('404');
        }
        res.redirect("/read");
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).render('error', { error: 'Failed to update user' });
    }
});

// 404 route - handle not found
app.use((req, res) => {
    res.status(404).render('404');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to access the application`);
});