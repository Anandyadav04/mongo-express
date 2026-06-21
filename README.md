# Mongo Express

A simple web application built using **Node.js**, **Express.js**, **MongoDB**, and **EJS** that demonstrates basic CRUD (Create, Read, Update, Delete) operations. This project allows users to manage data stored in MongoDB through an easy-to-use web interface.

## Features

* Create new records
* View all records
* Edit existing records
* Delete records
* Server-side rendering using EJS templates
* MongoDB integration using Mongoose
* Environment variable support using dotenv

## Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Templating Engine:** EJS
* **ODM:** Mongoose
* **Environment Management:** dotenv

## Project Structure

```
mongo-express/
├── models/          # Mongoose schemas and models
├── views/           # EJS templates
├── .env             # Environment variables
├── .gitignore
├── index.js         # Main application file
├── init.js          # Database initialization script
├── package.json
└── package-lock.json
```

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Anandyadav04/mongo-express.git
cd mongo-express
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

4. Start the application:

```bash
node index.js
```

For development with automatic server restart:

```bash
npm run dev
```

## Usage

1. Open your browser and navigate to:

```
http://localhost:3000
```

2. Use the application to:

* Add new records
* View existing records
* Update records
* Delete records

## Learning Objectives

This project was built to practice:

* Express.js routing
* MongoDB and Mongoose integration
* CRUD operations
* Server-side rendering with EJS
* MVC project structure
* Environment variable management

## Future Improvements

* User authentication and authorization
* Form validation
* Search and filtering
* Pagination
* REST API support
* Docker containerization

## Author

**Anand Yadav**

GitHub: https://github.com/Anandyadav04
