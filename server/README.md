# Developer Portfolio Backend API Documentation

This document provides detailed information about the API endpoints available in the Developer Portfolio backend.

## Base URL

```
http://localhost:5000
```

## Authentication

The API uses JWT (JSON Web Token) for authentication. For protected routes, include the JWT token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Response Format

All responses follow this standard format:

### Success Response

```json
{
  "message": "Optional success message",
  "data": {
    // Response data here
  }
}
```

### Error Response

```json
{
  "error": {
    "message": "Error message",
    "details": "Optional error details or validation errors"
  }
}
```

## API Endpoints

### Health Check

#### GET /health

Check if the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

### User Management

#### POST /api/users/register

Register a new user.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "profile": "Full-stack developer",
  "skills": ["React", "Node.js", "TypeScript"]
}
```

**Response:**
```json
{
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "profile": "Full-stack developer",
      "skills": ["React", "Node.js", "TypeScript"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### POST /api/users/login

Login a user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "profile": "Full-stack developer",
      "skills": ["React", "Node.js", "TypeScript"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    },
    "token": "jwt_token_here"
  }
}
```

#### GET /api/users/me

Get the current user's profile.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "profile": "Full-stack developer",
      "skills": ["React", "Node.js", "TypeScript"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### PUT /api/users/me

Update the current user's profile.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "name": "John Doe Updated",
  "profile": "Senior Full-stack developer",
  "skills": ["React", "Node.js", "TypeScript", "PostgreSQL"]
}
```

**Response:**
```json
{
  "message": "Profile updated successfully",
  "data": {
    "user": {
      "id": 1,
      "name": "John Doe Updated",
      "email": "john@example.com",
      "profile": "Senior Full-stack developer",
      "skills": ["React", "Node.js", "TypeScript", "PostgreSQL"],
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

### Portfolio Management

#### GET /api/portfolio

Get all portfolio items for the authenticated user.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "data": {
    "portfolioItems": [
      {
        "id": 1,
        "title": "E-commerce Website",
        "description": "A full-featured online store built with React and Node.js.",
        "techStack": ["React", "Node.js", "MongoDB"],
        "imageUrl": "https://example.com/image.jpg",
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      },
      {
        "id": 2,
        "title": "Mobile App",
        "description": "A cross-platform mobile application for task management.",
        "techStack": ["React Native", "Firebase", "Redux"],
        "imageUrl": "https://example.com/image2.jpg",
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### GET /api/portfolio/user/:userId

Get all portfolio items for a specific user.

**Parameters:**
- `userId` (path parameter): ID of the user

**Response:**
```json
{
  "data": {
    "portfolioItems": [
      {
        "id": 1,
        "title": "E-commerce Website",
        "description": "A full-featured online store built with React and Node.js.",
        "techStack": ["React", "Node.js", "MongoDB"],
        "imageUrl": "https://example.com/image.jpg",
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### GET /api/portfolio/:id

Get a specific portfolio item.

**Parameters:**
- `id` (path parameter): ID of the portfolio item

**Response:**
```json
{
  "data": {
    "portfolioItem": {
      "id": 1,
      "title": "E-commerce Website",
      "description": "A full-featured online store built with React and Node.js.",
      "techStack": ["React", "Node.js", "MongoDB"],
      "imageUrl": "https://example.com/image.jpg",
      "userId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z",
      "user": {
        "id": 1,
        "name": "John Doe"
      }
    }
  }
}
```

#### POST /api/portfolio

Create a new portfolio item.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Request Body:**
```json
{
  "title": "New Project",
  "description": "A description of the project",
  "techStack": ["React", "Node.js", "PostgreSQL"],
  "imageUrl": "https://example.com/image.jpg"
}
```

**Response:**
```json
{
  "message": "Portfolio item created successfully",
  "data": {
    "portfolioItem": {
      "id": 3,
      "title": "New Project",
      "description": "A description of the project",
      "techStack": ["React", "Node.js", "PostgreSQL"],
      "imageUrl": "https://example.com/image.jpg",
      "userId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### PUT /api/portfolio/:id

Update a portfolio item.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Parameters:**
- `id` (path parameter): ID of the portfolio item

**Request Body:**
```json
{
  "title": "Updated Project",
  "description": "Updated description",
  "techStack": ["React", "Node.js", "PostgreSQL", "Redis"],
  "imageUrl": "https://example.com/updated-image.jpg"
}
```

**Response:**
```json
{
  "message": "Portfolio item updated successfully",
  "data": {
    "portfolioItem": {
      "id": 1,
      "title": "Updated Project",
      "description": "Updated description",
      "techStack": ["React", "Node.js", "PostgreSQL", "Redis"],
      "imageUrl": "https://example.com/updated-image.jpg",
      "userId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### DELETE /api/portfolio/:id

Delete a portfolio item.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Parameters:**
- `id` (path parameter): ID of the portfolio item

**Response:**
```json
{
  "message": "Portfolio item deleted successfully"
}
```

### Contact Management

#### POST /api/contacts/user/:userId

Send a contact message to a user.

**Parameters:**
- `userId` (path parameter): ID of the user to contact

**Request Body:**
```json
{
  "name": "Recruiter",
  "email": "recruiter@company.com",
  "message": "I'm interested in your work"
}
```

**Response:**
```json
{
  "message": "Contact message sent successfully",
  "data": {
    "contact": {
      "id": 1,
      "name": "Recruiter",
      "email": "recruiter@company.com",
      "message": "I'm interested in your work",
      "userId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### GET /api/contacts

Get all contact messages for the authenticated user.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "data": {
    "contacts": [
      {
        "id": 1,
        "name": "Recruiter",
        "email": "recruiter@company.com",
        "message": "I'm interested in your work",
        "userId": 1,
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
  }
}
```

#### GET /api/contacts/:id

Get a specific contact message.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Parameters:**
- `id` (path parameter): ID of the contact message

**Response:**
```json
{
  "data": {
    "contact": {
      "id": 1,
      "name": "Recruiter",
      "email": "recruiter@company.com",
      "message": "I'm interested in your work",
      "userId": 1,
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
  }
}
```

#### DELETE /api/contacts/:id

Delete a contact message.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Parameters:**
- `id` (path parameter): ID of the contact message

**Response:**
```json
{
  "message": "Contact message deleted successfully"
}
```

## Error Codes

| Status Code | Description |
|-------------|-------------|
| 400 | Bad Request - Invalid input data |
| 401 | Unauthorized - Authentication required |
| 403 | Forbidden - Insufficient permissions |
| 404 | Not Found - Resource not found |
| 409 | Conflict - Resource already exists |
| 500 | Internal Server Error - Server error |

## Development

### Environment Variables

The following environment variables are required:

```
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/developer_portfolio

# JWT
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Server
PORT=5000
NODE_ENV=development
```

### Running the Server

```bash
# Install dependencies
npm install

# Run database migrations
npm run migrate

# Seed the database
npm run seed

# Start development server
npm run dev
```
