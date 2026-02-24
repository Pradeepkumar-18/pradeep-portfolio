import { motion } from 'framer-motion';
import { Network, CircleDollarSign, Terminal, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
    return (
        <section className="dashboard-section !items-start" id="experience">
            <motion.div
                className="max-w-5xl space-y-20 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-left space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Experience</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">Professional Journey</h3>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl">A track record of building and managing intelligent software solutions within enterprise environments.</p>
                </div>

                <div className="space-y-24 w-full">
                    {portfolioData.experience.map((exp, index) => (
                        <div key={index} className="relative pl-8 md:pl-12 border-l-2 border-primary/20 max-w-4xl">
                            {/* Timeline Node */}
                            <div className="absolute -left-[9px] top-0 size-4 rounded-full bg-primary ring-8 ring-background/50"></div>

                            <motion.div
                                className="mb-10 md:mb-14"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 mb-4">
                                    <h4 className="text-2xl md:text-3xl font-black text-text-primary tracking-tight">{exp.company}</h4>
                                    <span className="self-start sm:self-auto px-4 py-1.5 rounded-full bg-input-bg border border-border text-[10px] font-black text-text-muted uppercase tracking-widest shadow-xl">
                                        {exp.duration}
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-primary font-black uppercase tracking-widest text-[11px] mb-6 md:mb-8">
                                    <Briefcase size={16} />
                                    {exp.role}
                                </div>
                                {exp.description && (
                                    <p className="text-text-secondary leading-relaxed text-lg italic border-l-2 border-primary/10 pl-8 mb-12">
                                        {exp.description}
                                    </p>
                                )}
                            </motion.div>

                            {/* Project Cards */}
                            <div id="projects" className="grid grid-cols-1 gap-8">
                                {exp.projects?.map((project, pIndex) => (
                                    <motion.div
                                        key={pIndex}
                                        className="glass-card p-10 hover:border-primary/30 transition-all group"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: pIndex * 0.1 }}
                                    >
                                        <div className="flex flex-wrap justify-between items-start gap-6 mb-8">
                                            <div className="space-y-2 text-left">
                                                <div className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">{project.role}</div>
                                                <h5 className="text-2xl font-black text-text-primary group-hover:text-primary transition-colors tracking-tight">{project.title}</h5>
                                            </div>
                                            <div className="size-14 bg-input-bg border border-border rounded-xl flex items-center justify-center text-text-muted group-hover:text-primary group-hover:scale-110 transition-all shadow-xl">
                                                {pIndex % 3 === 0 ? <Network size={24} /> :
                                                    pIndex % 3 === 1 ? <CircleDollarSign size={24} /> :
                                                        <Terminal size={24} />}
                                            </div>
                                        </div>

                                        <p className="text-text-secondary leading-relaxed text-lg mb-8 text-left">
                                            {project.description}
                                        </p>

                                        {project.features && (
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 text-left">
                                                {project.features.map((feature, fIndex) => (
                                                    <li key={fIndex} className="text-[13px] text-text-muted flex items-center gap-4 group/item text-left">
                                                        <div className="size-2 rounded-full bg-primary/30 group-hover/item:bg-primary group-hover/item:scale-125 transition-all"></div>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        <div className="flex flex-wrap gap-2.5 pt-8 border-t border-border justify-start text-left">
                                            {project.tech.map((t, tIndex) => (
                                                <span key={tIndex} className="px-3 py-1.5 rounded bg-input-bg/50 border border-border text-[10px] font-black text-text-muted uppercase tracking-widest hover:text-text-primary hover:border-primary/30 transition-all cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;

