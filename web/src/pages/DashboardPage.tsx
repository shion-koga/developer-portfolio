import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Edit, Trash2, MessageSquare, User } from 'lucide-react';

const DashboardPage: React.FC = () => {
  // Mock data for portfolio items
  const portfolioItems = [
    { id: 1, title: 'E-commerce Website', description: 'A full-featured online store built with React and Node.js.' },
    { id: 2, title: 'Mobile App', description: 'A cross-platform mobile application for task management.' },
    { id: 3, title: 'Portfolio Website', description: 'A responsive portfolio website built with React and Tailwind CSS.' },
  ];

  // Mock data for messages
  const messages = [
    { id: 1, name: 'Recruiter A', email: 'recruiterA@company.com', message: 'Interested in your React Native project', date: '2025-03-04' },
    { id: 2, name: 'Recruiter B', email: 'recruiterB@agency.org', message: 'Looking for a frontend engineer', date: '2025-03-05' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Link
            to="/profile"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <User className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
            Edit Profile
          </Link>
          <Link
            to="/portfolio/new"
            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <Plus className="-ml-1 mr-2 h-5 w-5" />
            Add Project
          </Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Portfolio Items Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Your Portfolio Items
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Manage your projects and work samples.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {portfolioItems.map((item) => (
                <li key={item.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-indigo-600 truncate">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-500 truncate">
                        {item.description}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0 flex">
                      <button
                        type="button"
                        className="mr-2 inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {portfolioItems.length === 0 && (
              <div className="px-4 py-5 sm:px-6 text-center">
                <p className="text-sm text-gray-500">
                  You haven't added any portfolio items yet.
                </p>
                <Link
                  to="/portfolio/new"
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Plus className="-ml-1 mr-2 h-5 w-5" />
                  Add Your First Project
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Messages Section */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Recent Messages
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Inquiries from potential employers and clients.
            </p>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {messages.map((message) => (
                <li key={message.id} className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {message.name} <span className="text-gray-500">({message.email})</span>
                      </p>
                      <p className="mt-1 text-sm text-gray-500 truncate">
                        {message.message}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {message.date}
                      </p>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex items-center p-1 border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <MessageSquare className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            {messages.length === 0 && (
              <div className="px-4 py-5 sm:px-6 text-center">
                <p className="text-sm text-gray-500">
                  You haven't received any messages yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;