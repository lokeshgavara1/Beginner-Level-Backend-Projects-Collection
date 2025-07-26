# Bookshelf API

A REST API to manage books, authors, and categories.

## Features
- CRUD for books, authors, and categories
- MongoDB for data storage

## Tech Stack
- Node.js
- Express
- MongoDB

## Installation

```bash
npm install
```

1. Create `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/bookshelfDB
```

2. Run:
```bash
npm run dev
```

## Endpoints Overview

### Books
- `GET /books`
- `POST /books`
- `GET /books/:id`
- `PUT /books/:id`
- `DELETE /books/:id`

### Authors
- `GET /authors`
- `POST /authors`

### Categories
- `GET /categories`
- `POST /categories`
