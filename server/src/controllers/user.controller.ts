import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import { hashPassword, comparePasswords, generateToken } from '../utils/auth';
import { NotFoundError, UnauthorizedError, ConflictError } from '../utils/errors';

const prisma = new PrismaClient();

/**
 * Register a new user
 */
export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, profile, skills } = req.body;
    
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    
    if (existingUser) {
      throw new ConflictError('User with this email already exists');
    }
    
    // Hash password
    const hashedPassword = await hashPassword(password);
    
    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        profile,
        skills: Array.isArray(skills) ? skills : [],
      },
      select: {
        id: true,
        name: true,
        email: true,
        profile: true,
        skills: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    
    // Generate token
    const token = generateToken(user.id);
    
    res.status(201).json({
      message: 'User registered successfully',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Login user
 */
export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
    });
    
    if (!user) {
      throw new UnauthorizedError('Invalid credentials');
    }
    
    // Verify password
    const isPasswordValid = await comparePasswords(password, user.password);
    
    if (!isPasswordValid) {
      throw new UnauthorizedError('Invalid credentials');
    }
    
    // Generate token
    const token = generateToken(user.id);
    
    res.status(200).json({
      message: 'Login successful',
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          profile: user.profile,
          skills: user.skills,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get current user profile
 */
export const getCurrentUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    // Find user
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        profile: true,
        skills: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    res.status(200).json({
      data: { user },
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 */
export const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.userId;
    
    if (!userId) {
      throw new UnauthorizedError('User not authenticated');
    }
    
    const { name, profile, skills } = req.body;
    
    // Update user
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: {
        name,
        profile,
        skills: Array.isArray(skills) ? skills : undefined,
      },
      select: {
        id: true,
        name: true,
        email: true,
        profile: true,
        skills: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    
    res.status(200).json({
      message: 'Profile updated successfully',
      data: { user: updatedUser },
    });
  } catch (error) {
    next(error);
  }
};
