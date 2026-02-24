import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Mail, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Hero = ({ setActiveTab }: { setActiveTab?: (tab: string) => void }) => {
    const [isZooming, setIsZooming] = useState(false);

    const handleTransition = () => {
        if (isZooming) return;
        setIsZooming(true);
        setTimeout(() => {
            setActiveTab?.('about');
        }, 800);
    };

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (e.deltaY > 50 && !isZooming) {
                handleTransition();
            }
        };

        const handleTouch = () => {
            let startY = 0;
            const touchStart = (e: TouchEvent) => {
                startY = e.touches[0].clientY;
            };
            const touchMove = (e: TouchEvent) => {
                const deltaY = startY - e.touches[0].clientY;
                if (deltaY > 50 && !isZooming) {
                    handleTransition();
                }
            };

            window.addEventListener('touchstart', touchStart);
            window.addEventListener('touchmove', touchMove);

            return () => {
                window.removeEventListener('touchstart', touchStart);
                window.removeEventListener('touchmove', touchMove);
            };
        };

        window.addEventListener('wheel', handleScroll);
        const cleanupTouch = handleTouch();

        return () => {
            window.removeEventListener('wheel', handleScroll);
            if (typeof cleanupTouch === 'function') cleanupTouch();
        };
    }, [setActiveTab, isZooming]);

    return (
        <section id="intro" className="dashboard-section relative overflow-hidden pt-20">
            {/* Optimized Background Glow */}
            <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30" />
                <div className="glow-mesh opacity-30 h-full w-full" />
            </div>

            <motion.div
                className="flex flex-col items-center justify-center text-center gap-8 max-w-5xl px-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="space-y-6">


                    <motion.h1
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-text-primary tracking-tighter leading-[0.85] flex flex-wrap md:flex-nowrap justify-center items-center gap-x-3 md:gap-x-4 group cursor-default"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    >
                        <span className="transition-transform duration-500 group-hover:translate-x-1 whitespace-nowrap">
                            {portfolioData.personal.name}
                        </span>
                        <span className="text-primary italic opacity-90 transition-all duration-500 group-hover:scale-110 whitespace-nowrap">
                            {portfolioData.personal.surname}
                        </span>
                    </motion.h1>

                    <motion.h2
                        className="text-xl sm:text-2xl md:text-4xl font-black text-text-primary tracking-tight mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Coder by day,{" "}
                        <span className="text-primary italic">problem-solver </span>
                        {"  "}by night!
                    </motion.h2>

                    <motion.p
                        className="text-base md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed mt-4 opacity-80"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        {portfolioData.hero.description}
                    </motion.p>
                </div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <a href={portfolioData.hero.actions[0].href} target="_blank" rel="noopener noreferrer" className="btn-dashboard-primary w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-6 text-base md:text-lg shadow-[0_0_30px_rgba(255,107,0,0.2)] hover:shadow-[0_0_40px_rgba(255,107,0,0.3)] transition-all">
                        Get Resume
                        <ExternalLink size={20} />
                    </a>
                    <a href={`mailto:${portfolioData.contact.email}`} className="btn-dashboard-secondary w-full sm:w-auto justify-center px-8 md:px-12 py-4 md:py-6 text-base md:text-lg">
                        <Mail size={20} strokeWidth={2.5} />
                        Send Mail
                    </a>
                </motion.div>

                {/* Section Advance Hint */}
                <motion.button
                    onClick={handleTransition}
                    className="flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-12 group relative"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    {/* Expanding Portal Effect - Isolated to Hero Section */}
                    <AnimatePresence>
                        {isZooming && (
                            <motion.div
                                className="absolute inset-0 bg-background z-[100] rounded-full pointer-events-none"
                                initial={{ scale: 0, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
                                animate={{ scale: 15 }}
                                transition={{ duration: 1.2, ease: [0.7, 0, 0.3, 1] }}
                                style={{ transformOrigin: 'center center' }}
                            />
                        )}
                    </AnimatePresence>

                    <span className="relative z-10">
                        Initialize sequence
                        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-primary group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <motion.div
                        className="size-12 rounded-full border border-primary/50 bg-input-bg flex items-center justify-center group-hover:border-primary group-hover:scale-110 shadow-[0_0_15px_rgba(168,85,247,0.1)] group-hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 relative z-10"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    >
                        <ArrowRight size={24} className="rotate-90 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;

