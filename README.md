# Express Auth API

A simple backend API for user registration and login built with Node.js, Express, MongoDB, JWT, and bcrypt.

## Features

- User registration
- User login
- Password hashing with `bcrypt`
- JWT token generation
- MongoDB database connection
- Basic error handling middleware

## Tech Stack

- Node.js
- Express
- MongoDB
- JSON Web Token (`jsonwebtoken`)
- bcrypt
- dotenv

## Project Structure

```text
Mini_Project/
├── app.js
├── controllers/
├── db/
├── middleware/
├── routes/
├── package.json
└── .env
```

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd Mini_Project
```

2. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the project root and add:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string
SECRET_KEY=your_secret_key
```

## Run the Project

Start the server with:

```bash
node app.js
```

The server will run on:

```text
http://localhost:3000
```

## API Endpoints

### Health Check

- `GET /`

Response:

```json
{
  "message": "Server is running"
}
```

### Register User

- `POST /auth/auth`

Request body:

```json
{
  "username": "testuser",
  "password": "123456"
}
```

Possible responses:

- `201 Created` - User registered successfully
- `400 Bad Request` - Username and password are required
- `409 Conflict` - User already exists

### Login User

- `POST /auth/login`

Request body:

```json
{
  "username": "testuser",
  "password": "123456"
}
```

Successful response:

```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

Possible responses:

- `400 Bad Request` - Username and password are required
- `401 Unauthorized` - Invalid username or password

## Notes

- The current registration route is `/auth/auth` because the auth router is mounted on `/auth` and the register endpoint inside the router is also `/auth`.
- MongoDB is used with the database name `mini_project_1`.
- The authentication middleware exists in the project, but it is not currently applied to protected routes.




