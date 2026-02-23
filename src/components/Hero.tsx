import { motion } from 'framer-motion';
import { ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ setActiveTab }: { setActiveTab?: (tab: string) => void }) => {
    return (
        <section id="intro" className="dashboard-section relative overflow-hidden min-h-screen">
            {/* Optimized Background Glow */}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="glow-mesh opacity-30 h-full w-full" />
            </div>

            <motion.div
                className="flex flex-col items-center justify-center text-center gap-12 max-w-5xl px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-10">


                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter leading-[0.85] flex flex-nowrap justify-center items-center gap-x-3 md:gap-x-4 group cursor-default whitespace-nowrap"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                        <span className="transition-transform duration-500 group-hover:translate-x-1">
                            {portfolioData.personal.name}
                        </span>
                        <span className="text-primary italic opacity-90 transition-all duration-500 group-hover:scale-110">
                            {portfolioData.personal.surname}
                        </span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-4xl font-black text-text-primary tracking-tight mt-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Coder by day,{" "}
                        <span className="text-primary italic">problem-solver </span>
                        {"  "}by night!
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mt-8 opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {portfolioData.hero.description}
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-wrap items-center justify-center gap-6 mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href={portfolioData.hero.actions[0].href} target="_blank" rel="noopener noreferrer" className="btn-dashboard-primary px-12 py-6 text-lg shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all">
                        Get Resume
                        <ExternalLink size={22} />
                    </a>
                    <a href={`mailto:${portfolioData.contact.email}`} className="btn-dashboard-secondary px-12 py-6 text-lg">
                        <Mail size={22} strokeWidth={2.5} />
                        Send Mail
                    </a>
                </motion.div>

                {/* Section Advance Hint */}
                <motion.button
                    onClick={() => setActiveTab?.('about')}
                    className="flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-24 group relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <span className="relative">
                        Initialize sequence
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <motion.div
                        className="size-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowRight size={20} className="rotate-90 text-text-muted group-hover:text-primary transition-colors" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;

