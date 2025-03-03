/**
 * Custom API error class
 */
export class ApiError extends Error {
  statusCode: number;
  
  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Not Found error (404)
 */
export class NotFoundError extends ApiError {
  constructor(message = 'Resource not found') {
    super(404, message);
  }
}

/**
 * Unauthorized error (401)
 */
export class UnauthorizedError extends ApiError {
  constructor(message = 'Unauthorized') {
    super(401, message);
  }
}

/**
 * Forbidden error (403)
 */
export class ForbiddenError extends ApiError {
  constructor(message = 'Forbidden') {
    super(403, message);
  }
}

/**
 * Bad Request error (400)
 */
export class BadRequestError extends ApiError {
  constructor(message = 'Bad request') {
    super(400, message);
  }
}

/**
 * Conflict error (409)
 */
export class ConflictError extends ApiError {
  constructor(message = 'Conflict') {
    super(409, message);
  }
}
