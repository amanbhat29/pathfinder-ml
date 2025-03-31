
export interface Career {
  id: string;
  title: string;
  description: string;
  category: string;
  skills: string[];
  education: string[];
  outlookScore: number; // 1-10 with 10 being best job outlook
  roadmap: RoadmapStep[];
}

export interface RoadmapStep {
  title: string;
  description: string;
  timeframe: string;
}

export const careers: Career[] = [
  // TECHNOLOGY CAREERS
  {
    id: "software-developer",
    title: "Software Developer",
    description: "Design, develop, and maintain software applications, websites, or mobile apps.",
    category: "TECH",
    skills: ["Programming languages", "Problem solving", "Software design", "Testing", "Debugging"],
    education: ["Bachelor's in Computer Science or related field", "Coding bootcamps", "Online certifications"],
    outlookScore: 9,
    roadmap: [
      {
        title: "Learn programming fundamentals",
        description: "Master a programming language like Python, JavaScript, or Java and understand basic programming concepts.",
        timeframe: "6-12 months"
      },
      {
        title: "Build a portfolio",
        description: "Create personal projects that demonstrate your skills and understanding of software development.",
        timeframe: "3-6 months"
      },
      {
        title: "Gain professional experience",
        description: "Through internships, entry-level positions, or freelance work to apply your skills in real-world settings.",
        timeframe: "1-2 years"
      },
      {
        title: "Specialize",
        description: "Focus on specific technologies, frameworks, or domains like web development, mobile apps, or machine learning.",
        timeframe: "Ongoing"
      }
    ]
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    description: "Analyze and interpret complex data to help organizations make better decisions.",
    category: "TECH",
    skills: ["Statistical analysis", "Machine learning", "Programming", "Data visualization", "Problem solving"],
    education: ["Master's or PhD in Data Science, Statistics, Computer Science", "Specialized certifications"],
    outlookScore: 9,
    roadmap: [
      {
        title: "Develop foundation in mathematics",
        description: "Study statistics, linear algebra, and calculus to understand the mathematical foundations of data science.",
        timeframe: "6-12 months"
      },
      {
        title: "Learn programming for data",
        description: "Become proficient in Python, R, or other languages used in data science, along with relevant libraries.",
        timeframe: "3-6 months"
      },
      {
        title: "Study machine learning",
        description: "Understand core machine learning algorithms and their applications.",
        timeframe: "6-12 months"
      },
      {
        title: "Build real-world projects",
        description: "Work on data science projects that demonstrate your ability to extract insights from data.",
        timeframe: "Ongoing"
      }
    ]
  },
  
  // CREATIVE CAREERS
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    description: "Create visual concepts to communicate ideas that inspire, inform, or captivate consumers.",
    category: "CREATIVE",
    skills: ["Visual design", "Typography", "Color theory", "Design software", "Communication"],
    education: ["Bachelor's in Graphic Design or related field", "Design bootcamps", "Self-taught with portfolio"],
    outlookScore: 7,
    roadmap: [
      {
        title: "Master design fundamentals",
        description: "Learn color theory, typography, composition, and other foundational design concepts.",
        timeframe: "6-12 months"
      },
      {
        title: "Develop software proficiency",
        description: "Become skilled with design tools like Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
        timeframe: "3-6 months"
      },
      {
        title: "Build a portfolio",
        description: "Create diverse design projects that showcase your skills, style, and versatility.",
        timeframe: "6-12 months"
      },
      {
        title: "Gain professional experience",
        description: "Through internships, freelance work, or junior positions to develop real-world skills.",
        timeframe: "1-2 years"
      }
    ]
  },
  
  // BUSINESS CAREERS
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    description: "Plan and oversee marketing campaigns to promote products, services, or brands.",
    category: "BUSINESS",
    skills: ["Strategic planning", "Market research", "Communication", "Leadership", "Analytics"],
    education: ["Bachelor's in Marketing, Business, or Communications", "MBA can be advantageous"],
    outlookScore: 8,
    roadmap: [
      {
        title: "Develop marketing fundamentals",
        description: "Learn the core principles of marketing, including the 4Ps, consumer behavior, and market research.",
        timeframe: "6-12 months"
      },
      {
        title: "Gain practical experience",
        description: "Work in entry-level marketing roles to understand various aspects like social media, content, or email marketing.",
        timeframe: "1-2 years"
      },
      {
        title: "Develop leadership skills",
        description: "Take on projects that require coordinating teams and managing campaigns.",
        timeframe: "2-3 years"
      },
      {
        title: "Advance to management",
        description: "Move into roles with increasing responsibility for marketing strategy and team leadership.",
        timeframe: "3-5 years"
      }
    ]
  },
  
  // SCIENCE CAREERS
  {
    id: "research-scientist",
    title: "Research Scientist",
    description: "Conduct research to expand knowledge in a particular field of science.",
    category: "SCIENCE",
    skills: ["Research methodology", "Data analysis", "Technical writing", "Critical thinking", "Lab techniques"],
    education: ["PhD in relevant scientific field", "Master's may be sufficient for some positions"],
    outlookScore: 7,
    roadmap: [
      {
        title: "Complete advanced education",
        description: "Obtain a bachelor's degree in a scientific field, followed by a master's and often a PhD.",
        timeframe: "8-10 years"
      },
      {
        title: "Develop research skills",
        description: "Through academic research projects, thesis work, and laboratory experience.",
        timeframe: "Throughout education"
      },
      {
        title: "Publish research",
        description: "Contribute to academic journals and present at conferences to establish credibility.",
        timeframe: "Ongoing"
      },
      {
        title: "Secure research positions",
        description: "In academia, government institutions, or private industry research departments.",
        timeframe: "Post-PhD"
      }
    ]
  },
  
  // HEALTHCARE CAREERS
  {
    id: "registered-nurse",
    title: "Registered Nurse",
    description: "Provide and coordinate patient care, educate patients about health conditions, and provide advice and support.",
    category: "HEALTHCARE",
    skills: ["Patient care", "Critical thinking", "Communication", "Empathy", "Medical knowledge"],
    education: ["Bachelor's or Associate's degree in Nursing", "Nursing diploma", "RN licensure"],
    outlookScore: 9,
    roadmap: [
      {
        title: "Complete nursing education",
        description: "Earn an associate's or bachelor's degree in nursing through an accredited program.",
        timeframe: "2-4 years"
      },
      {
        title: "Obtain licensure",
        description: "Pass the NCLEX-RN exam to become a licensed registered nurse.",
        timeframe: "3-6 months after graduation"
      },
      {
        title: "Gain clinical experience",
        description: "Work in a healthcare setting to develop hands-on nursing skills.",
        timeframe: "1-2 years"
      },
      {
        title: "Consider specialization",
        description: "Pursue additional certifications or education in a specialized area of nursing.",
        timeframe: "2+ years"
      }
    ]
  },
  
  // EDUCATION CAREERS
  {
    id: "teacher",
    title: "Teacher",
    description: "Educate students in various subjects and grade levels, preparing them for future academic and professional success.",
    category: "EDUCATION",
    skills: ["Instruction", "Curriculum development", "Classroom management", "Communication", "Patience"],
    education: ["Bachelor's degree in Education or subject area", "Teaching certification"],
    outlookScore: 7,
    roadmap: [
      {
        title: "Complete education requirements",
        description: "Earn a bachelor's degree in education or your subject area.",
        timeframe: "4 years"
      },
      {
        title: "Obtain certification",
        description: "Complete student teaching requirements and pass certification exams for your state.",
        timeframe: "1-2 years"
      },
      {
        title: "Gain teaching experience",
        description: "Start with entry-level teaching positions to develop classroom skills.",
        timeframe: "1-3 years"
      },
      {
        title: "Consider advanced degrees",
        description: "Pursue master's degrees or specialized certifications for career advancement.",
        timeframe: "2+ years"
      }
    ]
  },
  
  // SOCIAL SERVICES CAREERS
  {
    id: "social-worker",
    title: "Social Worker",
    description: "Help people solve and cope with problems in their everyday lives and advocate for vulnerable populations.",
    category: "SOCIAL",
    skills: ["Empathy", "Communication", "Problem solving", "Cultural competence", "Case management"],
    education: ["Bachelor's or Master's in Social Work", "State licensure"],
    outlookScore: 8,
    roadmap: [
      {
        title: "Complete education",
        description: "Earn a bachelor's degree in social work (BSW) or related field, followed by a master's (MSW) for clinical roles.",
        timeframe: "4-6 years"
      },
      {
        title: "Gain supervised experience",
        description: "Complete required supervised practice hours for licensure.",
        timeframe: "2-3 years"
      },
      {
        title: "Obtain licensure",
        description: "Pass the licensing exam required in your state.",
        timeframe: "After supervised experience"
      },
      {
        title: "Specialize",
        description: "Focus on a specific population or setting, such as healthcare, schools, or child welfare.",
        timeframe: "Ongoing"
      }
    ]
  },
  
  // TRADES CAREERS
  {
    id: "electrician",
    title: "Electrician",
    description: "Install, maintain, and repair electrical power, communications, lighting, and control systems.",
    category: "TRADES",
    skills: ["Technical knowledge", "Problem solving", "Manual dexterity", "Safety awareness", "Attention to detail"],
    education: ["Apprenticeship", "Technical school", "State licensure"],
    outlookScore: 8,
    roadmap: [
      {
        title: "Complete basic education",
        description: "High school diploma or equivalent, with courses in mathematics and physics.",
        timeframe: "Prerequisite"
      },
      {
        title: "Apprenticeship program",
        description: "Combine classroom instruction with on-the-job training under the supervision of licensed electricians.",
        timeframe: "4-5 years"
      },
      {
        title: "Obtain licensure",
        description: "Pass the exam to become a licensed electrician in your state.",
        timeframe: "After apprenticeship"
      },
      {
        title: "Consider specialization",
        description: "Focus on residential, commercial, or industrial electrical work.",
        timeframe: "Ongoing"
      }
    ]
  }
];

// Function to get careers by category
export const getCareersByCategory = (category: string): Career[] => {
  return careers.filter(career => career.category === category);
};

// Function to get careers by multiple categories
export const getCareersByCategories = (categories: string[]): Career[] => {
  return careers.filter(career => categories.includes(career.category));
};

// Function to get a specific career by ID
export const getCareerById = (id: string): Career | undefined => {
  return careers.find(career => career.id === id);
};
