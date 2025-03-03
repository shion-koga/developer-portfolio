import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const PortfolioDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for a portfolio item
  // In a real application, you would fetch this data based on the ID
  const portfolioItem = {
    id: parseInt(id || '1'),
    title: 'E-commerce Website',
    description: 'A full-featured online store built with React and Node.js.',
    longDescription: `
      This project is a complete e-commerce solution with user authentication, product catalog, shopping cart, and payment processing.
      
      The frontend is built with React and uses Redux for state management. The UI is styled with Tailwind CSS for a responsive design that works well on all devices.
      
      The backend is powered by Node.js and Express, with MongoDB as the database. It includes RESTful APIs for product management, user authentication, and order processing.
      
      Key features include:
      - User registration and authentication
      - Product catalog with search and filtering
      - Shopping cart functionality
      - Secure checkout process
      - Order history and tracking
      - Admin dashboard for product and order management
    `,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    gallery: [
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
    ],
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/example/project',
    year: '2025',
    client: 'Personal Project'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/portfolio" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to portfolio
          </Link>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h1 className="text-2xl font-bold text-gray-900">{portfolioItem.title}</h1>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">{portfolioItem.description}</p>
          </div>

          {/* Main image */}
          <div className="border-t border-gray-200">
            <img 
              src={portfolioItem.image} 
              alt={portfolioItem.title} 
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Project details */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Description</dt>
                <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">{portfolioItem.longDescription}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Technologies</dt>
                <dd className="mt-1">
                  <div className="flex flex-wrap gap-2">
                    {portfolioItem.techStack.map((tech, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Year</dt>
                <dd className="mt-1 text-sm text-gray-900">{portfolioItem.year}</dd>
              </div>
              
              <div>
                <dt className="text-sm font-medium text-gray-500">Client</dt>
                <dd className="mt-1 text-sm text-gray-900">{portfolioItem.client}</dd>
              </div>
              
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">Links</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  <div className="flex space-x-4">
                    <a 
                      href={portfolioItem.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      <ExternalLink className="mr-1 h-4 w-4" />
                      Live Demo
                    </a>
                    <a 
                      href={portfolioItem.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                    >
                      <Github className="mr-1 h-4 w-4" />
                      GitHub Repository
                    </a>
                  </div>
                </dd>
              </div>
            </dl>
          </div>

          {/* Image gallery */}
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h3 className="text-lg font-medium text-gray-900">Gallery</h3>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItem.gallery.map((image, index) => (
                <div key={index} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={image} 
                    alt={`${portfolioItem.title} screenshot ${index + 1}`} 
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetailPage;