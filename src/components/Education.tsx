import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    return (
        <section className="dashboard-section !items-start" id="education">
            <motion.div
                className="max-w-4xl space-y-16 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Education</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">Academic Foundation</h3>
                </div>

                <div className="grid grid-cols-1 gap-8 w-full max-w-3xl">
                    {portfolioData.education.map((edu, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-10 hover:border-primary/30 transition-all flex flex-col md:flex-row items-start gap-8 group"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="size-16 bg-input-bg border border-border rounded-xl flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl">
                                <GraduationCap size={32} />
                            </div>
                            <div className="space-y-4 flex-1 text-left">
                                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-4">
                                    <h4 className="text-2xl font-black text-text-primary tracking-tight">{edu.degree}</h4>
                                    <span className="px-3 py-1 rounded-full bg-input-bg border border-border text-[10px] font-black text-text-muted uppercase tracking-widest shadow-lg">
                                        {edu.year}
                                    </span>
                                </div>
                                <p className="text-text-secondary text-lg font-medium">{edu.institution}</p>
                                {edu.score && (
                                    <div className="inline-block px-3 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] font-black text-primary uppercase tracking-widest">
                                        Performance: {edu.score}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;

