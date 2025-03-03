import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { NotFoundError, ForbiddenError, UnauthorizedError } from '../utils/errors';

const prisma = new PrismaClient();

/**
 * Send a contact message to a user
 */
export const sendContactMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, message } = req.body;
    const userId = parseInt(req.params.userId);
    
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    // Create contact message
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
        userId,
      },
    });
    
    res.status(201).json({
      message: 'Contact message sent successfully',
      data: { contact },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all contact messages for the authenticated user
 */
export const getContactMessages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Get contact messages
    const contacts = await prisma.contact.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
    
    res.status(200).json({
      data: { contacts },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get a specific contact message
 */
export const getContactMessageById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const contactId = parseInt(req.params.id);
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Get contact message
    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });
    
    if (!contact) {
      throw new NotFoundError('Contact message not found');
    }
    
    // Check if contact belongs to user
    if (contact.userId !== userId) {
      throw new ForbiddenError('You do not have permission to view this contact message');
    }
    
    res.status(200).json({
      data: { contact },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete a contact message
 */
export const deleteContactMessage = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    const contactId = parseInt(req.params.id);
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Check if contact exists and belongs to user
    const contact = await prisma.contact.findUnique({
      where: { id: contactId },
    });
    
    if (!contact) {
      throw new NotFoundError('Contact message not found');
    }
    
    if (contact.userId !== userId) {
      throw new ForbiddenError('You do not have permission to delete this contact message');
    }
    
    // Delete contact message
    await prisma.contact.delete({
      where: { id: contactId },
    });
    
    res.status(200).json({
      message: 'Contact message deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
