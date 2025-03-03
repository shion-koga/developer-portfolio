import { Router } from 'express';
import { register, login, getCurrentUser, updateProfile } from '../controllers/user.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';
import { registerValidation, loginValidation, updateProfileValidation } from '../utils/validation';

const router = Router();

// Public routes
router.post('/register', validate(registerValidation), register);
router.post('/login', validate(loginValidation), login);

// Protected routes
router.get('/me', authenticate, getCurrentUser);
router.put('/me', authenticate, validate(updateProfileValidation), updateProfile);

export default router;
