
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Brain, Database, FileText, LineChart, Send, Share2, ShieldCheck, User } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-career-primary text-white py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">About PathFinder ML</h1>
              <p className="text-xl md:text-2xl opacity-90">
                Using AI and machine learning to help you discover your ideal career path
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8 text-center">
                PathFinder ML is dedicated to revolutionizing career guidance by combining human expertise with 
                advanced machine learning technologies. We believe that everyone deserves a fulfilling career 
                that aligns with their unique strengths, interests, and values.
              </p>
              
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Team collaboration" 
                    className="rounded-lg shadow-md w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold mb-3">Why We Created PathFinder ML</h3>
                  <p className="text-gray-600 mb-4">
                    We recognized that traditional career assessments often rely on outdated methodologies and 
                    broad generalizations. Our team of career counselors, data scientists, and machine learning 
                    experts came together to create a more accurate, personalized approach to career guidance.
                  </p>
                  <p className="text-gray-600">
                    By leveraging the power of AI and machine learning, we can analyze patterns across 
                    thousands of data points to provide tailored career recommendations that truly reflect 
                    your unique profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">How It Works</h2>
              <p className="text-center text-gray-600 mb-12">
                Our AI-powered platform uses advanced algorithms to match you with suitable careers
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                    <FileText className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                  <p className="text-gray-600">
                    Our scientifically designed assessment captures your preferences, natural strengths, and work style.
                    The questions are carefully crafted to gather meaningful data for our algorithms.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                    <Brain className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
                  <p className="text-gray-600">
                    Our ML models, including K-means clustering and neural networks, process your responses 
                    to identify patterns and correlations with successful career paths.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600">
                    We analyze vast amounts of career data, including skill requirements, education paths, 
                    and employment trends to provide you with comprehensive guidance.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-career-bg text-career-primary mb-4">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Personalized Results</h3>
                  <p className="text-gray-600">
                    Receive tailored career recommendations with detailed roadmaps, skill requirements, 
                    and educational pathways based on your unique profile.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Our Team</h2>
              <p className="text-center text-gray-600 mb-12">
                A diverse group of experts committed to transforming career guidance
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Dr. Michael Chen</h3>
                  <p className="text-gray-500">Lead Data Scientist</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">Dr. Sarah Johnson</h3>
                  <p className="text-gray-500">Career Psychology Expert</p>
                </div>
                
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                      alt="Team member" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-semibold">James Wilson</h3>
                  <p className="text-gray-500">ML Engineering Lead</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <Brain className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI-Powered Assessment</h3>
                    <p className="text-gray-600">
                      Our advanced machine learning algorithms analyze your responses to identify your unique strengths and preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <User className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Personalized Recommendations</h3>
                    <p className="text-gray-600">
                      Receive career suggestions tailored specifically to your profile, not generic categories.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <LineChart className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Detailed Analytics</h3>
                    <p className="text-gray-600">
                      Visualize your results with clear charts and explanations of how your profile matches different career paths.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data Privacy</h3>
                    <p className="text-gray-600">
                      Your assessment data is handled with the highest security standards and never shared with third parties.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <Share2 className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Career Roadmaps</h3>
                    <p className="text-gray-600">
                      Access detailed step-by-step guides for pursuing each recommended career path.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-career-primary text-white">
                      <Send className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Results Sharing</h3>
                    <p className="text-gray-600">
                      Export and share your results with career counselors, mentors, or educational institutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact/CTA */}
        <section className="py-16 bg-career-bg">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-career-primary">Ready to Discover Your Career Path?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Take our free assessment and explore career options that match your unique profile.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/test">
                  <Button size="lg" className="bg-career-primary hover:bg-career-secondary">
                    Take the Assessment
                  </Button>
                </Link>
                <Link to="/careers">
                  <Button size="lg" variant="outline" className="text-career-primary border-career-primary hover:bg-career-bg">
                    Browse Careers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
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

export default AboutPage;
