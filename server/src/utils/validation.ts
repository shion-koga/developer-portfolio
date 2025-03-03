import { body, param } from 'express-validator';

/**
 * User registration validation
 */
export const registerValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string')
    .trim(),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('profile')
    .optional()
    .isString()
    .withMessage('Profile must be a string')
    .trim(),
  body('skills')
    .optional()
    .isArray()
    .withMessage('Skills must be an array'),
];

/**
 * User login validation
 */
export const loginValidation = [
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

/**
 * Update profile validation
 */
export const updateProfileValidation = [
  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string')
    .trim(),
  body('profile')
    .optional()
    .isString()
    .withMessage('Profile must be a string')
    .trim(),
  body('skills')
    .optional()
    .isArray()
    .withMessage('Skills must be an array'),
];

/**
 * Portfolio item validation
 */
export const portfolioItemValidation = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isString()
    .withMessage('Title must be a string')
    .trim(),
  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string')
    .trim(),
  body('techStack')
    .optional()
    .isArray()
    .withMessage('Tech stack must be an array'),
  body('imageUrl')
    .optional()
    .isString()
    .withMessage('Image URL must be a string')
    .trim(),
];

/**
 * Contact message validation
 */
export const contactMessageValidation = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isString()
    .withMessage('Name must be a string')
    .trim(),
  body('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email format')
    .normalizeEmail(),
  body('message')
    .notEmpty()
    .withMessage('Message is required')
    .isString()
    .withMessage('Message must be a string')
    .trim(),
  param('userId')
    .notEmpty()
    .withMessage('User ID is required')
    .isInt()
    .withMessage('User ID must be an integer'),
];

/**
 * ID parameter validation
 */
export const idParamValidation = [
  param('id')
    .notEmpty()
    .withMessage('ID is required')
    .isInt()
    .withMessage('ID must be an integer'),
];
