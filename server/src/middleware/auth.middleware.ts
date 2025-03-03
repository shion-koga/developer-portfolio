import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../utils/errors';
import { verifyToken } from '../utils/auth';

// Extend Express Request interface to include user
declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: number;
      };
    }
  }
}

/**
 * Authentication middleware to protect routes
 */
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from Authorization header
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthorizedError('Authentication required');
    }
    
    // Extract token
    const token = authHeader.split(' ')[1];
    
    // Verify token
    const decoded = verifyToken(token);
    
    if (!decoded) {
      throw new UnauthorizedError('Invalid or expired token');
    }
    
    // Add user info to request
    req.user = decoded;
    
    next();
  } catch (error) {
    next(error);
  }
};
