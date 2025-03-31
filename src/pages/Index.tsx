
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { ArrowRight, BookOpen, Brain, Lightbulb, Map } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-career-secondary to-career-primary py-16 md:py-24 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Discover Your Ideal Career Path with AI
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Take our assessment powered by machine learning to find careers that match your unique strengths, interests, and personality.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link to="/test">
                  <Button size="lg" className="bg-white text-career-primary hover:bg-gray-100">
                    Take the Test <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                    Explore Careers
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Career Planning" 
                className="rounded-lg shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">How PathFinder ML Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform analyzes your responses to match you with careers that align with your unique profile.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Take the Assessment</h3>
              <p className="text-gray-600">
                Answer questions about your interests, preferences, and natural strengths.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                <Lightbulb className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
              <p className="text-gray-600">
                Our machine learning algorithms process your responses to identify patterns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">
                Receive personalized career suggestions that match your profile.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                <Map className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Explore Roadmaps</h3>
              <p className="text-gray-600">
                Follow detailed career paths to achieve your professional goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-career-bg py-16">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-career-primary">Ready to Find Your Ideal Career?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Take our free assessment and discover career paths that align with your unique strengths and interests.
          </p>
          <Link to="/test">
            <Button size="lg" className="bg-career-primary hover:bg-career-secondary">
              Start Your Assessment
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">PathFinder ML</h2>
              <p className="text-gray-400">AI-powered career guidance</p>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              <Link to="/test" className="text-gray-300 hover:text-white">Assessment</Link>
              <Link to="/careers" className="text-gray-300 hover:text-white">Careers</Link>
              <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} PathFinder ML. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
