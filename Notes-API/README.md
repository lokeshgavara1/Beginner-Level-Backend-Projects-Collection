# Notes API

An authenticated API to manage user-specific notes.

## Features
- Register/Login system
- JWT-based authentication
- Private notes for each user

## Technologies
- Node.js
- Express
- MongoDB
- JWT

## Setup

1. `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/notesDB
JWT_SECRET=your_jwt_secret
```

2. Start server:
```bash
npm run dev
```

## API Endpoints

| Method | Route          | Description         |
|--------|----------------|---------------------|
| POST   | /auth/register | Register a user     |
| POST   | /auth/login    | Login and get token |
| GET    | /notes         | Get user notes      |
| POST   | /notes         | Add a new note      |
| PUT    | /notes/:id     | Update a note       |
| DELETE | /notes/:id     | Delete a note       |
