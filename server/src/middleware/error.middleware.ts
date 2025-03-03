import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/errors';
import config from '../config';

/**
 * Error handling middleware
 */
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Log error
  console.error(err);
  
  // Handle API errors
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      error: {
        message: err.message,
        ...(config.nodeEnv === 'development' && { stack: err.stack }),
      },
    });
  }
  
  // Handle validation errors from express-validator
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: {
        message: err.message,
        ...(config.nodeEnv === 'development' && { stack: err.stack }),
      },
    });
  }
  
  // Handle Prisma errors
  if (err.name === 'PrismaClientKnownRequestError') {
    return res.status(400).json({
      error: {
        message: 'Database operation failed',
        ...(config.nodeEnv === 'development' && { 
          details: err.message,
          stack: err.stack 
        }),
      },
    });
  }
  
  // Handle other errors
  return res.status(500).json({
    error: {
      message: 'Internal server error',
      ...(config.nodeEnv === 'development' && { 
        details: err.message,
        stack: err.stack 
      }),
    },
  });
};
