import { motion } from 'framer-motion';
import { CheckCircle2, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    return (
        <section className="dashboard-section !items-start" id="skills">
            <motion.div
                className="max-w-4xl space-y-16 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Skills & Tools</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">Technical Matrix</h3>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl">A comprehensive overview of my technical capabilities and the specialized tools I utilize to build intelligent systems.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
                    {portfolioData.skills.map((category, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 sm:p-10 hover:border-primary/40 transition-all group"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <h4 className="text-sm font-black uppercase tracking-widest text-text-primary mb-8 flex items-center gap-3">
                                <Wrench size={18} className="text-primary" />
                                {category.category}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, sIndex) => (
                                    <div key={sIndex} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-input-bg/50 border border-border text-[11px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary transition-all cursor-default group/skill">
                                        <CheckCircle2 size={14} className="text-primary opacity-50 group-hover/skill:opacity-100 transition-opacity" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;

