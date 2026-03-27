import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const getSkillLogo = (skill: string) => {
        const logoMap: { [key: string]: string } = {
            "react (vite)": "react",
            "html": "html5",
            "css": "css3",
            "javascript": "javascript",
            "tailwind css": "tailwindcss",
            "nestjs": "nestjs",
            "node.js": "nodedotjs",
            "mongodb": "mongodb",
            "sql": "mysql",
            "gemini ai": "googlegemini",
            "langchain": "langchain",
            "python": "python",
            "java": "openjdk",
            "ocr": "googlecloud",
            "document parsing": "googlecloud",
            "workflow automation": "apacheairflow"
        };
        const slug = logoMap[skill.toLowerCase()] || "code-dot-js";
        return `https://cdn.simpleicons.org/${slug}`;
    };

    const categories = ['All', ...portfolioData.skills.map(cat => cat.category)];

    const allSkills = portfolioData.skills.flatMap(cat => 
        cat.items.map(item => ({ name: item, category: cat.category }))
    );

    const filteredSkills = activeCategory === 'All' 
        ? allSkills 
        : allSkills.filter(skill => skill.category === activeCategory);

    return (
        <section className="dashboard-section py-24 min-h-screen relative overflow-hidden" id="skills">
            {/* Ambient Background Elements - Optimized for both modes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-20 dark:opacity-40" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/15 rounded-full blur-[150px] opacity-20 dark:opacity-30" />
                <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] opacity-10 dark:opacity-20" />
            </div>

            <motion.div
                className="max-w-7xl mx-auto px-6 space-y-16 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                {/* Header */}
                <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 backdrop-blur-md mb-2"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">System Capabilities</span>
                    </motion.div>
                    
                    <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter leading-none">
                        Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark">Ecosystem</span>.
                    </h2>
                    <p className="text-text-secondary text-base md:text-lg max-w-2xl font-medium opacity-60">
                        Bridging complex architectures with robust, scalable technology solutions.
                    </p>
                </div>

                {/* Category Interaction Bar */}
                <div className="flex flex-wrap justify-center gap-3 p-1.5 bg-background/50 dark:bg-card/30 backdrop-blur-xl border border-border/40 rounded-3xl w-fit mx-auto shadow-sm">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 relative ${
                                activeCategory === cat 
                                    ? 'text-white' 
                                    : 'text-text-muted hover:text-text-primary'
                            }`}
                        >
                            {activeCategory === cat && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary rounded-2xl shadow-lg shadow-primary/20"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Centered Filterable Layout */}
                <motion.div 
                    layout
                    className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-7xl mx-auto"
                >
                    <AnimatePresence mode="popLayout" initial={false}>
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={`${skill.name}-${skill.category}`}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                className="group relative flex flex-col items-center justify-center p-8 rounded-[2.5rem] bg-card/40 dark:bg-card/20 backdrop-blur-md border border-border/40 hover:border-primary/40 hover:bg-card/60 dark:hover:bg-card/40 transition-all duration-500 overflow-hidden w-[45%] sm:w-[30%] md:w-[22%] lg:w-[15%] min-w-[170px]"
                                whileHover={{ y: -8, scale: 1.05 }}
                            >
                                {/* Subtle Inner Glow in Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 size-16 mb-6 flex items-center justify-center transform-gpu opacity-60 dark:opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <img 
                                        src={getSkillLogo(skill.name)} 
                                        alt={`${skill.name} logo`}
                                        className="size-10 object-contain relative z-10"
                                        onError={(e) => (e.currentTarget.src = "https://cdn.simpleicons.org/code-dot-js")}
                                    />
                                </div>

                                <h4 className="relative z-10 text-[11px] font-black uppercase tracking-widest text-text-primary text-center leading-tight">
                                    {skill.name}
                                </h4>

                                {/* Animated Accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Skills;
