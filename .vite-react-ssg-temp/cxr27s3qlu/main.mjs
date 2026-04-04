import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { ViteReactSSG } from "vite-react-ssg";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUpRight, X, LayoutDashboard, User, FolderKanban, Briefcase, Wrench, GraduationCap, Mail, BarChart3, Command, Search, Clock, Moon, Sun, Github, ExternalLink, ArrowRight, Sparkles, Calendar, MapPin, Zap, Code2, Layout as Layout$1, CheckCircle2, Send, Cpu, Database, Globe } from "lucide-react";
const portfolioData = {
  personal: {
    name: "Pradeep Kumar",
    surname: "S"
  },
  hero: {
    description: "Junior Software Developer at Skillmine Technology with 1 year of experience building scalable full-stack web applications using React, NestJS, and MongoDB. Experienced in developing secure APIs, designing modular system architecture, and integrating AI to build scalable AI-powered enterprise applications and workflow automation platforms.",
    actions: [
      {
        text: "CHECK LINKEDIN",
        primary: true,
        href: "https://linkedin.com/in/pradeep-kumar-046bb722b/"
      }
    ]
  },
  about: {
    description: [
      "I am a Junior Software Developer with 1 year of professional experience at Skillmine Technology.",
      "My expertise lies in AI-powered document processing systems, workflow automation, OCR-based extraction, and compliance validation platforms.",
      "I specialize in React (Vite), NestJS, and MongoDB, with strong problem-solving and analytical skills."
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
      description: "Underwent intensive training and worked on software development modules. Gained hands-on experience with the company's tech stack and development workflows.",
      projects: [
        {
          title: "Document Management System (DMS)",
          role: "Core Developer",
          description: "An enterprise-grade AI-powered Document Management System that centralizes document storage, retrieval, processing, and automation. Integrated with OCR, NLP, and RAG for intelligent document handling.",
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
          description: "AI-powered solution for template-based compliance checking of legal documents. Extracts information from scanned documents to verify compliance against predefined templates.",
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
          description: "Streamlined invoice management POC that automates extraction, parsing, and workflow triggers. Processes PDF invoices into readable JSON and handles approval flows.",
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
      description: "Completed comprehensive training in software development methodologies, learning the core technology stack and participating in initial project modules."
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
    location: "Sivakasi, Tamil Nadu"
  }
};
const NavItem = ({ id, icon, label, active, onClick }) => /* @__PURE__ */ jsxs(
  "button",
  {
    onClick: () => onClick(id),
    className: `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm group ${active ? "bg-input-bg text-text-primary shadow-sm" : "text-text-secondary hover:text-text-primary hover:bg-input-bg/50"}`,
    children: [
      /* @__PURE__ */ jsx("span", { className: `${active ? "text-primary" : "text-text-muted group-hover:text-text-primary"}`, children: icon }),
      label
    ]
  }
);
const Sidebar = ({ activeTab, setActiveTab, isOpen, onClose }) => {
  const navItems = [
    { href: "#intro", icon: /* @__PURE__ */ jsx(LayoutDashboard, { size: 18 }), label: "Introduction", id: "intro" },
    { href: "#about", icon: /* @__PURE__ */ jsx(User, { size: 18 }), label: "About Me", id: "about" },
    { href: "#projects", icon: /* @__PURE__ */ jsx(FolderKanban, { size: 18 }), label: "Projects", id: "projects" },
    { href: "#experience", icon: /* @__PURE__ */ jsx(Briefcase, { size: 18 }), label: "Experience", id: "experience" },
    { href: "#skills", icon: /* @__PURE__ */ jsx(Wrench, { size: 18 }), label: "Skills & Tools", id: "skills" },
    { href: "#education", icon: /* @__PURE__ */ jsx(GraduationCap, { size: 18 }), label: "Education", id: "education" },
    { href: "#contact", icon: /* @__PURE__ */ jsx(Mail, { size: 18 }), label: "Contact", id: "contact" },
    { href: "#stats", icon: /* @__PURE__ */ jsx(BarChart3, { size: 18 }), label: "Stats", id: "stats" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: onClose,
        className: "fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
      }
    ) }),
    /* @__PURE__ */ jsxs("aside", { className: `fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar border-r border-border p-6 flex flex-col gap-8 z-50 overflow-y-auto transition-transform duration-300 md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3 px-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: "size-8 bg-input-bg border border-border rounded flex items-center justify-center text-text-primary", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 18 }) }),
          /* @__PURE__ */ jsxs("span", { className: "font-bold text-lg text-text-primary tracking-tight leading-none uppercase", children: [
            portfolioData.personal.name.toLowerCase().split(" ")[0],
            ".dev"
          ] })
        ] }),
        /* @__PURE__ */ jsx("button", { onClick: onClose, className: "p-2 -mr-2 text-text-muted hover:text-text-primary md:hidden", "aria-label": "Close menu", children: /* @__PURE__ */ jsx(X, { size: 20 }) })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "flex flex-col gap-1", children: [
        /* @__PURE__ */ jsx("div", { className: "px-4 mb-4 mt-2", children: /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black tracking-[0.2em] text-text-muted uppercase", children: "Sections" }) }),
        navItems.map((item) => /* @__PURE__ */ jsx(
          NavItem,
          {
            id: item.id,
            icon: item.icon,
            label: item.label,
            active: activeTab === item.id,
            onClick: setActiveTab
          },
          item.id
        ))
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-auto px-4 py-6 border-t border-border", children: /* @__PURE__ */ jsxs("p", { className: "text-[10px] text-text-muted leading-relaxed font-medium", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        portfolioData.personal.name,
        " ",
        portfolioData.personal.surname,
        ". Designed for elite performance."
      ] }) })
    ] })
  ] });
};
const Topbar = ({ theme, toggleTheme, onMenuClick }) => {
  const [time, setTime] = useState(/* @__PURE__ */ new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(timer);
  }, []);
  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  return /* @__PURE__ */ jsxs("header", { className: "h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between transition-colors duration-300", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onMenuClick,
          className: "p-2 rounded-lg hover:bg-input-bg transition-colors md:hidden text-text-muted hover:text-text-primary",
          "aria-label": "Open menu",
          children: /* @__PURE__ */ jsx(Command, { size: 20 })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative group max-w-md w-full hidden sm:block", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-text-primary transition-colors", size: 16 }),
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            placeholder: "Search sections...",
            className: "w-full bg-input-bg border border-border rounded-lg py-2 pl-10 pr-12 text-sm text-text-secondary focus:outline-none focus:border-primary/50 transition-all"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 bg-background border border-border rounded text-[10px] text-text-muted font-mono", children: [
          /* @__PURE__ */ jsx(Command, { size: 10 }),
          " K"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 md:gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden sm:flex items-center gap-3 bg-input-bg border border-border rounded-full px-4 py-1.5 shadow-sm group", children: [
        /* @__PURE__ */ jsx("div", { className: "size-2 rounded-full bg-green-500 animate-pulse" }),
        /* @__PURE__ */ jsx(Clock, { size: 14, className: "text-text-muted" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-mono text-text-primary tracking-wider", children: formattedTime })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 md:gap-4 text-text-muted", children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: toggleTheme,
            className: "p-2 rounded-lg hover:bg-input-bg transition-colors",
            "aria-label": "Toggle theme",
            children: theme === "light" ? /* @__PURE__ */ jsx(Moon, { size: 18, className: "hover:text-text-primary cursor-pointer transition-colors" }) : /* @__PURE__ */ jsx(Sun, { size: 18, className: "hover:text-text-primary cursor-pointer transition-colors" })
          }
        ),
        /* @__PURE__ */ jsx(Github, { size: 18, className: "hover:text-text-primary cursor-pointer transition-colors" })
      ] })
    ] })
  ] });
};
const Layout = ({ children, activeTab, setActiveTab, theme, toggleTheme }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 1e-3
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background flex transition-colors duration-300", children: [
    /* @__PURE__ */ jsx(
      Sidebar,
      {
        activeTab,
        setActiveTab: (tab) => {
          setActiveTab(tab);
          setIsSidebarOpen(false);
        },
        isOpen: isSidebarOpen,
        onClose: () => setIsSidebarOpen(false)
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 flex flex-col min-h-screen relative md:pl-[260px]", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] md:left-[260px]",
          style: { scaleX }
        }
      ),
      /* @__PURE__ */ jsx(Topbar, { theme, toggleTheme, onMenuClick: () => setIsSidebarOpen(!isSidebarOpen) }),
      /* @__PURE__ */ jsx("main", { className: "flex-1 relative", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto px-6 md:px-2", children }) })
    ] })
  ] });
};
const Hero = ({ setActiveTab }) => {
  const [isZooming, setIsZooming] = useState(false);
  const handleTransition = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      setActiveTab?.("about");
    }, 800);
  };
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 50 && !isZooming) {
        handleTransition();
      }
    };
    const handleTouch = () => {
      let startY = 0;
      const touchStart = (e) => {
        startY = e.touches[0].clientY;
      };
      const touchMove = (e) => {
        const deltaY = startY - e.touches[0].clientY;
        if (deltaY > 50 && !isZooming) {
          handleTransition();
        }
      };
      window.addEventListener("touchstart", touchStart);
      window.addEventListener("touchmove", touchMove);
      return () => {
        window.removeEventListener("touchstart", touchStart);
        window.removeEventListener("touchmove", touchMove);
      };
    };
    window.addEventListener("wheel", handleScroll);
    const cleanupTouch = handleTouch();
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (typeof cleanupTouch === "function") cleanupTouch();
    };
  }, [setActiveTab, isZooming]);
  return /* @__PURE__ */ jsxs("section", { id: "intro", className: "dashboard-section relative overflow-hidden pt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10 h-full w-full pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" }),
      /* @__PURE__ */ jsx("div", { className: "glow-mesh opacity-30 h-full w-full" })
    ] }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "flex flex-col items-center justify-center text-center gap-8 max-w-5xl px-6",
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                className: "text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter leading-[0.85] flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3 md:gap-x-4 group cursor-default",
                initial: { opacity: 0, scale: 0.95 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.2, type: "spring", stiffness: 100 },
                children: [
                  /* @__PURE__ */ jsx("span", { className: "transition-transform duration-500 group-hover:translate-x-1 whitespace-nowrap", children: portfolioData.personal.name }),
                  /* @__PURE__ */ jsx("span", { className: "text-primary italic opacity-90 transition-all duration-500 group-hover:scale-110 whitespace-nowrap", children: portfolioData.personal.surname })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h2,
              {
                className: "text-xl sm:text-2xl md:text-4xl font-black text-text-primary tracking-tight mt-6",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.4 },
                children: [
                  "Coder by day,",
                  " ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "problem-solver " }),
                  "  ",
                  "by night!"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                className: "text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mt-4 opacity-80",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.5 },
                children: portfolioData.hero.description
              }
            )
          ] }),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.6 },
              children: [
                /* @__PURE__ */ jsxs("a", { href: portfolioData.hero.actions[0].href, target: "_blank", rel: "noopener noreferrer", className: "btn-dashboard-primary w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-6 text-base md:text-lg shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all", children: [
                  "Get Resume",
                  /* @__PURE__ */ jsx(ExternalLink, { size: 20 })
                ] }),
                /* @__PURE__ */ jsxs("a", { href: `mailto:${portfolioData.contact.email}`, className: "btn-dashboard-secondary w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-6 text-base md:text-lg", children: [
                  /* @__PURE__ */ jsx(Mail, { size: 20, strokeWidth: 2.5 }),
                  "Send Mail"
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              onClick: handleTransition,
              className: "flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-12 group relative",
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              children: [
                /* @__PURE__ */ jsx(AnimatePresence, { children: isZooming && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-background z-[100] rounded-full pointer-events-none",
                    initial: { scale: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" },
                    animate: { scale: 15 },
                    transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] },
                    style: { transformOrigin: "center center" }
                  }
                ) }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10", children: [
                  "Initialize sequence",
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500" })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "size-12 rounded-full border border-primary/50 bg-input-bg flex items-center justify-center group-hover:border-primary group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 relative z-10",
                    animate: { y: [0, 10, 0] },
                    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    children: /* @__PURE__ */ jsx(ArrowRight, { size: 24, className: "rotate-90 text-primary group-hover:scale-110 transition-transform duration-300" })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
const About = ({ setActiveTab }) => {
  const [isZooming, setIsZooming] = useState(false);
  const handleTransition = () => {
    if (isZooming) return;
    setIsZooming(true);
    setTimeout(() => {
      setActiveTab?.("projects");
    }, 800);
  };
  useEffect(() => {
    const handleScroll = (e) => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
      if (e.deltaY > 50 && !isZooming && isAtBottom) {
        handleTransition();
      }
    };
    const handleTouch = () => {
      let startY = 0;
      const touchStart = (e) => {
        startY = e.touches[0].clientY;
      };
      const touchMove = (e) => {
        const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
        const deltaY = startY - e.touches[0].clientY;
        if (deltaY > 50 && !isZooming && isAtBottom) {
          handleTransition();
        }
      };
      window.addEventListener("touchstart", touchStart);
      window.addEventListener("touchmove", touchMove);
      return () => {
        window.removeEventListener("touchstart", touchStart);
        window.removeEventListener("touchmove", touchMove);
      };
    };
    window.addEventListener("wheel", handleScroll);
    const cleanupTouch = handleTouch();
    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (typeof cleanupTouch === "function") cleanupTouch();
    };
  }, [setActiveTab, isZooming]);
  return /* @__PURE__ */ jsxs("section", { className: "dashboard-section relative overflow-hidden min-h-screen items-center text-center pb-10", id: "about", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 h-full w-full pointer-events-none", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20" }) }),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "max-w-5xl space-y-16 flex flex-col items-center justify-center px-6",
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs(
              motion.h2,
              {
                className: "text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tighter",
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { delay: 0.3 },
                children: [
                  "About ",
                  /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Me" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                className: "text-text-secondary leading-relaxed text-base md:text-xl max-w-3xl mx-auto opacity-80",
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { delay: 0.4 },
                children: /* @__PURE__ */ jsx("p", { dangerouslySetInnerHTML: {
                  __html: portfolioData.about.description.join(" ").replace(/AI-powered document processing/g, '<span class="text-text-primary font-bold">AI-powered document processing</span>')
                } })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto", children: portfolioData.about.stats?.map((stat, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "glass-card p-8 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-all bg-background/40 backdrop-blur-xl",
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: 0.5 + index * 0.1 },
              children: [
                /* @__PURE__ */ jsx("div", { className: `text-4xl sm:text-5xl font-black mb-2 tracking-tighter transition-colors ${stat.label === "Tech Stack" ? "text-primary group-hover:text-text-primary" : "text-text-primary group-hover:text-primary"}`, children: stat.value }),
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-text-muted", children: stat.label })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto", children: portfolioData.about.recognitions?.map((award, index) => /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "glass-card p-6 sm:p-8 flex flex-col gap-6 group hover:border-primary/30 transition-all bg-background/40 backdrop-blur-xl overflow-hidden relative",
              initial: { opacity: 0, y: 30 },
              whileInView: { opacity: 1, y: 0 },
              transition: { delay: 0.6 + index * 0.2 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 flex-1", children: [
                    /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20", children: [
                      /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
                      /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-primary uppercase tracking-widest", children: "Recognition" })
                    ] }),
                    /* @__PURE__ */ jsx("h4", { className: "text-2xl sm:text-3xl font-black text-text-primary tracking-tighter leading-tight", children: award.title.split(" ").map((word, i) => word.match(/Q[1-4]|202\d|INNOVATION/) ? /* @__PURE__ */ jsxs("span", { className: "text-primary italic ml-1", children: [
                      word,
                      " "
                    ] }, i) : word + " ") })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "size-16 sm:size-20 shrink-0 rounded-2xl bg-input-bg/50 border border-border flex items-center justify-center p-3 relative group-hover:border-primary/20 transition-all", children: /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: award.image,
                      alt: `${award.title} awarded by ${award.awarder}`,
                      className: "w-full h-full object-contain relative z-10 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500",
                      onError: (e) => {
                        e.target.src = "https://cdn-icons-png.flaticon.com/512/3112/3112946.png";
                      }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-text-secondary text-sm sm:text-base leading-relaxed", children: [
                  "Awarded by ",
                  /* @__PURE__ */ jsx("span", { className: "text-text-primary font-bold", children: award.awarder }),
                  ". ",
                  award.description
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 pt-2", children: award.tags.map((tag, i) => /* @__PURE__ */ jsx("span", { className: `px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all ${i === 0 ? "bg-text-primary text-background border-text-primary" : "bg-primary/5 text-primary border-primary/10 hover:bg-primary/10"}`, children: tag }, i)) })
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsxs(
            motion.button,
            {
              onClick: handleTransition,
              className: "flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-4 group relative",
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { delay: 0.5 },
              children: [
                /* @__PURE__ */ jsx(AnimatePresence, { children: isZooming && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "absolute inset-0 bg-background z-[100] rounded-full pointer-events-none",
                    initial: { scale: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" },
                    animate: { scale: 15 },
                    transition: { duration: 1.2, ease: [0.7, 0, 0.3, 1] },
                    style: { transformOrigin: "center center" }
                  }
                ) }),
                /* @__PURE__ */ jsxs("span", { className: "relative z-10", children: [
                  "Continue sequence",
                  /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500" })
                ] }),
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    className: "size-12 rounded-full border border-primary/50 bg-input-bg flex items-center justify-center group-hover:border-primary group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 relative z-10",
                    animate: { y: [0, 10, 0] },
                    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                    children: /* @__PURE__ */ jsx(ArrowRight, { size: 24, className: "rotate-90 text-primary group-hover:scale-110 transition-transform duration-300" })
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
};
const Experience = ({ activeTab = "experience" }) => {
  const isProjectsTab = activeTab === "projects";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  return /* @__PURE__ */ jsxs("section", { className: "dashboard-section w-full max-w-7xl mx-auto px-6 py-20", id: isProjectsTab ? "projects" : "experience", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center mb-24 space-y-4", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.9 },
          whileInView: { opacity: 1, scale: 1 },
          className: "flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]",
          children: [
            /* @__PURE__ */ jsx(Sparkles, { size: 12 }),
            isProjectsTab ? "Portfolio Showcase" : "Career Trajectory"
          ]
        }
      ),
      /* @__PURE__ */ jsx("h2", { className: "text-5xl md:text-7xl font-black text-text-primary tracking-tighter text-center", children: isProjectsTab ? "Digital Products." : "Experience." }),
      /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-lg md:text-xl max-w-2xl text-center leading-relaxed", children: isProjectsTab ? "A curated selection of systems built with precision and intent." : "Documentation of professional growth and technical mastery." })
    ] }),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "space-y-32",
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: portfolioData.experience.map((exp, expIdx) => {
          if (isProjectsTab && (!exp.projects || exp.projects.length === 0)) return null;
          return /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/50 pb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-black text-text-primary tracking-tight", children: exp.company }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 text-text-muted text-sm font-medium", children: [
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Briefcase, { size: 14 }),
                    " ",
                    exp.role
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Calendar, { size: 14 }),
                    " ",
                    exp.duration
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(MapPin, { size: 14 }),
                    " ",
                    exp.location
                  ] })
                ] })
              ] }),
              !isProjectsTab && exp.description && /* @__PURE__ */ jsxs("p", { className: "max-w-md text-text-secondary text-base leading-relaxed italic md:text-right", children: [
                '"',
                exp.description,
                '"'
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]", children: exp.projects?.map((project, pIdx) => {
              const isLarge = pIdx === 0;
              const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
              return /* @__PURE__ */ jsx(
                motion.div,
                {
                  variants: cardVariants,
                  className: `${colSpan} bento-card bento-card-gradient group`,
                  children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col h-full space-y-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                      /* @__PURE__ */ jsx("div", { className: "size-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-border/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500", children: pIdx % 3 === 0 ? /* @__PURE__ */ jsx(Zap, { size: 24 }) : pIdx % 3 === 1 ? /* @__PURE__ */ jsx(Code2, { size: 24 }) : /* @__PURE__ */ jsx(Layout$1, { size: 24 }) }),
                      /* @__PURE__ */ jsx("a", { href: "#", className: "p-2 rounded-full border border-border/50 text-text-muted hover:text-primary hover:border-primary/30 transition-all", children: /* @__PURE__ */ jsx(ArrowUpRight, { size: 20 }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-primary uppercase tracking-[0.2em]", children: project.role }),
                      /* @__PURE__ */ jsx("h4", { className: "text-2xl font-black text-text-primary tracking-tight group-hover:text-primary transition-colors", children: project.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-sm leading-relaxed line-clamp-3", children: project.description })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-6 pt-6 border-t border-border/30", children: [
                      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: project.tech.map((t, tIdx) => /* @__PURE__ */ jsx("span", { className: "px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider", children: t }, tIdx)) }),
                      isLarge && /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: project.features.map((feature, fIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-text-muted font-medium", children: [
                        /* @__PURE__ */ jsx("div", { className: "size-1 rounded-full bg-primary/40" }),
                        feature
                      ] }, fIdx)) })
                    ] })
                  ] })
                },
                pIdx
              );
            }) })
          ] }, expIdx);
        })
      }
    )
  ] });
};
const Skills = () => {
  return /* @__PURE__ */ jsx("section", { className: "dashboard-section !items-start", id: "skills", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "max-w-4xl space-y-16 flex flex-col items-start text-left",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-black uppercase tracking-[0.3em] text-primary", children: "Skills & Tools" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight", children: "Technical Matrix" }),
          /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-lg md:text-xl max-w-2xl", children: "A comprehensive overview of my technical capabilities and the specialized tools I utilize to build intelligent systems." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl", children: portfolioData.skills.map((category, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "glass-card p-6 sm:p-10 hover:border-primary/40 transition-all group",
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsxs("h4", { className: "text-sm font-black uppercase tracking-widest text-text-primary mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Wrench, { size: 18, className: "text-primary" }),
                category.category
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3", children: category.items.map((skill, sIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-input-bg/50 border border-border text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary transition-all cursor-default group/skill", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { size: 14, className: "text-primary opacity-50 group-hover/skill:opacity-100 transition-opacity" }),
                /* @__PURE__ */ jsx("span", { children: skill })
              ] }, sIndex)) })
            ]
          },
          index
        )) })
      ]
    }
  ) });
};
const Education = () => {
  return /* @__PURE__ */ jsx("section", { className: "dashboard-section !items-start", id: "education", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "max-w-4xl space-y-16 flex flex-col items-start text-left",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-black uppercase tracking-[0.3em] text-primary", children: "Education" }),
          /* @__PURE__ */ jsx("h3", { className: "text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight", children: "Academic Foundation" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-6 md:gap-8 w-full max-w-3xl", children: portfolioData.education.map((edu, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "glass-card p-6 sm:p-10 hover:border-primary/30 transition-all flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 group",
            initial: { opacity: 0, y: 10 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx("div", { className: "size-14 md:size-16 bg-input-bg border border-border rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl", children: /* @__PURE__ */ jsx(GraduationCap, { size: 30 }) }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-xl md:text-2xl font-black text-text-primary tracking-tight", children: edu.degree }),
                  /* @__PURE__ */ jsx("span", { className: "px-3 py-1 rounded-full bg-input-bg border border-border text-[10px] font-black text-text-muted uppercase tracking-widest shadow-lg", children: edu.year })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-base md:text-lg font-medium", children: edu.institution }),
                edu.score && /* @__PURE__ */ jsxs("div", { className: "inline-block px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest", children: [
                  "Performance: ",
                  edu.score
                ] })
              ] })
            ]
          },
          index
        )) })
      ]
    }
  ) });
};
const Contact = ({ setActiveTab }) => {
  return /* @__PURE__ */ jsx("section", { className: "dashboard-section !items-start", id: "contact", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "max-w-5xl space-y-20 flex flex-col items-start",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "text-left space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-black uppercase tracking-[0.3em] text-primary", children: "Contact" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-3xl sm:text-4xl md:text-6xl font-black text-text-primary leading-tight tracking-tight", children: [
            "Let's build something ",
            /* @__PURE__ */ jsx("span", { className: "text-primary italic", children: "efficient" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-text-secondary text-base md:text-xl max-w-2xl", children: "Currently exploring opportunities to engineer high-performance software systems and intelligent document pipelines." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-6 flex flex-col", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 md:space-y-6", children: [
            /* @__PURE__ */ jsxs("a", { href: `mailto:${portfolioData.contact.email}`, className: "glass-card p-6 md:p-8 flex items-center gap-4 md:gap-6 group hover:border-primary/40 transition-all shadow-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "size-12 md:size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0", children: /* @__PURE__ */ jsx(Mail, { size: 22 }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-left space-y-1 overflow-hidden", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-text-muted uppercase tracking-widest", children: "Email Address" }),
                /* @__PURE__ */ jsx("div", { className: "font-black text-base md:text-lg text-text-primary group-hover:text-primary transition-colors truncate", children: portfolioData.contact.email })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 md:p-8 flex items-center gap-4 md:gap-6 group shadow-xl", children: [
              /* @__PURE__ */ jsx("div", { className: "size-12 md:size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary flex-shrink-0", children: /* @__PURE__ */ jsx(MapPin, { size: 22 }) }),
              /* @__PURE__ */ jsxs("div", { className: "text-left space-y-1", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black text-text-muted uppercase tracking-widest", children: "Current Location" }),
                /* @__PURE__ */ jsx("div", { className: "font-black text-base md:text-lg text-text-primary", children: portfolioData.contact.location })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxs("form", { className: "glass-card p-10 space-y-8 shadow-2xl", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "full-name", className: "text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }),
                "Full Name"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "full-name",
                  className: "w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm",
                  placeholder: "E.g. John Doe"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "email", className: "text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }),
                "Email Address"
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  id: "email",
                  type: "email",
                  className: "w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm",
                  placeholder: "john@example.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "size-1 rounded-full bg-primary" }),
                "Inquiry Details"
              ] }),
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  id: "message",
                  className: "w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 min-h-[140px] text-sm resize-none",
                  placeholder: "Describe the project or role requirements..."
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("button", { className: "btn-dashboard-primary w-full justify-center py-5 text-base shadow-2xl shadow-primary/20 hover:scale-[1.01]", children: [
              "Send Message",
              /* @__PURE__ */ jsx(Send, { size: 20 })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.button,
          {
            onClick: () => setActiveTab?.("intro"),
            className: "flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted hover:text-text-primary transition-colors mt-8 group",
            children: [
              /* @__PURE__ */ jsxs("span", { className: "relative", children: [
                "Back to Top",
                /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300" })
              ] }),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  animate: { y: [0, -5, 0] },
                  transition: { repeat: Infinity, duration: 2 },
                  children: /* @__PURE__ */ jsx(ArrowRight, { size: 18, className: "-rotate-90 group-hover:text-primary transition-colors" })
                }
              )
            ]
          }
        )
      ]
    }
  ) });
};
const Stats = () => {
  const stats = [
    { label: "System Uptime", value: "99.99%", icon: /* @__PURE__ */ jsx(Zap, { size: 20 }), color: "text-yellow-500" },
    { label: "OCR Accuracy", value: "98.4%", icon: /* @__PURE__ */ jsx(Cpu, { size: 20 }), color: "text-primary" },
    { label: "Data Managed", value: "1.2TB+", icon: /* @__PURE__ */ jsx(Database, { size: 20 }), color: "text-blue-500" },
    { label: "Total Queries", value: "500k+", icon: /* @__PURE__ */ jsx(Globe, { size: 20 }), color: "text-green-500" }
  ];
  return /* @__PURE__ */ jsx("section", { className: "dashboard-section !items-start", id: "stats", children: /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: "max-w-5xl space-y-16 flex flex-col items-start text-left",
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 0.6 },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-black uppercase tracking-[0.3em] text-primary", children: "Stats" }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight", children: "System Performance" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full", children: stats.map((stat, index) => /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "glass-card p-6 sm:p-8 hover:border-primary/30 transition-all group shadow-xl",
            initial: { opacity: 0, scale: 0.95 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: index * 0.1 },
            children: [
              /* @__PURE__ */ jsx("div", { className: `${stat.color} mb-4 sm:mb-6 bg-input-bg/50 border border-border size-10 sm:size-12 rounded-xl flex items-center justify-center shadow-inner`, children: stat.icon }),
              /* @__PURE__ */ jsx("div", { className: "text-2xl sm:text-3xl font-black text-text-primary mb-2 tracking-tighter", children: stat.value }),
              /* @__PURE__ */ jsx("div", { className: "text-[10px] font-black uppercase tracking-widest text-text-muted", children: stat.label })
            ]
          },
          index
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "glass-card p-6 sm:p-10 w-full relative overflow-hidden group shadow-2xl", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity", children: /* @__PURE__ */ jsx(Zap, { size: 160, className: "text-primary" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-10", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-[11px] font-black text-text-primary uppercase tracking-[0.3em]", children: "Real-time Pipeline Throughput" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-primary animate-pulse" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-black text-primary uppercase tracking-widest", children: "Live Monitoring" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-end gap-2.5 h-40", children: [40, 60, 45, 70, 55, 80, 65, 90, 75, 100, 85, 95, 80, 110, 90, 105].map((h, i) => /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "flex-1 bg-primary/20 rounded-t-md border-t-2 border-primary/40 group-hover:bg-primary/30 transition-colors",
              initial: { height: 0 },
              whileInView: { height: `${h}%` },
              transition: { duration: 1, delay: i * 0.05 }
            },
            i
          )) }),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] text-text-muted mt-8 font-black uppercase tracking-widest opacity-50", children: "System Stability: Nominal • Latency: 42ms • Resource Load: 64%" })
        ] })
      ]
    }
  ) });
};
function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [activeTab]);
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      console.log("Theme toggled to:", newTheme);
      return newTheme;
    });
  };
  const renderContent = () => {
    switch (activeTab) {
      case "intro":
        return /* @__PURE__ */ jsx(Hero, { setActiveTab });
      case "about":
        return /* @__PURE__ */ jsx(About, { setActiveTab });
      case "experience":
      case "projects":
        return /* @__PURE__ */ jsx(Experience, { activeTab });
      case "skills":
        return /* @__PURE__ */ jsx(Skills, {});
      case "education":
        return /* @__PURE__ */ jsx(Education, {});
      case "contact":
        return /* @__PURE__ */ jsx(Contact, { setActiveTab });
      case "stats":
        return /* @__PURE__ */ jsx(Stats, {});
      default:
        return /* @__PURE__ */ jsx(Hero, {});
    }
  };
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
    Layout,
    {
      activeTab,
      setActiveTab,
      theme,
      toggleTheme,
      children: renderContent()
    }
  ) });
}
const routes = [{ path: "/", element: /* @__PURE__ */ jsx(App, {}) }];
const createApp = ViteReactSSG(App, { routes });
export {
  createApp
};
