import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    return (
        <section className="dashboard-section relative overflow-hidden min-h-screen items-center text-center" id="about">
            {/* Background Glows to match Hero */}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-20" />
            </div>

            <motion.div
                className="max-w-5xl space-y-16 flex flex-col items-center justify-center px-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-8">
                    <motion.h2
                        className="text-[11px] font-black uppercase tracking-[0.4em] text-primary"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        Process & Vision
                    </motion.h2>

                    <motion.h3
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-text-primary leading-[1.1] md:leading-[0.9] tracking-tighter max-w-4xl mx-auto"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        I build systems that transform how companies manage <span className="text-primary italic">information</span>.
                    </motion.h3>

                    <motion.div
                        className="space-y-6 text-text-secondary leading-relaxed text-base md:text-xl max-w-3xl mx-auto opacity-80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        {portfolioData.about.description.map((paragraph, index) => (
                            <p key={index} dangerouslySetInnerHTML={{
                                __html: paragraph.replace(/AI-powered document processing/g, '<span class="text-text-primary font-bold">AI-powered document processing</span>')
                            }} />
                        ))}
                    </motion.div>
                </div>

                <div className="w-full max-w-3xl mx-auto">
                    <motion.div
                        className="glass-card p-6 sm:p-12 group hover:border-primary/30 transition-all shadow-2xl shadow-text-primary/5 bg-background/40 backdrop-blur-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h4 className="text-sm font-black uppercase tracking-widest mb-10 text-text-primary flex items-center justify-center gap-3">
                            <Target className="text-primary" size={20} />
                            Domain Expertise
                        </h4>
                        <div className="flex flex-wrap justify-center gap-4">
                            {portfolioData.about.interests.map((interest) => (
                                <span key={interest} className="px-5 py-2.5 rounded-xl bg-input-bg border border-border text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-text-primary hover:border-primary/40 transition-all cursor-default shadow-sm hover:shadow-primary/10">
                                    {interest}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.a
                    href="#projects"
                    className="flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-8 group relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <span className="relative">
                        Explore Portfolio
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="size-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors"
                    >
                        <ArrowRight size={18} className="rotate-90 group-hover:text-primary transition-colors" />
                    </motion.div>
                </motion.a>
            </motion.div>
        </section>
    );
};

export default About;

