import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Code, Briefcase, MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Showcase your</span>
              <span className="block text-indigo-600">developer skills</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">
              A beautiful portfolio system designed to help developers present their skills and projects in a clean, professional way.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link
                  to="/portfolio"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  View Portfolio
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in a portfolio
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Showcase your skills, projects, and experience in a clean, professional way.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Code className="h-6 w-6" />
                </div>
                <div className="mt-5 md:ml-4 md:mt-0 lg:ml-0 lg:mt-5 text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-900">Showcase Skills</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Highlight your technical skills and expertise in a visually appealing way.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div className="mt-5 md:ml-4 md:mt-0 lg:ml-0 lg:mt-5 text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-900">Project Portfolio</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Display your projects with detailed descriptions, images, and links.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div className="mt-5 md:ml-4 md:mt-0 lg:ml-0 lg:mt-5 text-center md:text-left">
                  <h3 className="text-lg font-medium text-gray-900">Contact Form</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Make it easy for potential employers or clients to get in touch with you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured projects section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Featured Work
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" 
                  alt="Project 1" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">E-commerce Website</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A full-featured online store built with React and Node.js.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    React
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    Node.js
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    MongoDB
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Link to="/portfolio/1" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                  View details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3" 
                  alt="Project 2" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Mobile App</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A cross-platform mobile application for task management.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    React Native
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    Firebase
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    Redux
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Link to="/portfolio/2" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                  View details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="h-48 bg-gray-200">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
                  alt="Project 3" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Portfolio Website</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A responsive portfolio website built with React and Tailwind CSS.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    React
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    Tailwind CSS
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-indigo-100 text-indigo-800">
                    TypeScript
                  </span>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <Link to="/portfolio/3" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 flex items-center">
                  View details
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              View all projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;