# Express HTTP Methods

This project demonstrates the use of HTTP methods (GET, POST) and routing with the Express.js framework. It includes examples of handling URL parameters, query parameters, middleware, and basic JSON responses. The application serves as a beginner-friendly introduction to building RESTful APIs with Express.

---

## Features

- **Basic Routing**:  
  - Handle GET requests to serve static text and JSON responses.  
  - Handle POST requests to process and respond to JSON data.  

- **Middleware**:  
  - Parse incoming JSON requests using `express.json()` middleware.

- **Dynamic Routes**:  
  - Use URL parameters to dynamically handle requests.  
  - Parse query parameters from incoming requests.  

---

## Routes Overview

### **GET Requests**
- `/`  
  Responds with a welcome message.  

- `/about`  
  Responds with a JSON message describing the page.

- `/user/:id`  
  Responds with the `id` parameter from the URL.

- `/search`  
  Parses query parameters `term` and `sort` and returns them as a JSON response.

### **POST Requests**
- `/contact`  
  Accepts JSON data (e.g., `name` and `email`) in the request body and responds with the submitted information.

---

## Prerequisites

Before running this application, ensure that you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

---

## Installation and Setup

Follow these steps to set up and run the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Theonly1adia/express-http-methods.git

    Navigate into the project directory
    ```bash 
    cd express-http-methods
    

2. **Install Dependencies:** Ensure you have Node.js installed. Then, run:
    ```bash

    npm install

3.  **Run the Server:**  Use the development script to start the server with Nodemon:
    ```bash
    npm run dev


    ```bash

    npm start

4.  **Access the Server:** The server runs on http://localhost:3000.

## Routes and Testing

You can test the routes using tools like Thunder Client, Postman, or a web browser:

GET /
URL: http://localhost:3000/
Response: "Welcome to the Express server!"

GET /about
URL: http://localhost:3000/about
Response: "This is the about page."

POST /contact
URL: http://localhost:3000/contact
Request Body (example):
{
  "name": "Adia",
  "email": "adia@example.com"
}

Response:
{
  "message": "Contact information received!",
  "name": "Adia",
  "email": "adia@example.com"
}

GET/user/:id
URL:http://localhost:3001/user/123
Response:
{ "message": "User ID: 123" }

GET/search
URL:http://localhost:3001/search?term=express&sort=asc
Response:
{ "term": "express", "sort": "asc" }
