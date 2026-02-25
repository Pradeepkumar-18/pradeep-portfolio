import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowUpRight,
    Briefcase,
    Calendar,
    MapPin,
    Sparkles,
    Layout,
    Code2,
    Zap
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ExperienceProps {
    activeTab?: string;
}

const Experience: React.FC<ExperienceProps> = ({ activeTab = 'experience' }) => {
    const isProjectsTab = activeTab === 'projects';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants: any = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="dashboard-section w-full max-w-7xl mx-auto px-6 py-20" id={isProjectsTab ? "projects" : "experience"}>
            <div className="flex flex-col items-center mb-24 space-y-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em]"
                >
                    <Sparkles size={12} />
                    {isProjectsTab ? "Portfolio Showcase" : "Career Trajectory"}
                </motion.div>
                <h2 className="text-5xl md:text-7xl font-black text-text-primary tracking-tighter text-center">
                    {isProjectsTab ? "Digital Products." : "Experience."}
                </h2>
                <p className="text-text-secondary text-lg md:text-xl max-w-2xl text-center leading-relaxed">
                    {isProjectsTab
                        ? "A curated selection of systems built with precision and intent."
                        : "Documentation of professional growth and technical mastery."}
                </p>
            </div>

            <motion.div
                className="space-y-32"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {portfolioData.experience.map((exp, expIdx) => {
                    if (isProjectsTab && (!exp.projects || exp.projects.length === 0)) return null;

                    return (
                        <div key={expIdx} className="space-y-12">
                            {/* Company Header */}
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/50 pb-8">
                                <div className="space-y-2">
                                    <h3 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight">
                                        {exp.company}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-4 text-text-muted text-sm font-medium">
                                        <span className="flex items-center gap-1.5"><Briefcase size={14} /> {exp.role}</span>
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {exp.duration}</span>
                                        <span className="flex items-center gap-1.5"><MapPin size={14} /> {exp.location}</span>
                                    </div>
                                </div>
                                {!isProjectsTab && exp.description && (
                                    <p className="max-w-md text-text-secondary text-base leading-relaxed italic md:text-right">
                                        "{exp.description}"
                                    </p>
                                )}
                            </div>

                            {/* Bento Grid for Projects */}
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">
                                {exp.projects?.map((project, pIdx) => {
                                    // Asymmetric layout logic
                                    const isLarge = pIdx === 0;
                                    const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";

                                    return (
                                        <motion.div
                                            key={pIdx}
                                            variants={cardVariants}
                                            className={`${colSpan} bento-card bento-card-gradient group`}
                                        >
                                            <div className="flex flex-col h-full space-y-6">
                                                <div className="flex justify-between items-start">
                                                    <div className="size-12 rounded-2xl bg-white dark:bg-zinc-800 shadow-sm border border-border/30 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                                        {pIdx % 3 === 0 ? <Zap size={24} /> : pIdx % 3 === 1 ? <Code2 size={24} /> : <Layout size={24} />}
                                                    </div>
                                                    <a href="#" className="p-2 rounded-full border border-border/50 text-text-muted hover:text-primary hover:border-primary/30 transition-all">
                                                        <ArrowUpRight size={20} />
                                                    </a>
                                                </div>

                                                <div className="space-y-3">
                                                    <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">
                                                        {project.role}
                                                    </div>
                                                    <h4 className="text-2xl font-black text-text-primary tracking-tight group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h4>
                                                    <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                <div className="flex-grow" />

                                                <div className="space-y-6 pt-6 border-t border-border/30">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.tech.map((t, tIdx) => (
                                                            <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-wider">
                                                                {t}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    {isLarge && (
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            {project.features.map((feature, fIdx) => (
                                                                <div key={fIdx} className="flex items-center gap-2 text-xs text-text-muted font-medium">
                                                                    <div className="size-1 rounded-full bg-primary/40" />
                                                                    {feature}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </section>
    );
};

export default Experience;
