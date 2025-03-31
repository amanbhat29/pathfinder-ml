
export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  weightings: Record<string, number>;
}

export interface TestResult {
  categories: Record<string, number>;
  topCategories: string[];
}

// These categories represent different career domains
export const careerCategories = {
  TECH: "Technology",
  CREATIVE: "Creative Arts",
  BUSINESS: "Business & Management",
  SCIENCE: "Science & Research",
  HEALTHCARE: "Healthcare",
  EDUCATION: "Education & Training",
  SOCIAL: "Social Services",
  TRADES: "Skilled Trades"
};

// Questions for the career assessment
export const questions: Question[] = [
  {
    id: 1,
    text: "When faced with a problem, I prefer to:",
    options: [
      { 
        id: "1A", 
        text: "Break it down logically and find a systematic solution", 
        weightings: { TECH: 2, SCIENCE: 2, BUSINESS: 1 } 
      },
      { 
        id: "1B", 
        text: "Think creatively and brainstorm innovative approaches", 
        weightings: { CREATIVE: 2, TECH: 1, BUSINESS: 1 } 
      },
      { 
        id: "1C", 
        text: "Discuss with others to understand different perspectives", 
        weightings: { SOCIAL: 2, EDUCATION: 2, HEALTHCARE: 1 } 
      },
      { 
        id: "1D", 
        text: "Take immediate practical action to fix it", 
        weightings: { TRADES: 2, HEALTHCARE: 1, BUSINESS: 1 } 
      }
    ]
  },
  {
    id: 2,
    text: "I enjoy spending my free time:",
    options: [
      { 
        id: "2A", 
        text: "Working with technology, coding, or building things", 
        weightings: { TECH: 2, TRADES: 1, SCIENCE: 1 } 
      },
      { 
        id: "2B", 
        text: "Creating art, music, writing, or design", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "2C", 
        text: "Organizing events, managing projects, or planning", 
        weightings: { BUSINESS: 2, SOCIAL: 1, EDUCATION: 1 } 
      },
      { 
        id: "2D", 
        text: "Learning about science, researching, or experimenting", 
        weightings: { SCIENCE: 2, HEALTHCARE: 1, TECH: 1 } 
      }
    ]
  },
  {
    id: 3,
    text: "When working with others, I tend to:",
    options: [
      { 
        id: "3A", 
        text: "Take the lead and organize the group", 
        weightings: { BUSINESS: 2, EDUCATION: 1, HEALTHCARE: 1 } 
      },
      { 
        id: "3B", 
        text: "Focus on supporting team members emotionally", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      },
      { 
        id: "3C", 
        text: "Analyze the problem and provide technical solutions", 
        weightings: { TECH: 2, SCIENCE: 2, TRADES: 1 } 
      },
      { 
        id: "3D", 
        text: "Bring creativity and new ideas to the discussion", 
        weightings: { CREATIVE: 2, BUSINESS: 1, TECH: 1 } 
      }
    ]
  },
  {
    id: 4,
    text: "I am most satisfied when I can:",
    options: [
      { 
        id: "4A", 
        text: "Help others solve their problems or improve their lives", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 2 } 
      },
      { 
        id: "4B", 
        text: "Create something new or express myself", 
        weightings: { CREATIVE: 2, TECH: 1 } 
      },
      { 
        id: "4C", 
        text: "Achieve measurable results or business outcomes", 
        weightings: { BUSINESS: 2, SCIENCE: 1, TRADES: 1 } 
      },
      { 
        id: "4D", 
        text: "Solve complex technical or scientific challenges", 
        weightings: { TECH: 2, SCIENCE: 2, HEALTHCARE: 1 } 
      }
    ]
  },
  {
    id: 5,
    text: "In terms of work environment, I prefer:",
    options: [
      { 
        id: "5A", 
        text: "A structured corporate setting with clear hierarchy", 
        weightings: { BUSINESS: 2, TECH: 1 } 
      },
      { 
        id: "5B", 
        text: "A creative studio or flexible workspace", 
        weightings: { CREATIVE: 2, TECH: 1, EDUCATION: 1 } 
      },
      { 
        id: "5C", 
        text: "Being outdoors or in varied locations", 
        weightings: { TRADES: 2, SCIENCE: 1, SOCIAL: 1 } 
      },
      { 
        id: "5D", 
        text: "A helping environment where I interact with people", 
        weightings: { HEALTHCARE: 2, SOCIAL: 2, EDUCATION: 2 } 
      }
    ]
  },
  {
    id: 6,
    text: "I am naturally good at:",
    options: [
      { 
        id: "6A", 
        text: "Working with numbers, data, and analysis", 
        weightings: { TECH: 2, SCIENCE: 2, BUSINESS: 1 } 
      },
      { 
        id: "6B", 
        text: "Working with my hands and building things", 
        weightings: { TRADES: 2, CREATIVE: 1, TECH: 1 } 
      },
      { 
        id: "6C", 
        text: "Communication, teaching, and explaining concepts", 
        weightings: { EDUCATION: 2, SOCIAL: 1, BUSINESS: 1 } 
      },
      { 
        id: "6D", 
        text: "Understanding people and their emotions", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 7,
    text: "My friends and family would describe me as:",
    options: [
      { 
        id: "7A", 
        text: "Analytical, logical, and detail-oriented", 
        weightings: { TECH: 2, SCIENCE: 2, BUSINESS: 1 } 
      },
      { 
        id: "7B", 
        text: "Creative, imaginative, and artistic", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "7C", 
        text: "Caring, empathetic, and supportive", 
        weightings: { HEALTHCARE: 2, SOCIAL: 2, EDUCATION: 1 } 
      },
      { 
        id: "7D", 
        text: "Practical, reliable, and hands-on", 
        weightings: { TRADES: 2, BUSINESS: 1, HEALTHCARE: 1 } 
      }
    ]
  },
  {
    id: 8,
    text: "When learning something new, I prefer to:",
    options: [
      { 
        id: "8A", 
        text: "Read manuals, articles, or research papers", 
        weightings: { SCIENCE: 2, EDUCATION: 1, TECH: 1 } 
      },
      { 
        id: "8B", 
        text: "Watch demonstrations or tutorials", 
        weightings: { TRADES: 2, CREATIVE: 1, TECH: 1 } 
      },
      { 
        id: "8C", 
        text: "Discuss and ask questions with experts", 
        weightings: { SOCIAL: 2, BUSINESS: 1, EDUCATION: 1 } 
      },
      { 
        id: "8D", 
        text: "Try it hands-on through trial and error", 
        weightings: { TRADES: 2, TECH: 1, CREATIVE: 1 } 
      }
    ]
  },
  {
    id: 9,
    text: "I value most in a career:",
    options: [
      { 
        id: "9A", 
        text: "Financial security and stability", 
        weightings: { BUSINESS: 2, HEALTHCARE: 1, TRADES: 1 } 
      },
      { 
        id: "9B", 
        text: "Making a positive impact on society", 
        weightings: { SOCIAL: 2, EDUCATION: 2, HEALTHCARE: 2 } 
      },
      { 
        id: "9C", 
        text: "Intellectual challenge and continuous learning", 
        weightings: { SCIENCE: 2, TECH: 2, EDUCATION: 1 } 
      },
      { 
        id: "9D", 
        text: "Creative expression and innovation", 
        weightings: { CREATIVE: 2, TECH: 1, BUSINESS: 1 } 
      }
    ]
  },
  {
    id: 10,
    text: "In a challenging situation, I rely on:",
    options: [
      { 
        id: "10A", 
        text: "Careful analysis and rational thinking", 
        weightings: { SCIENCE: 2, TECH: 2, BUSINESS: 1 } 
      },
      { 
        id: "10B", 
        text: "Intuition and creative problem-solving", 
        weightings: { CREATIVE: 2, SOCIAL: 1 } 
      },
      { 
        id: "10C", 
        text: "Practical skills and past experience", 
        weightings: { TRADES: 2, HEALTHCARE: 1, BUSINESS: 1 } 
      },
      { 
        id: "10D", 
        text: "Collaboration and seeking advice from others", 
        weightings: { SOCIAL: 2, EDUCATION: 1, BUSINESS: 1 } 
      }
    ]
  }
];

// Function to calculate test results based on answers
export const calculateResults = (answers: Record<number, string>): TestResult => {
  // Initialize categories with zero scores
  const categories: Record<string, number> = Object.keys(careerCategories).reduce(
    (acc, category) => ({ ...acc, [category]: 0 }),
    {}
  );
  
  // Calculate weightings for each answer
  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (!question) return;
    
    const option = question.options.find(o => o.id === optionId);
    if (!option) return;
    
    // Add weightings to respective categories
    Object.entries(option.weightings).forEach(([category, weight]) => {
      categories[category] = (categories[category] || 0) + weight;
    });
  });
  
  // Find top 3 categories
  const sortedCategories = Object.entries(categories)
    .sort((a, b) => b[1] - a[1])
    .map(([category]) => category);
  
  const topCategories = sortedCategories.slice(0, 3);
  
  return {
    categories,
    topCategories
  };
};
