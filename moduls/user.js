// Mock User Model for development without MongoDB

// In-memory storage for users
let users = [
    {
        _id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        imageurl: 'https://randomuser.me/api/portraits/men/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        _id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        imageurl: 'https://randomuser.me/api/portraits/women/1.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        _id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        imageurl: 'https://randomuser.me/api/portraits/men/2.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
    }
];

// Counter for generating unique IDs
let idCounter = 4;

// Mock User Model
const UserModel = {
    // Find all users
    find: async () => {
        return [...users];
    },

    // Find one user by ID
    findOne: async (query) => {
        const user = users.find(user => user._id === query._id);
        return user ? { ...user } : null;
    },

    // Create a new user
    create: async (userData) => {
        // Validate required fields
        if (!userData.name || !userData.email || !userData.imageurl) {
            throw new Error('All fields are required');
        }

        // Create new user object
        const newUser = {
            _id: String(idCounter++),
            name: userData.name,
            email: userData.email,
            imageurl: userData.imageurl,
            createdAt: new Date(),
            updatedAt: new Date()
        };

        // Add to users array
        users.push(newUser);
        return { ...newUser };
    },

    // Update a user
    findOneAndUpdate: async (query, update, options) => {
        const index = users.findIndex(user => user._id === query._id);
        if (index === -1) return null;

        // Update user data
        users[index] = {
            ...users[index],
            ...update,
            updatedAt: new Date()
        };

        return options?.new ? { ...users[index] } : null;
    },

    // Delete a user
    findOneAndDelete: async (query) => {
        const index = users.findIndex(user => user._id === query._id);
        if (index === -1) return null;

        // Remove user from array
        const deletedUser = users[index];
        users.splice(index, 1);
        return { ...deletedUser };
    }
};

console.log('Using mock User model (no MongoDB connection)');

module.exports = UserModel;
