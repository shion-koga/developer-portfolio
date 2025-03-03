import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { NotFoundError, ForbiddenError, UnauthorizedError } from '../utils/errors';

const prisma = new PrismaClient();

/**
 * Get all portfolio items for a user
 */
export const getAllItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.userId) || req.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Get portfolio items
    const portfolioItems = await prisma.portfolioItem.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    
    res.status(200).json({
      data: { portfolioItems },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific portfolio item
 */
export const getItemById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const itemId = parseInt(req.params.id);
    
    // Get portfolio item
    const portfolioItem = await prisma.portfolioItem.findUnique({
      where: { id: itemId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    
    if (!portfolioItem) {
      throw new NotFoundError('Portfolio item not found');
    }
    
    res.status(200).json({
      data: { portfolioItem },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Create a new portfolio item
 */
export const createItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    const { title, description, techStack, imageUrl } = req.body;
    
    // Create portfolio item
    const portfolioItem = await prisma.portfolioItem.create({
      data: {
        title,
        description,
        techStack: Array.isArray(techStack) ? techStack : [],
        imageUrl,
        userId,
      },
    });
    
    res.status(201).json({
      message: 'Portfolio item created successfully',
      data: { portfolioItem },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update a portfolio item
 */
export const updateItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const itemId = parseInt(req.params.id);
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Check if portfolio item exists and belongs to user
    const existingItem = await prisma.portfolioItem.findUnique({
      where: { id: itemId },
    });
    
    if (!existingItem) {
      throw new NotFoundError('Portfolio item not found');
    }
    
    if (existingItem.userId !== userId) {
      throw new ForbiddenError('You do not have permission to update this item');
    }
    
    const { title, description, techStack, imageUrl } = req.body;
    
    // Update portfolio item
    const updatedItem = await prisma.portfolioItem.update({
      where: { id: itemId },
      data: {
        title,
        description,
        techStack: Array.isArray(techStack) ? techStack : undefined,
        imageUrl,
      },
    });
    
    res.status(200).json({
      message: 'Portfolio item updated successfully',
      data: { portfolioItem: updatedItem },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a portfolio item
 */
export const deleteItem = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const itemId = parseInt(req.params.id);
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Check if portfolio item exists and belongs to user
    const existingItem = await prisma.portfolioItem.findUnique({
      where: { id: itemId },
    });
    
    if (!existingItem) {
      throw new NotFoundError('Portfolio item not found');
    }
    
    if (existingItem.userId !== userId) {
      throw new ForbiddenError('You do not have permission to delete this item');
    }
    
    // Delete portfolio item
    await prisma.portfolioItem.delete({
      where: { id: itemId },
    });
    
    res.status(200).json({
      message: 'Portfolio item deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
