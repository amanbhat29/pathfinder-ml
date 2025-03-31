
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Navbar from '@/components/Navbar';
import TestQuestion from '@/components/TestQuestion';
import { questions, calculateResults } from '@/utils/testData';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const TestPage = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  const handleOptionSelect = (questionId: number, optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: optionId
    }));
  };
  
  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };
  
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };
  
  const handleSubmit = () => {
    // Check if all questions have been answered
    if (Object.keys(answers).length < totalQuestions) {
      const unansweredQuestions = totalQuestions - Object.keys(answers).length;
      toast.error(`Please answer all questions. (${unansweredQuestions} remaining)`);
      return;
    }
    
    // Calculate results
    const results = calculateResults(answers);
    
    // Store results in session storage for the results page
    sessionStorage.setItem('testResults', JSON.stringify(results));
    
    // Navigate to results page
    navigate('/results');
  };
  
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Career Assessment</h1>
              <p className="text-gray-600">
                Answer the questions honestly to get the most accurate career recommendations.
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                <span className="text-sm font-medium">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            
            {currentQuestion && (
              <TestQuestion 
                question={currentQuestion}
                selectedOption={answers[currentQuestion.id] || null}
                onSelect={handleOptionSelect}
              />
            )}
            
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={isFirstQuestion}
                className="flex items-center"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              
              {isLastQuestion ? (
                <Button 
                  onClick={handleSubmit}
                  className="bg-career-primary hover:bg-career-secondary flex items-center"
                >
                  Submit
                  <CheckCircle className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  disabled={!answers[currentQuestion?.id]}
                  className="flex items-center"
                >
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
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

export default TestPage;
