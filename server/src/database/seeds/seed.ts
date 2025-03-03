import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../utils/auth';

const prisma = new PrismaClient();

async function main() {
  try {
    console.log('Seeding database...');
    
    // Create users
    const user1Password = await hashPassword('password123');
    const user2Password = await hashPassword('password456');
    
    const user1 = await prisma.user.upsert({
      where: { email: 'john@example.com' },
      update: {},
      create: {
        name: 'John Doe',
        email: 'john@example.com',
        password: user1Password,
        profile: 'Full-stack developer',
        skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
      },
    });
    
    const user2 = await prisma.user.upsert({
      where: { email: 'jane@example.com' },
      update: {},
      create: {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: user2Password,
        profile: 'Frontend engineer',
        skills: ['React', 'TypeScript', 'CSS', 'Tailwind'],
      },
    });
    
    console.log('Created users:', { user1, user2 });
    
    // Create portfolio items for user1
    const portfolioItems1 = await Promise.all([
      prisma.portfolioItem.create({
        data: {
          title: 'E-commerce Website',
          description: 'A full-featured online store built with React and Node.js.',
          techStack: ['React', 'Node.js', 'MongoDB'],
          imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
          userId: user1.id,
        },
      }),
      prisma.portfolioItem.create({
        data: {
          title: 'Mobile App',
          description: 'A cross-platform mobile application for task management.',
          techStack: ['React Native', 'Firebase', 'Redux'],
          imageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
          userId: user1.id,
        },
      }),
    ]);
    
    // Create portfolio items for user2
    const portfolioItems2 = await Promise.all([
      prisma.portfolioItem.create({
        data: {
          title: 'Portfolio Website',
          description: 'A responsive portfolio website built with React and Tailwind CSS.',
          techStack: ['React', 'Tailwind CSS', 'TypeScript'],
          imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
          userId: user2.id,
        },
      }),
    ]);
    
    console.log('Created portfolio items:', { portfolioItems1, portfolioItems2 });
    
    // Create contact messages
    const contacts = await Promise.all([
      prisma.contact.create({
        data: {
          name: 'Recruiter A',
          email: 'recruiterA@company.com',
          message: 'Interested in your React Native project',
          userId: user1.id,
        },
      }),
      prisma.contact.create({
        data: {
          name: 'Recruiter B',
          email: 'recruiterB@agency.org',
          message: 'Looking for a frontend engineer',
          userId: user2.id,
        },
      }),
    ]);
    
    console.log('Created contact messages:', contacts);
    
    console.log('Seeding completed successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
