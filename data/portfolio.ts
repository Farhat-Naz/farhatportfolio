export const personalInfo = {
  name: "Farhat Naz",
  title: "Computer Systems Engineer | Data Coordinator | Software Developer",
  email: "ffarhatnazz@hotmail.com",
  phone: "+92-314-2062716",
  location: "Karachi, Pakistan",
  bio: "Computer Systems Engineer with 8+ years of professional experience in data coordination and credit analysis.Currently specializing in AI-powered applications, full-stack web development, and cloud-native architectures.Experienced in building intelligent systems using Next.js, FastAPI, and modern AI technologies including Agentic AI, OpenAI SDK, and conversational interfaces.\n\n",


  social: {
    github: "https://github.com/farhatnaz",
    linkedin: "https://linkedin.com/in/farhatnaz",
    twitter: "",
    portfolio: ""
  }
};

export const experience = [
  {
    id: 1,
    company: "Pak-Libya Consumer Bank",
    role: "Data Coordinator of Credit",
    period: "Feb 2004 - May 2012",
    location: "Karachi, Pakistan",
    description: "Managed credit operations and data coordination for consumer banking division, handling comprehensive credit analysis and documentation processes.",
    achievements: [
      "Reviewed and processed credit applications with comprehensive analysis",
      "Prepared proposals for approval and maintained MIS tracking system",
      "Managed audit responses and complete documentation cycle",
      "Handled accounts operations including cheque deposits and clearance records",
      "Coordinated with verification department for applicant criteria verification"
    ],
    technologies: ["SQL Server", "Microsoft Office", "Credit Analysis", "MIS", "Database Management"]
  },
  {
    id: 2,
    company: "NARA (National Aliens Registration Authority)",
    role: "Data Operator",
    period: "Jul 2002 - Jul 2003",
    location: "Karachi, Pakistan",
    description: "Operated and managed data entry systems for national registration database.",
    achievements: [
      "Processed registration data with high accuracy",
      "Maintained database integrity and records",
      "Collaborated with government database systems"
    ],
    technologies: ["Database Systems", "Data Entry", "Microsoft Office"]
  },
  {
    id: 3,
    company: "Global Digital Solution",
    role: "Software Development Intern",
    period: "Jan 2002 - Jul 2002",
    location: "Karachi, Pakistan",
    description: "Completed 6-month internship focused on web development using ASP and SQL Server.",
    achievements: [
      "Developed web applications using ASP",
      "Worked with SQL Server for database management",
      "Gained hands-on experience in full-stack development"
    ],
    technologies: ["ASP", "SQL Server", "HTML", "JavaScript"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Todo App with Chatbot",
    description: "Full-stack todo application with AI chatbot integration, featuring spec-driven development, Kubernetes deployment, and cloud-native architecture. Includes Python console app, FastAPI backend, Next.js frontend, and advanced DevOps setup.",
    image: "/projects/todo-app.jpg",
    technologies: ["Next.js", "FastAPI", "Python", "SQLModel", "Neon DB", "OpenAI ChatKit", "Agents SDK", "MCP SDK", "Docker", "Kubernetes", "Helm", "Kafka", "Dapr", "DigitalOcean"],
    liveUrl: "https://phase-iii-todo-xh4l.vercel.app/en",
    githubUrl: "https://github.com/Farhat-Naz",
    featured: true
  },
  {
    id: 2,
    title: "AI Book Assignment Platform",
    description: "Interactive book platform built with AI technology, featuring PostgreSQL database, Clerk authentication, and AI-powered chatbot using spec-driven development with OpenAI SDK.",
    image: "/projects/book-app.jpg",
    technologies: ["Next.js", "PostgreSQL", "Clerk", "OpenAI SDK", "Spec-Driven Development", "AI Chatbot"],
    liveUrl: "https://book-assignment-kappa.vercel.app/",
    githubUrl: "https://github.com/Farhat-Naz",
    featured: true
  },
  {
    id: 3,
    title: "E-Commerce Web with Sanity CMS",
    description: "Modern e-commerce platform built with Next.js and Sanity CMS for content management, featuring dynamic product catalog and seamless shopping experience.",
    image: "/projects/ecommerce-sanity.jpg",
    technologies: ["Next.js", "Sanity CMS", "React", "TypeScript", "Tailwind CSS"],
    liveUrl: "",
    githubUrl: "https://github.com/Farhat-Naz",
    featured: true
  },
  {
    id: 4,
    title: "E-COM Portal (Legacy)",
    description: "Complete e-commerce website with full functionality including product catalog, shopping cart, and checkout process.",
    image: "/projects/ecommerce.jpg",
    technologies: ["HTML", "ASP", "SQL Server", "JavaScript"],
    liveUrl: "",
    githubUrl: "",
    featured: false
  },
  {
    id: 5,
    title: "Student Record Database",
    description: "Comprehensive database system for managing student records with Java-based interface.",
    image: "/projects/student-db.jpg",
    technologies: ["Java", "Database Design", "SQL"],
    liveUrl: "",
    githubUrl: "",
    featured: false
  }
];

export const skills = {
  "AI & Machine Learning": [
    { name: "Agentic AI", level: 85 },
    { name: "OpenAI SDK", level: 90 },
    { name: "ChatGPT Integration", level: 85 },
    { name: "AI Chatbots", level: 90 },
    { name: "MCP SDK", level: 80 },
    { name: "Agents SDK", level: 85 }
  ],
  "Modern Web Development": [
    { name: "Next.js", level: 90 },
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 85 },
    { name: "FastAPI", level: 85 },
    { name: "Python", level: 85 }
  ],
  "Backend & Databases": [
    { name: "PostgreSQL", level: 90 },
    { name: "SQL Server", level: 90 },
    { name: "SQLModel", level: 85 },
    { name: "Neon DB", level: 80 },
    { name: "Sanity CMS", level: 85 }
  ],
  "DevOps & Cloud": [
    { name: "Docker", level: 85 },
    { name: "Kubernetes", level: 80 },
    { name: "Helm", level: 75 },
    { name: "Kafka", level: 75 },
    { name: "Dapr", level: 75 },
    { name: "DigitalOcean", level: 80 },
    { name: "Vercel", level: 90 }
  ],
  "Authentication & APIs": [
    { name: "Clerk", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "API Integration", level: 90 },
    { name: "OAuth", level: 80 }
  ],
  "Development Practices": [
    { name: "Spec-Driven Development", level: 90 },
    { name: "Agile", level: 85 },
    { name: "Git/GitHub", level: 90 },
    { name: "CI/CD", level: 80 },
    { name: "Testing", level: 80 }
  ],
  "Legacy Technologies": [
    { name: "Java", level: 85 },
    { name: "SQL", level: 90 },
    { name: "ASP", level: 80 },
    { name: "JavaScript", level: 85 }
  ]
};

export const education = [
  {
    id: 1,
    institution: "Usman Institute of Technology",
    degree: "Bachelor of Engineering in Computer System Engineering",
    period: "1997 - 2001",
    location: "Karachi, Pakistan",
    achievements: [
      "CGPA: 3.26/4.0",
      "Major: Computer System Engineering",
      "Specialized in Data Communication and Networking, RDBMS, Logic Design",
      "Studied: Digital Electronics, Operating Systems, Data Processing"
    ]
  },
  {
    id: 2,
    institution: "Board of Intermediate Education Sindh",
    degree: "Intermediate - Pre-Engineering",
    period: "1995 - 1997",
    location: "Sindh, Pakistan",
    achievements: [
      "Score: 58%",
      "Stream: Pre-Engineering"
    ]
  },
  {
    id: 3,
    institution: "Board of Secondary Education Sindh",
    degree: "Matriculation - Science Group",
    period: "Completed 1995",
    location: "Sindh, Pakistan",
    achievements: [
      "Score: 69.05%",
      "Group: Science"
    ]
  }
];
