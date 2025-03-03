import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PortfolioListPage: React.FC = () => {
  // Mock data for portfolio items
  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-featured online store built with React and Node.js.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
      techStack: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App',
      description: 'A cross-platform mobile application for task management.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3',
      techStack: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Tailwind CSS.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
      techStack: ['React', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system for bloggers with markdown support.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      techStack: ['Next.js', 'PostgreSQL', 'GraphQL']
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'A simple weather application with location-based forecasts.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b',
      techStack: ['JavaScript', 'OpenWeather API', 'CSS']
    },
    {
      id: 6,
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for tracking social media performance.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      techStack: ['Vue.js', 'D3.js', 'Express']
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Portfolio
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A collection of my projects and work samples.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg flex flex-col">
              <div className="h-48 bg-gray-200">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-grow px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Link 
                  to={`/portfolio/${item.id}`} 
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                >
                  View details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioListPage;