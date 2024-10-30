import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-gray-800 pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Hi, I'm <span className="text-blue-400">Priyanshu Dixit</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block mr-2">
              <span className="relative text-white">Software Engineer</span>
            </span>
            at EPAM Systems specializing in full-stack development with
            expertise in React, TypeScript, and .NET technologies.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
            >
              View Experience <ArrowRight size={20} />
            </a>
            <a
              href="#projects"
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg font-medium transition"
            >
              See Projects <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
