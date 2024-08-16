# Browsi - Assignment

## Project Overview

This project is an assignment for Browsi, featuring a Node.js backend with MongoDB and an Angular frontend. The application allows for the management of publishers and domains through a web interface.

## Prerequisites

- Node.js (v14 or later)
- MongoDB (v4.4 or later)
- Angular CLI (v17 or later)

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/Shaul1Kr/Browsi---assignment.git
cd Browsi---assignment
```

### Setting Up the Server (Node.js)

1. Navigate to the server directory:

   ```bash
   cd server
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the server:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

### Setting Up the Client (Angular)

1. Navigate to the client directory:

   ```bash
   cd client
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the client:

   ```bash
   npm start
   ```

   The Angular application will start on `http://localhost:4200`.

## MongoDB Setup

Ensure MongoDB is running on your machine. If you are using a local MongoDB instance, the server is configured to connect to `mongodb://localhost:27017`. You can change the MongoDB URI in the server configuration file if needed.

## API Endpoints

The backend provides a set of RESTful API endpoints for managing publishers and domains. These endpoints are accessible at `http://localhost:3000/api`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or issues, please contact [Your Name] at [shaulikr07@gmail.com].
