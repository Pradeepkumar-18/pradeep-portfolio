export const portfolioData = {
    personal: {
        name: "Pradeep Kumar",
        surname: "S",
        email: "pradeepkumar18003@gmail.com",
        phone: "+91 8300826654",
        role: "Junior Software Developer",
        openToWork: true,
        greeting: "Hi, I'm Pradeep Kumar."
    },

    hero: {
        headline: {
            part1: "JUNIOR SOFTWARE DEVELOPER",
        },
        description:
            "Junior Software Developer at Skillmine Technology with 1 year of experience building scalable full-stack web applications using React, NestJS, and MongoDB. Experienced in developing secure APIs, designing modular system architecture, and integrating AI to build scalable AI-powered enterprise applications and workflow automation platforms.",
        actions: [
            {
                text: "CHECK LINKEDIN",
                primary: true,
                href: "https://linkedin.com/in/pradeep-kumar-046bb722b/"
            }
        ]
    },

    about: {
        title: "About Me",
        description: [
            "I am a Junior Software Developer with 1 year of professional experience at Skillmine Technology.",
            "My expertise lies in AI-powered document processing systems, workflow automation, OCR-based extraction, and compliance validation platforms.",
            "I specialize in React (Vite), NestJS, and MongoDB, with strong problem-solving and analytical skills."
        ],
        interests: [
            "AI Systems",
            "Document Intelligence",
            "OCR & Automation",
            "Backend Development",
            "System Design"
        ],
        stats: [
            { label: "Years Experience", value: "1" },
            { label: "Projects", value: "3" },
            { label: "Tech Stack", value: "12+" }
        ],
        recognitions: [
            {
                title: "BEST NEWCOMER Q4 2026",
                awarder: "Skillmine Technology",
                description: "Recognized for outstanding contribution and exceptional performance during the initial tenure.",
                image: "/assets/award-trophy.png",
                tags: ["BEST NEWCOMER", "EXCELLENCE"]
            },
            {
                title: "INNOVATION AWARD Q3 2025",
                awarder: "Skillmine Technology",
                description: "Recognized for driving innovation through AI-powered solutions and process improvements.",
                image: "/assets/award-trophy.png",
                tags: ["INNOVATION", "AI SOLUTIONS"]
            }
        ]
    },

    experience: [
        {
            company: "Skillmine Technology",
            role: "Junior Software Developer",
            duration: "2025 - Present",
            type: "Full-time",
            location: "Sivakasi",
            description:
                "Underwent intensive training and worked on software development modules. Gained hands-on experience with the company's tech stack and development workflows.",
            projects: [
                {
                    title: "Document Management System (DMS)",
                    role: "Core Developer",
                    description:
                        "An enterprise-grade AI-powered Document Management System that centralizes document storage, retrieval, processing, and automation. Integrated with OCR, NLP, and RAG for intelligent document handling.",
                    tech: ["React Vite", "NestJS", "MongoDB", "Gemini AI", "LangChain", "OCR"],
                    features: [
                        "Intelligent Workflow Automation",
                        "Advanced OCR & Document Comparison",
                        "Schema-Based Field Extraction",
                        "Secure, centralized document storage"
                    ]
                },
                {
                    title: "Union Bank DMS (POC)",
                    role: "POC Developer",
                    description:
                        "AI-powered solution for template-based compliance checking of legal documents. Extracts information from scanned documents to verify compliance against predefined templates.",
                    tech: ["React Vite", "NestJS", "MongoDB", "Cognitive AI"],
                    features: [
                        "Automated Compliance Verification",
                        "Scanned Document Extraction",
                        "Template-Based Analysis"
                    ]
                },
                {
                    title: "DMS Invoice Processing (POC)",
                    role: "POC Developer",
                    description:
                        "Streamlined invoice management POC that automates extraction, parsing, and workflow triggers. Processes PDF invoices into readable JSON and handles approval flows.",
                    tech: ["React Vite", "NestJS", "MongoDB", "OCR"],
                    features: [
                        "Automated Workflow Triggers",
                        "PDF to JSON Parsing",
                        "Approval/Rejection Flow",
                        "Webhook Integration"
                    ]
                }
            ]
        },
        {
            company: "Skillmine Technology",
            role: "Trainee",
            duration: "2024 - 2025 (6 Months)",
            type: "Full-time",
            location: "Sivakasi",
            description:
                "Completed comprehensive training in software development methodologies, learning the core technology stack and participating in initial project modules."
        }
    ],

    skills: [
        {
            category: "Frontend",
            items: ["React (Vite)", "HTML", "CSS", "JavaScript", "Tailwind CSS"]
        },
        {
            category: "Backend",
            items: ["NestJS", "Node.js"]
        },
        {
            category: "Database",
            items: ["MongoDB", "SQL"]
        },
        {
            category: "AI & Automation",
            items: ["Gemini AI", "LangChain", "OCR", "Document Parsing", "Cognitive AI", "Workflow Automation"]
        },
        {
            category: "Programming",
            items: ["Java", "Python"]
        }
    ],

    education: [
        {
            degree: "Bachelor of Engineering (BE) - Electronics and Communication Engineering",
            year: "2020 - 2024",
            institution: "Ramco Institute of Technology (Anna University)",
            score: "79.5%"
        },
        {
            degree: "HSC - Tamil Nadu State Board",
            year: "2019 - 2020",
            score: "68%"
        },
        {
            degree: "SSLC - Tamil Nadu State Board",
            year: "2017 - 2018",
            score: "92%"
        }
    ],

    contact: {
        email: "pradeepkumar18003@gmail.com",
        location: "Sivakasi, Tamil Nadu",
        socials: [
            { label: "LinkedIn", href: "https://linkedin.com/in/pradeep-kumar-046bb722b/" },
            { label: "Email", href: "mailto:pradeepkumar18003@gmail.com" },
            { label: "Phone", href: "tel:+918300826654" }
        ]
    }
};