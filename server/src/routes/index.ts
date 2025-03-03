import { Router } from 'express';
import userRoutes from './user.routes';
import portfolioRoutes from './portfolio.routes';
import contactRoutes from './contact.routes';

const router = Router();

// API routes
router.use('/api/users', userRoutes);
router.use('/api/portfolio', portfolioRoutes);
router.use('/api/contacts', contactRoutes);

// Health check route
router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

export default router;
