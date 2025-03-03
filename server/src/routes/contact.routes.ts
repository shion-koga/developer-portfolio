import { Router } from 'express';
import {
  sendContactMessage,
  getContactMessages,
  getContactMessageById,
  deleteContactMessage
} from '../controllers/contact.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';
import { contactMessageValidation, idParamValidation } from '../utils/validation';

const router = Router();

// Public routes
router.post('/user/:userId', validate(contactMessageValidation), sendContactMessage);

// Protected routes
router.get('/', authenticate, getContactMessages);
router.get('/:id', authenticate, validate(idParamValidation), getContactMessageById);
router.delete('/:id', authenticate, validate(idParamValidation), deleteContactMessage);

export default router;
