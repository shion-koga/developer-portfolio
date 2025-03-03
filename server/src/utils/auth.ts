import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import config from '../config';

/**
 * Generate a JWT token for a user
 * @param userId User ID to include in the token
 * @returns JWT token
 */
export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, config.jwt.secret, {
    expiresIn: config.jwt.expiresIn,
  });
};

/**
 * Verify a JWT token
 * @param token JWT token to verify
 * @returns Decoded token payload or null if invalid
 */
export const verifyToken = (token: string): { userId: number } | null => {
  try {
    const decoded = jwt.verify(token, config.jwt.secret) as { userId: number };
    return decoded;
  } catch (error) {
    return null;
  }
};

/**
 * Hash a password
 * @param password Plain text password
 * @returns Hashed password
 */
export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

/**
 * Compare a plain text password with a hashed password
 * @param password Plain text password
 * @param hashedPassword Hashed password
 * @returns Whether the passwords match
 */
export const comparePasswords = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};
