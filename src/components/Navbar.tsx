
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-career-primary flex items-center">
          <span className="mr-2">PathFinder</span>
          <span className="text-career-accent">ML</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-career-primary transition-colors">
            Home
          </Link>
          <Link to="/test" className="text-gray-700 hover:text-career-primary transition-colors">
            Take Test
          </Link>
          <Link to="/careers" className="text-gray-700 hover:text-career-primary transition-colors">
            Careers
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-career-primary transition-colors">
            About Us
          </Link>
          <Button className="bg-career-primary hover:bg-career-secondary">
            Start Assessment
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 bg-white shadow-md p-4 md:hidden z-10">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-career-primary transition-colors py-2">
                Home
              </Link>
              <Link to="/test" className="text-gray-700 hover:text-career-primary transition-colors py-2">
                Take Test
              </Link>
              <Link to="/careers" className="text-gray-700 hover:text-career-primary transition-colors py-2">
                Careers
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-career-primary transition-colors py-2">
                About Us
              </Link>
              <Button className="bg-career-primary hover:bg-career-secondary w-full">
                Start Assessment
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
