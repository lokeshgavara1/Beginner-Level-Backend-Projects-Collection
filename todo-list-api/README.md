# To-Do List API

A simple RESTful API for managing tasks using Node.js, Express, and MongoDB.

## Features
- Full CRUD operations (Create, Read, Update, Delete)
- Task completion status
- MongoDB for storage

## Technologies
- Node.js
- Express.js
- MongoDB (Mongoose)

## Installation

```bash
git clone https://github.com/your-username/your-repo-name
cd to-do-list-api
npm install
```

## Usage

1. Create a `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/todoDB
```

2. Start the server:
```bash
npm run dev
```

## API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| GET    | /tasks           | Get all tasks        |
| POST   | /tasks           | Create a new task    |
| PUT    | /tasks/:id       | Update a task        |
| DELETE | /tasks/:id       | Delete a task        |
