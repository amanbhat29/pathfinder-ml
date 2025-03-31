
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Career } from '@/utils/careerData';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CareerCardProps {
  career: Career;
  isRecommended?: boolean;
}

const CareerCard: React.FC<CareerCardProps> = ({ career, isRecommended = false }) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-md ${isRecommended ? 'border-career-accent border-2' : ''}`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{career.title}</CardTitle>
          {isRecommended && (
            <Badge className="bg-career-accent">Recommended</Badge>
          )}
        </div>
        <CardDescription>{career.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="mb-3">
          <h4 className="text-sm font-semibold mb-1">Key Skills:</h4>
          <div className="flex flex-wrap gap-1">
            {career.skills.slice(0, 3).map((skill, index) => (
              <Badge key={index} variant="secondary" className="bg-career-bg text-career-primary">
                {skill}
              </Badge>
            ))}
            {career.skills.length > 3 && (
              <Badge variant="outline">+{career.skills.length - 3} more</Badge>
            )}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold mb-1">Education:</h4>
          <p className="text-sm text-gray-600">{career.education[0]}</p>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Link to={`/careers/${career.id}`} className="w-full">
          <Button variant="outline" className="w-full text-career-primary hover:bg-career-bg hover:text-career-primary">
            View Career Path
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CareerCard;
