
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import CareerCard from '@/components/CareerCard';
import { careers, Career, getCareerById } from '@/utils/careerData';
import { careerCategories } from '@/utils/testData';
import { ArrowLeft, ArrowRight, Search } from 'lucide-react';

// Main Careers Catalog Page
const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');
  
  // Filter careers based on search term and category
  const filteredCareers = careers.filter(career => {
    const matchesSearch = 
      career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      career.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'ALL' || career.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Career Catalog</h1>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive database of careers across various fields, each with detailed roadmaps and skill requirements.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  className="pl-9"
                  placeholder="Search careers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <Tabs defaultValue="ALL" onValueChange={setActiveCategory} className="mb-8">
              <TabsList className="w-full overflow-x-auto flex justify-start py-1 px-1">
                <TabsTrigger value="ALL" className="flex-shrink-0">All Categories</TabsTrigger>
                {Object.entries(careerCategories).map(([key, value]) => (
                  <TabsTrigger key={key} value={key} className="flex-shrink-0">
                    {value}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* All tabs share the same content, filtered by the active tab */}
              <TabsContent value={activeCategory} className="mt-6">
                {filteredCareers.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCareers.map((career) => (
                      <CareerCard key={career.id} career={career} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No careers found matching your criteria.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('ALL');
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 border-t">
        <div className="container px-4 md:px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PathFinder ML. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

// Career Detail Page (nested route)
export const CareerDetailPage = () => {
  const { careerId } = useParams<{ careerId: string }>();
  const career = careerId ? getCareerById(careerId) : undefined;
  
  if (!career) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Career Not Found</h1>
            <p className="mb-6">The career you're looking for doesn't exist in our database.</p>
            <Link to="/careers">
              <Button>Back to Careers</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Link to="/careers" className="inline-flex items-center text-career-primary hover:underline mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Career Catalog
            </Link>
            
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden mb-8">
              <div className="bg-career-primary text-white p-8">
                <Badge className="bg-white text-career-primary mb-4">
                  {careerCategories[career.category as keyof typeof careerCategories]}
                </Badge>
                <h1 className="text-3xl font-bold">{career.title}</h1>
                <p className="mt-2 text-white/90">{career.description}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Key Skills</h2>
                    <div className="flex flex-wrap gap-2">
                      {career.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="bg-career-bg text-career-primary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-lg font-semibold mb-3">Education</h2>
                    <ul className="list-disc pl-5 space-y-1">
                      {career.education.map((edu, index) => (
                        <li key={index}>{edu}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h2 className="text-lg font-semibold mb-3">Job Outlook</h2>
                  <div className="flex items-center">
                    <Progress value={career.outlookScore * 10} className="h-2 flex-grow" />
                    <span className="ml-3 font-medium">{career.outlookScore}/10</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    Based on industry growth projections and employment statistics.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-6">Career Roadmap</h2>
              
              <div className="relative">
                {career.roadmap.map((step, index) => (
                  <div key={index} className="mb-8 relative">
                    <div className="flex">
                      <div className="flex flex-col items-center mr-4">
                        <div className="rounded-full h-10 w-10 flex items-center justify-center bg-career-primary text-white font-semibold">
                          {index + 1}
                        </div>
                        {index < career.roadmap.length - 1 && (
                          <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                        )}
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-4 flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-lg">{step.title}</h3>
                          <Badge variant="outline">{step.timeframe}</Badge>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between items-center mt-6 pt-6 border-t">
                <div>
                  <h3 className="font-medium">Ready to pursue this career?</h3>
                  <p className="text-sm text-gray-500">Take the assessment to see if it's a good match for you.</p>
                </div>
                
                <Link to="/test">
                  <Button className="bg-career-primary hover:bg-career-secondary">
                    Take Assessment
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white py-6 border-t">
        <div className="container px-4 md:px-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} PathFinder ML. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CareersPage;
