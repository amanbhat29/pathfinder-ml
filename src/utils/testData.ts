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
  },
  {
    id: 11,
    text: "Which of these activities would you find most engaging?",
    options: [
      { 
        id: "11A", 
        text: "Developing a computer program or mobile app", 
        weightings: { TECH: 2, SCIENCE: 1 } 
      },
      { 
        id: "11B", 
        text: "Designing a marketing campaign for a product", 
        weightings: { CREATIVE: 2, BUSINESS: 1 } 
      },
      { 
        id: "11C", 
        text: "Organizing a community support group", 
        weightings: { SOCIAL: 2, EDUCATION: 1 } 
      },
      { 
        id: "11D", 
        text: "Building or repairing physical structures", 
        weightings: { TRADES: 2, SCIENCE: 1 } 
      }
    ]
  },
  {
    id: 12,
    text: "How do you prefer to express your ideas?",
    options: [
      { 
        id: "12A", 
        text: "Through written or verbal communication", 
        weightings: { EDUCATION: 2, BUSINESS: 1, SOCIAL: 1 } 
      },
      { 
        id: "12B", 
        text: "Through visual designs or artistic creations", 
        weightings: { CREATIVE: 2, TECH: 1 } 
      },
      { 
        id: "12C", 
        text: "Through data, charts, and analyses", 
        weightings: { SCIENCE: 2, TECH: 1, BUSINESS: 1 } 
      },
      { 
        id: "12D", 
        text: "Through practical demonstrations or models", 
        weightings: { TRADES: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 13,
    text: "What aspect of a job would motivate you the most?",
    options: [
      { 
        id: "13A", 
        text: "Helping others and making a positive impact", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      },
      { 
        id: "13B", 
        text: "Creating innovative solutions to complex problems", 
        weightings: { TECH: 2, SCIENCE: 2, CREATIVE: 1 } 
      },
      { 
        id: "13C", 
        text: "Building a successful business or organization", 
        weightings: { BUSINESS: 2, TRADES: 1 } 
      },
      { 
        id: "13D", 
        text: "Expressing yourself through art or design", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 14,
    text: "How do you approach deadlines and schedules?",
    options: [
      { 
        id: "14A", 
        text: "I plan meticulously and stick to a timeline", 
        weightings: { BUSINESS: 2, SCIENCE: 1, TECH: 1 } 
      },
      { 
        id: "14B", 
        text: "I adapt and adjust as needed while working", 
        weightings: { CREATIVE: 2, SOCIAL: 1, TRADES: 1 } 
      },
      { 
        id: "14C", 
        text: "I focus intensely as the deadline approaches", 
        weightings: { TECH: 1, HEALTHCARE: 1, EDUCATION: 1 } 
      },
      { 
        id: "14D", 
        text: "I prefer flexible deadlines with room for thoroughness", 
        weightings: { SCIENCE: 2, CREATIVE: 1, SOCIAL: 1 } 
      }
    ]
  },
  {
    id: 15,
    text: "What type of information are you most comfortable working with?",
    options: [
      { 
        id: "15A", 
        text: "Mathematical and logical data", 
        weightings: { SCIENCE: 2, TECH: 2, BUSINESS: 1 } 
      },
      { 
        id: "15B", 
        text: "Emotional and interpersonal dynamics", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      },
      { 
        id: "15C", 
        text: "Visual and spatial concepts", 
        weightings: { CREATIVE: 2, TRADES: 1, TECH: 1 } 
      },
      { 
        id: "15D", 
        text: "Practical and concrete facts", 
        weightings: { TRADES: 2, HEALTHCARE: 1, BUSINESS: 1 } 
      }
    ]
  },
  {
    id: 16,
    text: "How do you make important decisions?",
    options: [
      { 
        id: "16A", 
        text: "Based on careful analysis of facts and data", 
        weightings: { SCIENCE: 2, TECH: 1, BUSINESS: 1 } 
      },
      { 
        id: "16B", 
        text: "Based on how they will affect people involved", 
        weightings: { SOCIAL: 2, EDUCATION: 2, HEALTHCARE: 1 } 
      },
      { 
        id: "16C", 
        text: "Based on practical considerations and experience", 
        weightings: { TRADES: 2, BUSINESS: 1, HEALTHCARE: 1 } 
      },
      { 
        id: "16D", 
        text: "Based on innovative and creative possibilities", 
        weightings: { CREATIVE: 2, TECH: 1, SCIENCE: 1 } 
      }
    ]
  },
  {
    id: 17,
    text: "What would your ideal work environment look like?",
    options: [
      { 
        id: "17A", 
        text: "A high-tech office with the latest equipment", 
        weightings: { TECH: 2, BUSINESS: 1, SCIENCE: 1 } 
      },
      { 
        id: "17B", 
        text: "A creative studio or flexible workspace", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "17C", 
        text: "A community-focused setting with diverse people", 
        weightings: { SOCIAL: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      },
      { 
        id: "17D", 
        text: "A workshop, outdoors, or hands-on setting", 
        weightings: { TRADES: 2, SCIENCE: 1 } 
      }
    ]
  },
  {
    id: 18,
    text: "What kind of tasks do you prefer to avoid if possible?",
    options: [
      { 
        id: "18A", 
        text: "Detailed administrative or clerical work", 
        weightings: { CREATIVE: 2, TRADES: 1, SCIENCE: 1 } 
      },
      { 
        id: "18B", 
        text: "Tasks requiring physical labor or manual dexterity", 
        weightings: { TECH: 2, BUSINESS: 1, SOCIAL: 1 } 
      },
      { 
        id: "18C", 
        text: "Extended social interaction or public speaking", 
        weightings: { SCIENCE: 2, TECH: 1, TRADES: 1 } 
      },
      { 
        id: "18D", 
        text: "Highly technical or mathematical tasks", 
        weightings: { CREATIVE: 2, SOCIAL: 1, HEALTHCARE: 1 } 
      }
    ]
  },
  {
    id: 19,
    text: "How do you like to receive recognition for your work?",
    options: [
      { 
        id: "19A", 
        text: "Financial rewards and promotions", 
        weightings: { BUSINESS: 2, TECH: 1, TRADES: 1 } 
      },
      { 
        id: "19B", 
        text: "Seeing the positive impact on others", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      },
      { 
        id: "19C", 
        text: "Respect and acknowledgment from experts in your field", 
        weightings: { SCIENCE: 2, CREATIVE: 1, TECH: 1 } 
      },
      { 
        id: "19D", 
        text: "The satisfaction of creating something tangible", 
        weightings: { TRADES: 2, CREATIVE: 2 } 
      }
    ]
  },
  {
    id: 20,
    text: "Which school subject did you enjoy the most?",
    options: [
      { 
        id: "20A", 
        text: "Mathematics or Computer Science", 
        weightings: { TECH: 2, SCIENCE: 1, BUSINESS: 1 } 
      },
      { 
        id: "20B", 
        text: "Art, Music, or Literature", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "20C", 
        text: "Psychology, History, or Social Studies", 
        weightings: { SOCIAL: 2, EDUCATION: 1, BUSINESS: 1 } 
      },
      { 
        id: "20D", 
        text: "Biology, Chemistry, or Physics", 
        weightings: { SCIENCE: 2, HEALTHCARE: 1, TECH: 1 } 
      }
    ]
  },
  {
    id: 21,
    text: "How do you feel about taking risks in your career?",
    options: [
      { 
        id: "21A", 
        text: "I'm very comfortable with risk if it has high potential rewards", 
        weightings: { BUSINESS: 2, CREATIVE: 1, TECH: 1 } 
      },
      { 
        id: "21B", 
        text: "I prefer calculated risks based on thorough research", 
        weightings: { SCIENCE: 2, TECH: 1, BUSINESS: 1 } 
      },
      { 
        id: "21C", 
        text: "I prefer stability and security in my career path", 
        weightings: { HEALTHCARE: 2, EDUCATION: 1, TRADES: 1 } 
      },
      { 
        id: "21D", 
        text: "I take risks when they allow me to help others or express myself", 
        weightings: { SOCIAL: 2, CREATIVE: 1 } 
      }
    ]
  },
  {
    id: 22,
    text: "What role do you naturally take in a group project?",
    options: [
      { 
        id: "22A", 
        text: "The leader who organizes and delegates", 
        weightings: { BUSINESS: 2, EDUCATION: 1, SOCIAL: 1 } 
      },
      { 
        id: "22B", 
        text: "The creative who generates ideas and solutions", 
        weightings: { CREATIVE: 2, TECH: 1, SCIENCE: 1 } 
      },
      { 
        id: "22C", 
        text: "The analyst who researches and provides data", 
        weightings: { SCIENCE: 2, TECH: 1, BUSINESS: 1 } 
      },
      { 
        id: "22D", 
        text: "The implementer who gets things done practically", 
        weightings: { TRADES: 2, HEALTHCARE: 1, TECH: 1 } 
      }
    ]
  },
  {
    id: 23,
    text: "How important is work-life balance to you?",
    options: [
      { 
        id: "23A", 
        text: "Very important - I want predictable hours and separation", 
        weightings: { EDUCATION: 2, TRADES: 1, SOCIAL: 1 } 
      },
      { 
        id: "23B", 
        text: "I'm willing to work long hours for something I'm passionate about", 
        weightings: { CREATIVE: 2, TECH: 1, SCIENCE: 1 } 
      },
      { 
        id: "23C", 
        text: "I value flexibility more than strict separation", 
        weightings: { BUSINESS: 2, HEALTHCARE: 1, TECH: 1 } 
      },
      { 
        id: "23D", 
        text: "I prefer work that integrates with my personal values", 
        weightings: { SOCIAL: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 24,
    text: "Which of these would you find most satisfying to create?",
    options: [
      { 
        id: "24A", 
        text: "A successful business or organization", 
        weightings: { BUSINESS: 2, TECH: 1 } 
      },
      { 
        id: "24B", 
        text: "A scientific discovery or technical innovation", 
        weightings: { SCIENCE: 2, TECH: 2 } 
      },
      { 
        id: "24C", 
        text: "A piece of art, music, or writing", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "24D", 
        text: "A program that helps people improve their lives", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 25,
    text: "How do you feel about continuous learning?",
    options: [
      { 
        id: "25A", 
        text: "I love learning new technical skills and staying current", 
        weightings: { TECH: 2, SCIENCE: 1, HEALTHCARE: 1 } 
      },
      { 
        id: "25B", 
        text: "I enjoy learning about people and human behavior", 
        weightings: { SOCIAL: 2, EDUCATION: 1, HEALTHCARE: 1 } 
      },
      { 
        id: "25C", 
        text: "I prefer mastering practical skills through experience", 
        weightings: { TRADES: 2, CREATIVE: 1, BUSINESS: 1 } 
      },
      { 
        id: "25D", 
        text: "I'm drawn to theoretical and conceptual learning", 
        weightings: { SCIENCE: 2, EDUCATION: 1, CREATIVE: 1 } 
      }
    ]
  },
  {
    id: 26,
    text: "What types of problems do you most enjoy solving?",
    options: [
      { 
        id: "26A", 
        text: "Technical or mathematical problems", 
        weightings: { TECH: 2, SCIENCE: 2, TRADES: 1 } 
      },
      { 
        id: "26B", 
        text: "People-oriented or social problems", 
        weightings: { SOCIAL: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      },
      { 
        id: "26C", 
        text: "Business or organizational challenges", 
        weightings: { BUSINESS: 2, TECH: 1 } 
      },
      { 
        id: "26D", 
        text: "Creative or design challenges", 
        weightings: { CREATIVE: 2, TECH: 1, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 27,
    text: "How important is it for you to see the tangible results of your work?",
    options: [
      { 
        id: "27A", 
        text: "Very important - I need to see concrete outcomes", 
        weightings: { TRADES: 2, CREATIVE: 1, HEALTHCARE: 1 } 
      },
      { 
        id: "27B", 
        text: "I'm comfortable with long-term or theoretical results", 
        weightings: { SCIENCE: 2, EDUCATION: 1, TECH: 1 } 
      },
      { 
        id: "27C", 
        text: "I value measurable metrics and data-driven results", 
        weightings: { BUSINESS: 2, TECH: 1, SCIENCE: 1 } 
      },
      { 
        id: "27D", 
        text: "I care most about positive impact on people's lives", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 28,
    text: "What aspect of a project do you typically focus on?",
    options: [
      { 
        id: "28A", 
        text: "The overall vision and purpose", 
        weightings: { BUSINESS: 2, CREATIVE: 1, SOCIAL: 1 } 
      },
      { 
        id: "28B", 
        text: "The technical details and functionality", 
        weightings: { TECH: 2, SCIENCE: 1, TRADES: 1 } 
      },
      { 
        id: "28C", 
        text: "The aesthetic and experiential aspects", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
      },
      { 
        id: "28D", 
        text: "The human impact and practical applications", 
        weightings: { SOCIAL: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      }
    ]
  },
  {
    id: 29,
    text: "How do you prefer to communicate complex ideas?",
    options: [
      { 
        id: "29A", 
        text: "Through detailed written explanations", 
        weightings: { SCIENCE: 2, BUSINESS: 1, EDUCATION: 1 } 
      },
      { 
        id: "29B", 
        text: "Through visual representations or demonstrations", 
        weightings: { CREATIVE: 2, TECH: 1, TRADES: 1 } 
      },
      { 
        id: "29C", 
        text: "Through one-on-one conversations or discussions", 
        weightings: { SOCIAL: 2, HEALTHCARE: 1, EDUCATION: 1 } 
      },
      { 
        id: "29D", 
        text: "Through concrete examples and case studies", 
        weightings: { BUSINESS: 2, TRADES: 1, HEALTHCARE: 1 } 
      }
    ]
  },
  {
    id: 30,
    text: "What would you most like to be remembered for in your career?",
    options: [
      { 
        id: "30A", 
        text: "Innovation and technical advancement", 
        weightings: { TECH: 2, SCIENCE: 2, CREATIVE: 1 } 
      },
      { 
        id: "30B", 
        text: "Helping and supporting others", 
        weightings: { SOCIAL: 2, HEALTHCARE: 2, EDUCATION: 2 } 
      },
      { 
        id: "30C", 
        text: "Building something successful and lasting", 
        weightings: { BUSINESS: 2, TRADES: 1 } 
      },
      { 
        id: "30D", 
        text: "Creative expression and artistic contribution", 
        weightings: { CREATIVE: 2, EDUCATION: 1 } 
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
