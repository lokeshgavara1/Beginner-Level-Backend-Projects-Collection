# URL Shortener API

Simple API to convert long URLs into short links.

## Features
- Shortens URLs
- Redirects shortened links to original URLs
- MongoDB storage

## Tech
- Node.js
- Express
- MongoDB

## Usage

1. `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/urlShortenerDB
BASE_URL=http://localhost:5000
```

2. Start app:
```bash
npm run dev
```

## Endpoints

| Method | Route        | Description                |
|--------|--------------|----------------------------|
| POST   | /shorten     | Create short URL           |
| GET    | /:shortCode  | Redirect to original URL   |
