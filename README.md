# Business Contact Manager

## Project Overview

This project is a full-stack Business Contact Manager web application developed for IFN636 A1.2. It enables authenticated users to manage business contacts through a secure and user-friendly interface. The system supports core CRUD operations and integrates frontend and backend components with a MongoDB database.

---

## Features

* User registration and login with secure authentication
* JWT-based authentication and protected routes
* Create, view, update, and delete business contacts
* Persistent data storage using MongoDB
* Frontend and backend integration via RESTful APIs

---

## Technologies Used

### Frontend

* React (functional components and hooks)
* Axios for API communication
* CSS / Bootstrap for UI styling

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose (schema modelling)
* JSON Web Token (JWT) for authentication
* bcryptjs for password hashing

---

## Project Structure

```
IFN636-A1.2-BusinessContactManager/
│
├── backend/        # Express server, routes, controllers, models
├── frontend/       # React application (UI components and pages)
└── README.md
```

---

## Installation and Setup

### 1. Clone the repository

```
git clone https://github.com/Tiller97/IFN636-A1.2-BusinessContactManager.git
cd IFN636-A1.2-BusinessContactManager
```

### 2. Install dependencies

Backend:

```
cd backend
npm install
```

Frontend:

```
cd ../frontend
npm install
```

---

### 3. Configure environment variables

Create a `.env` file inside the `backend` folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

### 4. Run the application

Start backend:

```
cd backend
npm start
```

Start frontend:

```
cd frontend
npm start
```

Open in browser:

```
http://localhost:3000
```

---

## CI/CD

GitHub Actions is used to implement a basic Continuous Integration (CI) pipeline.

* Automatically triggered on push and pull requests
* Installs backend and frontend dependencies
* Builds the React frontend to verify successful compilation

This pipeline helps ensure code reliability and early detection of integration issues.

---

## Screenshots

### Login Page
![Login](./screenshots/login.png)

### Contact Management (Create & View)
![Contacts](./screenshots/contact-list.png)

### Edit Contact
![Edit Contact](./screenshots/edit-contact.png)

---

## Author

TengYi Huang
N11881348
Master of Information Technology (Artificial Intelligence)
Queensland University of Technology
