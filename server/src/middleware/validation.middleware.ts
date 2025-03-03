import { Request, Response, NextFunction } from 'express';
import { validationResult, ValidationChain } from 'express-validator';
import { BadRequestError } from '../utils/errors';

/**
 * Middleware to validate request data
 * @param validations Array of validation chains
 * @returns Middleware function
 */
export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // Run all validations
    await Promise.all(validations.map(validation => validation.run(req)));
    
    // Check for validation errors
    const errors = validationResult(req);
    
    if (errors.isEmpty()) {
      return next();
    }
    
    // Format validation errors
    const formattedErrors = errors.array().map(error => ({
      field: error.path,
      message: error.msg,
    }));
    
    // Return validation errors
    const error = new BadRequestError('Validation failed');
    return res.status(400).json({
      error: {
        message: error.message,
        details: formattedErrors,
      },
    });
  };
};
