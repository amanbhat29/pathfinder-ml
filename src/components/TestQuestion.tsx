
import React from 'react';
import { Question, Option } from '@/utils/testData';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface TestQuestionProps {
  question: Question;
  selectedOption: string | null;
  onSelect: (questionId: number, optionId: string) => void;
}

const TestQuestion: React.FC<TestQuestionProps> = ({ question, selectedOption, onSelect }) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <h3 className="text-lg font-semibold mb-4">{question.text}</h3>
        
        <RadioGroup
          value={selectedOption || ""}
          onValueChange={(value) => onSelect(question.id, value)}
          className="space-y-4"
        >
          {question.options.map((option) => (
            <div key={option.id} className="flex items-start space-x-3 p-2 hover:bg-gray-50 rounded-md transition-colors">
              <RadioGroupItem 
                value={option.id} 
                id={`question-${question.id}-option-${option.id}`} 
                className="mt-1"
              />
              <Label
                htmlFor={`question-${question.id}-option-${option.id}`}
                className="cursor-pointer font-normal"
              >
                {option.text}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </CardContent>
    </Card>
  );
};

export default TestQuestion;
