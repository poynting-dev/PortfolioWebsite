import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Student Resource Portal */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Student Resource Portal
            </h3>
            <p className="text-gray-300 mb-4">
              A platform for students to view academic performance, publish/view
              articles, access faculty information, and manage application
              requisitions.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Tailwind CSS
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Material UI
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                React
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Firebase
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/poynting-dev/Final-year-project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Github size={20} />
                <span>Source</span>
              </a>
            </div>
          </div>

          {/* Invoice Web Application */}
          <div className="bg-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-blue-400 mb-4">
              Invoice Web Application
            </h3>
            <p className="text-gray-300 mb-4">
              Enables sellers to generate, manage, and share invoices in PDF
              format.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                React
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Node.js
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Firebase
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">
                Redux
              </span>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/poynting-dev/invoice-app-with-tailwind"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition"
              >
                <Github size={20} />
                <span>Source</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
