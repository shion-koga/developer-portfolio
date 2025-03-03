import { Router } from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/portfolio.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validation.middleware';
import { portfolioItemValidation, idParamValidation } from '../utils/validation';

const router = Router();

// Public routes
router.get('/user/:userId', getAllItems);
router.get('/:id', validate(idParamValidation), getItemById);

// Protected routes
router.get('/', authenticate, getAllItems);
router.post('/', authenticate, validate(portfolioItemValidation), createItem);
router.put('/:id', authenticate, validate([...idParamValidation, ...portfolioItemValidation]), updateItem);
router.delete('/:id', authenticate, validate(idParamValidation), deleteItem);

export default router;
