
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import CareerCard from '@/components/CareerCard';
import { careerCategories, TestResult } from '@/utils/testData';
import { getCareersByCategories } from '@/utils/careerData';
import { Career } from '@/utils/careerData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Download, RefreshCw, Save } from 'lucide-react';
import { toast } from 'sonner';

const ResultsPage = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<TestResult | null>(null);
  const [recommendedCareers, setRecommendedCareers] = useState<Career[]>([]);
  
  useEffect(() => {
    // Get results from session storage
    const storedResults = sessionStorage.getItem('testResults');
    
    if (!storedResults) {
      // If no results, redirect to test page
      navigate('/test');
      return;
    }
    
    const parsedResults = JSON.parse(storedResults) as TestResult;
    setResults(parsedResults);
    
    // Get recommended careers based on top categories
    const careers = getCareersByCategories(parsedResults.topCategories);
    setRecommendedCareers(careers);
  }, [navigate]);
  
  // Prepare data for chart
  const prepareChartData = () => {
    if (!results) return [];
    
    return Object.entries(results.categories)
      .map(([category, score]) => ({
        name: careerCategories[category as keyof typeof careerCategories],
        score,
      }))
      .sort((a, b) => b.score - a.score);
  };
  
  const handleSaveResults = () => {
    toast.success("Results saved successfully!");
  };
  
  const handleDownloadResults = () => {
    toast.success("Results downloaded as PDF!");
  };
  
  if (!results) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p>Loading results...</p>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border mb-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Career Assessment Results</h1>
                  <p className="text-gray-600 mt-1">
                    Based on your responses, we've identified these career categories that align with your profile.
                  </p>
                </div>
                <div className="flex mt-4 md:mt-0 space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center" 
                    onClick={handleSaveResults}
                  >
                    <Save className="mr-2 h-4 w-4" />
                    Save
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center" 
                    onClick={handleDownloadResults}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>
              </div>
              
              <div className="h-72 mb-6">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={prepareChartData()}
                    layout="vertical"
                    margin={{
                      top: 5,
                      right: 30,
                      left: 90,
                      bottom: 5,
                    }}
                  >
                    <XAxis type="number" />
                    <YAxis 
                      type="category" 
                      dataKey="name" 
                      tick={{ fontSize: 12 }} 
                      width={100} 
                    />
                    <Tooltip />
                    <Bar 
                      dataKey="score" 
                      fill="#8b5cf6" 
                      radius={[0, 4, 4, 0]} 
                      barSize={30}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              
              <div className="bg-career-bg p-4 rounded-lg mb-6">
                <h2 className="text-lg font-semibold text-career-primary mb-2">Your Top Career Categories</h2>
                <ul className="list-disc pl-5 space-y-1">
                  {results.topCategories.map((category) => (
                    <li key={category}>
                      <span className="font-medium">{careerCategories[category as keyof typeof careerCategories]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Link to="/test">
                  <Button 
                    variant="outline" 
                    className="flex items-center text-career-primary hover:bg-career-bg hover:text-career-primary"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Retake Assessment
                  </Button>
                </Link>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold mb-6">Recommended Careers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendedCareers.map((career) => (
                <CareerCard 
                  key={career.id} 
                  career={career} 
                  isRecommended={results.topCategories[0] === career.category}
                />
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <h2 className="text-xl font-semibold mb-4">Explore All Career Options</h2>
              <p className="text-gray-600 mb-6">
                Browse our complete catalog of careers to discover even more possibilities.
              </p>
              <Link to="/careers">
                <Button className="bg-career-primary hover:bg-career-secondary">
                  View Career Catalog
                </Button>
              </Link>
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

export default ResultsPage;
