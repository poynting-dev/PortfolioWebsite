import React from 'react';
import { Code2, Database, Wrench } from 'lucide-react';

const Skills = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Python</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">JavaScript</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">C++</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">SQL</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Java</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">HTML</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">CSS</span>
            </div>
          </div>

          {/* Frameworks & Libraries */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Database className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Frameworks</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">ReactJS</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Node.js</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Firebase</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Git</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Redux</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">.NET</span>
            </div>
          </div>

          {/* Other Skills */}
          <div className="bg-gray-800 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Wrench className="text-blue-400" size={24} />
              <h3 className="text-xl font-semibold text-white">Other Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Data Structures</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Algorithms</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">OOP</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">MySQL</span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300">Design Patterns</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;