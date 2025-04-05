# User Registration System with Server-Side Rendering

A full-featured user management system built with Express.js and EJS templates, featuring server-side rendering for optimal performance and SEO benefits.

## Features

- **Create Users**: Add new users with name, email, and profile image
- **View Users**: Display all users in a responsive grid layout
- **Edit Users**: Update existing user information
- **Delete Users**: Remove users from the database
- **Responsive Design**: Beautiful UI that works on all devices
- **Animated Interfaces**: Smooth transitions and animations for better UX

## Technologies Used

- **Express.js**: Fast, unopinionated web framework for Node.js
- **MongoDB**: NoSQL database for storing user data
- **Mongoose**: Elegant MongoDB object modeling for Node.js
- **EJS**: Embedded JavaScript templates for server-side rendering
- **TailwindCSS**: Utility-first CSS framework for rapid UI development
- **Font Awesome**: Icon library for enhanced visual elements

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (optional - the app includes a mock data solution for development)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd register-form_Server-Side Rendering
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. The application includes a mock data solution for development without MongoDB. If you want to use MongoDB:
   ```
   # Start MongoDB if installed
   mongod

   # Then modify moduls/user.js to use the MongoDB connection instead of mock data
   ```

5. Start the application:
   ```
   node app.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
register-form_Server-Side Rendering/
├── moduls/
│   └── user.js         # User model (includes mock data solution)
├── public/             # Static assets
├── views/
│   ├── index.ejs       # User registration form
│   ├── read.ejs        # Display all users
│   ├── edit.ejs        # Edit user form
│   ├── 404.ejs         # Not found page
│   └── error.ejs       # Error page
├── app.js              # Main application file
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## Mock Data Solution

This project includes a mock data solution that allows you to run the application without MongoDB. The mock solution:

- Provides in-memory storage for user data
- Implements all CRUD operations
- Includes sample users for testing
- Simulates MongoDB's API for seamless integration

To switch to a real MongoDB database, modify the `moduls/user.js` file to use a real MongoDB connection.

## API Routes

- `GET /`: Home page with registration form
- `POST /create`: Create a new user
- `GET /read`: View all users
- `GET /delete/:id`: Delete a user
- `GET /edit/:id`: Edit user form
- `POST /update/:id`: Update user information

## Future Improvements

- User authentication and authorization
- Image upload functionality
- Pagination for user listing
- Search and filter capabilities
- Form validation on the client side

## License

This project is licensed under the MIT License - see the LICENSE file for details.
