export interface Project {
  name: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  url: string;
  github?: string;
  screenshots: string[];
  features: string[];
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    technicalImplementation: string;
    challenges: string;
    uiUx: string;
  };
}

export const projects: Project[] = [
  {
    name: "VirtualChoir Studio",
    slug: "virtualchoir",
    description: "A virtual choir platform for managing choir members, rehearsals, and performances.",
    category: "Creative Platform",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    url: "https://virtualchoir-b5uyw61oe-fredricks-projects-f2f0a824.vercel.app",
    screenshots: ["/projects/virtualchoir/homepage.png"],
    features: [
      "Choir member management",
      "Rehearsal scheduling",
      "Performance tracking",
      "Music library",
      "Attendance management"
    ],
    caseStudy: {
      overview: "VirtualChoir Studio is a comprehensive platform for managing virtual choir operations.",
      problem: "Choir directors needed a digital solution to manage members, schedule rehearsals, and track performance progress.",
      solution: "Built a full-featured platform with member management, rehearsal scheduling, and performance analytics.",
      technicalImplementation: "React with TypeScript, Node.js backend, PostgreSQL database, and Tailwind CSS for responsive UI.",
      challenges: "Coordinating virtual rehearsals across different time zones. Implemented scheduling tools and notifications.",
      uiUx: "Clean, intuitive interface designed for choir directors and members to collaborate effectively."
    }
  },
  {
    name: "Club Welfare Management",
    slug: "club-welfare-management",
    description: "A welfare management system for clubs to manage member welfare, events, and resources.",
    category: "Business System",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    url: "https://club-welfare-management-7yr8c4m81-fredricks-projects-f2f0a824.vercel.app",
    screenshots: ["/projects/club-welfare-management/homepage.png"],
    features: [
      "Member welfare tracking",
      "Event management",
      "Resource allocation",
      "Financial reporting",
      "Communication tools"
    ],
    caseStudy: {
      overview: "Club Welfare Management is a comprehensive system for managing club member welfare and operations.",
      problem: "Clubs needed a centralized platform to manage member welfare, events, and resources efficiently.",
      solution: "Developed a full-featured management system with welfare tracking, event planning, and financial reporting.",
      technicalImplementation: "React with TypeScript, Node.js backend, PostgreSQL database, and Tailwind CSS for responsive UI.",
      challenges: "Managing diverse welfare needs across different member groups. Implemented flexible tracking and reporting.",
      uiUx: "Professional, data-dense interface optimized for club administrators to manage operations effectively."
    }
  },
  {
    name: "Egesa Medical Clinic",
    slug: "egesamedicalclinic",
    description: "A comprehensive healthcare management system for patient management, consultations, laboratory, pharmacy, and reporting.",
    category: "Healthcare",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    url: "https://egesamedicalclinic.com",
    screenshots: ["/projects/egesa/homepage.png"],
    features: [
      "Patient registration and management",
      "Appointment scheduling",
      "Medical records management",
      "Laboratory module",
      "Pharmacy management",
      "Reporting and analytics",
      "User authentication and roles"
    ],
    caseStudy: {
      overview: "Egesa Medical Clinic is a full-featured healthcare management system designed to streamline clinic operations from patient registration to reporting.",
      problem: "The clinic needed a digital solution to replace paper-based records and improve efficiency in patient management, inventory, and reporting.",
      solution: "Built a comprehensive web application with modules for patients, appointments, laboratory, pharmacy, and reporting with role-based access control.",
      technicalImplementation: "React frontend with TypeScript, Supabase for authentication and real-time database, PostgreSQL for data storage, and Tailwind CSS for responsive UI.",
      challenges: "Complex data relationships between patients, appointments, and inventory. Implemented efficient database queries and caching strategies.",
      uiUx: "Designed for healthcare professionals with clean, accessible interfaces that work on desktop and tablet devices."
    }
  },
  {
    name: "GRAPTS",
    slug: "grapts",
    description: "A project management and tracking system with dashboards, reporting, and team collaboration features.",
    category: "Business System",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
    url: "https://grapts.vercel.app",
    screenshots: ["/projects/grapts/homepage.png"],
    features: [
      "Project tracking and management",
      "Task assignment and monitoring",
      "Team collaboration",
      "Progress reporting",
      "Dashboard analytics",
      "File sharing"
    ],
    caseStudy: {
      overview: "GRAPTS is a project management platform that helps teams track progress, manage tasks, and generate reports.",
      problem: "Teams needed a centralized platform to manage multiple projects, track task completion, and visualize progress.",
      solution: "Developed a comprehensive project management tool with real-time dashboards, task tracking, and automated reporting.",
      technicalImplementation: "React with TypeScript for the frontend, Node.js API backend, PostgreSQL database, with real-time updates and data visualization.",
      challenges: "Real-time synchronization across multiple users. Implemented WebSocket connections for live updates.",
      uiUx: "Clean, data-dense interfaces optimized for productivity with intuitive navigation and quick actions."
    }
  },
  {
    name: "OmniSocial",
    slug: "omnisocial",
    description: "A social media management platform for content creation, scheduling, analytics, and multi-platform publishing.",
    category: "Platform/SaaS",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Node.js", "AI Integration"],
    url: "https://omnisocial.top",
    screenshots: ["/projects/omnisocial/homepage.png"],
    features: [
      "Content creation and scheduling",
      "Multi-platform publishing",
      "Analytics and reporting",
      "AI content generation",
      "Campaign management",
      "Social account integration",
      "Team collaboration"
    ],
    caseStudy: {
      overview: "OmniSocial is a comprehensive social media management platform that enables businesses to manage their online presence across multiple platforms.",
      problem: "Businesses needed a unified platform to manage content creation, scheduling, and analytics across multiple social media accounts.",
      solution: "Built a full-featured SaaS platform with AI-powered content generation, multi-platform publishing, and detailed analytics.",
      technicalImplementation: "Next.js for SSR and SEO, Supabase for auth and database, Node.js backend services, AI integration for content generation, and OAuth for social platform connections.",
      challenges: "Integrating with multiple social media APIs with different rate limits and authentication flows. Implemented a robust token management system.",
      uiUx: "Modern, intuitive interface with drag-and-drop scheduling, real-time previews, and responsive design for desktop and mobile."
    }
  },
  {
    name: "EagleTech Solutions",
    slug: "eagletechsolutions",
    description: "A technology solutions company website showcasing services, portfolio, and client engagement.",
    category: "Tech Company",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    url: "https://eagletechsolutions.tech",
    screenshots: ["/projects/eagletech/homepage.png"],
    features: [
      "Service showcase",
      "Portfolio display",
      "Contact forms",
      "Client testimonials",
      "Team profiles",
      "Blog integration"
    ],
    caseStudy: {
      overview: "EagleTech Solutions is a technology company website that showcases their IT services, portfolio, and expertise.",
      problem: "The company needed a professional online presence to attract clients and showcase their technical capabilities.",
      solution: "Designed and developed a modern corporate website with service pages, portfolio showcase, and lead generation forms.",
      technicalImplementation: "React with TypeScript, Tailwind CSS for styling, Node.js backend for form handling and email notifications.",
      challenges: "Creating a design that communicates technical expertise while remaining approachable for potential clients.",
      uiUx: "Professional, clean design with clear service presentation, easy navigation, and prominent call-to-action elements."
    }
  },
  {
    name: "Mureke Fumusi Hub",
    slug: "murekefumusihub",
    description: "A music production hub and artist platform for showcasing work, booking services, and connecting with fans.",
    category: "Creative Platform",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    url: "https://murekefumusichub.studio",
    screenshots: ["/projects/mureke/homepage.png"],
    features: [
      "Artist profiles",
      "Music portfolio",
      "Service booking",
      "Media gallery",
      "Event calendar",
      "Contact management"
    ],
    caseStudy: {
      overview: "Mureke Fumusi Hub is a creative platform for music producers and artists to showcase their work and connect with clients.",
      problem: "Music professionals needed a dedicated platform to display their portfolio, manage bookings, and connect with potential clients.",
      solution: "Created a visually rich platform with artist profiles, media galleries, booking system, and event management.",
      technicalImplementation: "React frontend with Node.js backend, MongoDB for flexible media metadata storage, and Tailwind CSS for custom styling.",
      challenges: "Handling large media files efficiently. Implemented optimized image loading and lazy loading strategies.",
      uiUx: "Dark-themed, media-focused design that puts the creative work forward with smooth animations and transitions."
    }
  },
  {
    name: "Magnitude Music School",
    slug: "magnitudemusic",
    description: "An online music education platform with course management, student enrollment, and progress tracking.",
    category: "Education Platform",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Firebase"],
    url: "https://magnitudemusicschool.top",
    screenshots: ["/projects/magnitude/homepage.png"],
    features: [
      "Course catalog",
      "Student enrollment",
      "Progress tracking",
      "Instructor profiles",
      "Payment integration",
      "Certificate generation"
    ],
    caseStudy: {
      overview: "Magnitude Music School is an online education platform offering music courses with structured learning paths.",
      problem: "The music school needed a digital platform to reach more students and manage online courses effectively.",
      solution: "Built a comprehensive e-learning platform with course management, student progress tracking, and payment processing.",
      technicalImplementation: "React with TypeScript, Node.js backend, PostgreSQL for course data, Firebase for real-time features and file storage.",
      challenges: "Creating an engaging learning experience online. Implemented video lessons, progress tracking, and interactive elements.",
      uiUx: "Clean, educational interface with clear course navigation, progress indicators, and mobile-responsive design."
    }
  },
  {
    name: "M-Foundation",
    slug: "mfoundation",
    description: "A non-profit organization platform for donation management, volunteer coordination, and impact reporting.",
    category: "Non-profit",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Payment Integration"],
    url: "https://m-foundation.co.ke",
    screenshots: ["/projects/mfoundation/homepage.png"],
    features: [
      "Donation processing",
      "Program management",
      "Volunteer coordination",
      "Impact reporting",
      "Event management",
      "Donor management"
    ],
    caseStudy: {
      overview: "M-Foundation is a non-profit platform that facilitates donations, volunteer management, and impact reporting.",
      problem: "The foundation needed a digital platform to reach donors, manage volunteers, and communicate their impact.",
      solution: "Developed a comprehensive platform with donation processing, program showcase, volunteer registration, and impact dashboards.",
      technicalImplementation: "React frontend, Node.js backend, MongoDB for flexible data structures, and payment gateway integration.",
      challenges: "Building trust with donors through transparency. Implemented detailed impact reporting and financial transparency features.",
      uiUx: "Warm, trustworthy design with clear impact stories, easy donation flows, and mobile-first responsive layout."
    }
  }
];

export const categories = ["All", "Creative Platform", "Business System", "Healthcare", "Platform/SaaS", "Tech Company", "Education Platform", "Non-profit"];
