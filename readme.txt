==========================================
Project Structure
==========================================

Course-App-Backend/
│
├── db/
│   └── index.js              # Database connection and models
│
├── middleware/
│   ├── admin.js              # Admin authentication middleware
│   └── user.js               # User authentication middleware
│
├── routes/
│   ├── admin.js              # Admin routes (signup, courses)
│   └── user.js               # User routes (signup, courses, purchases)
│
├── index.js                  # Main server file
├── package.json              # Dependencies
├── package-lock.json         # Dependency lock file
├── readme.txt                # This file
└── .gitignore                # Git ignore file

==========================================
Database Models
==========================================

1. Admin Schema:
   - username: String
   - password: String

2. User Schema:
   - username: String
   - password: String
   - purchaseCourse: Array of Course ObjectIds

3. Course Schema:
   - title: String
   - description: String
   - imageLink: String
   - price: Number

==========================================
Dependencies
==========================================

- express: Web framework
- body-parser: Parse incoming request bodies
- mongoose: MongoDB object modeling

==========================================
Notes
==========================================

- All passwords should be hashed in production (currently stored as plain text)
- Add JWT tokens for better authentication in production
- Add input validation for all endpoints
- Add error handling middleware
- Add CORS configuration for frontend integration
