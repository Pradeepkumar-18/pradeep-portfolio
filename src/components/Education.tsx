import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
    return (
        <section className="dashboard-section relative overflow-hidden pt-0 pb-40 text-center" id="education">
            {/* Background Ornaments */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />
            </div>

            <motion.div
                className="max-w-5xl mx-auto flex flex-col items-center text-center px-6 pt-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {/* Header Section */}
                <div className="space-y-4 mb-24 text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20"
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap size={14} className="text-primary" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Academic Journey</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-black text-text-primary leading-tight tracking-tighter">
                        Educational <span className="text-primary italic">Milestones</span>
                    </h2>
                </div>

                {/* Vertical Timeline Construction */}
                <div className="relative w-full max-w-4xl">
                    {/* The Central Line */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden md:block"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <div className="space-y-16 md:space-y-24 relative">
                        {portfolioData.education.map((edu, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                {/* Card Content */}
                                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    <div className="glass-card p-6 md:p-8 hover:border-primary/40 transition-all group relative overflow-hidden">
                                        <div className="flex flex-col gap-1 relative z-10">
                                            {/* Integrated Grade Badge */}
                                            {edu.score && (
                                                <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                    <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 flex items-center gap-2 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                                                        <span className="text-[9px] font-black text-primary group-hover:text-white uppercase tracking-widest">GPA</span>
                                                        <div className="w-[1px] h-3 bg-primary/20 group-hover:bg-white/20" />
                                                        <span className="text-sm font-black text-text-primary group-hover:text-white">{edu.score}</span>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-xl md:text-2xl font-black text-text-primary tracking-tight leading-tight group-hover:text-primary transition-colors">
                                                    {edu.degree}
                                                </h4>
                                                <div className={`flex items-center gap-2 text-text-muted text-xs font-bold uppercase tracking-wider ${index % 2 === 0 ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                                    <Calendar size={12} className="text-primary" />
                                                    {edu.year}
                                                </div>
                                            </div>

                                            <div className={`h-[1px] w-12 bg-border group-hover:w-full transition-all duration-500 ${index % 2 === 0 ? 'md:ml-auto ml-0' : 'mr-auto'}`} />

                                            <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end items-start' : 'items-start'}`}>
                                                <p className="text-text-secondary text-sm md:text-base font-semibold leading-relaxed">
                                                    {edu.institution}
                                                </p>
                                                {edu.degree.includes('Engineering') && (
                                                    <div className="inline-flex items-center gap-2 text-[10px] font-bold text-text-muted uppercase">
                                                        <MapPin size={10} className="text-primary" />
                                                        Anna University Affiliate
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Center Node */}
                                <div className="relative z-10 hidden md:flex items-center justify-center">
                                    <motion.div
                                        className="size-12 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-[0_0_20px_rgba(255,107,0,0.2)] group-hover:scale-110 transition-transform"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                    >
                                        <GraduationCap size={20} />
                                    </motion.div>
                                    <div className="absolute size-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
                                </div>

                                {/* Spacer for the other side on desktop */}
                                <div className="hidden md:block md:w-5/12" />
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default Education;
