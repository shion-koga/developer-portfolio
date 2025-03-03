# Developer Portfolio

A modern portfolio system designed for developers to showcase their skills and projects.

## Project Structure

This project is organized into two main parts:

- `web/`: Frontend application built with React, TypeScript, and Tailwind CSS
- `server/`: Backend API built with Express, TypeScript, and PostgreSQL

## Features

- User authentication (register, login)
- Portfolio management (create, read, update, delete projects)
- Contact form for visitors to reach out to the developer
- Responsive design for all devices

## Prerequisites

- Node.js (v16+)
- PostgreSQL
- npm or yarn

## Getting Started

### Setting up the Database

1. Install PostgreSQL if you haven't already
2. Create a new database:
   ```
   createdb developer_portfolio
   ```

### Backend Setup

1. Navigate to the server directory:
   ```
   cd server
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   ```
   cp .env.example .env
   ```
   Then edit `.env` to match your PostgreSQL configuration.

4. Run database migrations:
   ```
   npm run migrate
   ```

5. Seed the database with sample data:
   ```
   npm run seed
   ```

6. Start the development server:
   ```
   npm run dev
   ```
   The server will be running on http://localhost:5000.

### Frontend Setup

1. Navigate to the web directory:
   ```
   cd web
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```
   The application will be running on http://localhost:3000.

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login a user

### User
- `GET /api/users/me` - Get current user profile
- `PUT /api/users/me` - Update user profile

### Portfolio
- `GET /api/portfolio` - Get all portfolio items for the authenticated user
- `GET /api/portfolio/user/:userId` - Get all portfolio items for a specific user
- `GET /api/portfolio/:id` - Get a specific portfolio item
- `POST /api/portfolio` - Create a new portfolio item
- `PUT /api/portfolio/:id` - Update a portfolio item
- `DELETE /api/portfolio/:id` - Delete a portfolio item

### Contact
- `POST /api/contacts/user/:userId` - Send a contact message to a user
- `GET /api/contacts` - Get all contact messages for the authenticated user
- `GET /api/contacts/:id` - Get a specific contact message
- `DELETE /api/contacts/:id` - Delete a contact message

## License

This project is licensed under the MIT License - see the LICENSE file for details.
