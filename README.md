# 🚀 Beginner-Level Backend Projects Collection

Welcome to this repository containing a set of beginner-friendly backend projects built using **Node.js**, **Express.js**, and **MongoDB/SQLite**. Each project is designed to help you understand core backend concepts, API development, CRUD operations, authentication, and working with third-party services.

---

## 📁 Projects Overview

### 1. 📋 To-Do List API
- **Description**: A RESTful API for managing to-do tasks.
- **Tech Stack**: Node.js, Express.js, MongoDB or SQLite.
- **Features**:
  - Create, Read, Update, Delete (CRUD) tasks
  - Basic route structure
- **Location**: `/To-Do-List-API`

---

### 2. 🗒️ Notes API
- **Description**: API to manage user-authenticated private notes.
- **Tech Stack**: Node.js, Express.js, MongoDB.
- **Features**:
  - User registration and login
  - JWT-based authentication
  - CRUD operations on notes per user
- **Location**: `/Notes-API`

---

### 3. 📚 Bookshelf API
- **Description**: A backend service to manage books, authors, and categories.
- **Tech Stack**: Node.js, Express.js, MongoDB.
- **Features**:
  - Manage books (title, author, category)
  - Separate routes for authors and categories
  - MongoDB relationships
- **Location**: `/Bookshelf-API`

---

### 4. 🔗 URL Shortener
- **Description**: Convert long URLs into short codes like Bitly.
- **Tech Stack**: Node.js, Express.js, MongoDB.
- **Features**:
  - Generate and store short URLs
  - Redirect from short URL to original
- **Location**: `/URL-Shortener`

---

### 5. 🌦️ Weather Proxy API
- **Description**: Proxy API that fetches weather data from OpenWeatherMap and returns simplified JSON.
- **Tech Stack**: Node.js, Express.js, External API
- **Features**:
  - Connects to OpenWeatherMap API
  - Returns weather info for given coordinates
  - MongoDB used to store request history
- **Location**: `/Weather-Proxy-API`

---

## 📦 Installation & Running Projects

Each project is placed in its own directory. To run any project:

```bash
cd <project-folder>
npm install
npm run dev
```

> ℹ️ Make sure MongoDB is running locally (if required), and `.env` files are set properly for each project.

---

## 🧰 Tools & Libraries Used

- Node.js
- Express.js
- MongoDB / Mongoose
- SQLite (optional)
- JWT for authentication
- Axios
- dotenv
- nodemon
- shortid / UUID
- OpenWeatherMap API

---

## 🙌 Author
### Gavara Lokesh
📧 lokeshgavara1@gmail.com
🔗 LinkedIn Profile

---

## 📜 License

This project is licensed under the **MIT License**. You are free to use, share, and modify this code.

