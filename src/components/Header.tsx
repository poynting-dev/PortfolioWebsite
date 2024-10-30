import React from 'react';
import { Github, Linkedin, Mail, Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-blue-400">
            Priyanshu Dixit
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
            <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
            <a href="#achievements" className="text-gray-300 hover:text-white transition">Achievements</a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/poynting-dev" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-300 hover:text-white transition">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/dixitpriyanshu23" target="_blank" rel="noopener noreferrer"
                 className="text-gray-300 hover:text-white transition">
                <Linkedin size={20} />
              </a>
              <a href="mailto:dixitpriyanshu23@gmail.com" 
                 className="text-gray-300 hover:text-white transition">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition">Projects</a>
              <a href="#achievements" className="text-gray-300 hover:text-white transition">Achievements</a>
              <div className="flex space-x-4 pt-2">
                <a href="https://github.com/poynting-dev" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/dixitpriyanshu23" target="_blank" rel="noopener noreferrer"
                   className="text-gray-300 hover:text-white transition">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:dixitpriyanshu23@gmail.com"
                   className="text-gray-300 hover:text-white transition">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;