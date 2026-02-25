import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = ({ setActiveTab }: { setActiveTab?: (tab: string) => void }) => {
    const [isZooming, setIsZooming] = useState(false);

    const handleTransition = () => {
        if (isZooming) return;
        setIsZooming(true);
        setTimeout(() => {
            setActiveTab?.('experience');
        }, 800);
    };

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            // Only trigger if scrolled near bottom
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
            if (e.deltaY > 50 && !isZooming && isAtBottom) {
                handleTransition();
            }
        };

        const handleTouch = () => {
            let startY = 0;
            const touchStart = (e: TouchEvent) => {
                startY = e.touches[0].clientY;
            };
            const touchMove = (e: TouchEvent) => {
                const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
                const deltaY = startY - e.touches[0].clientY;
                if (deltaY > 50 && !isZooming && isAtBottom) {
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
        <section className="dashboard-section relative overflow-hidden min-h-screen items-center text-center pb-10" id="about">
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
                <div className="space-y-4">
                    <motion.h2
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary tracking-tighter"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        About <span className="text-primary">Me</span>
                    </motion.h2>

                    <motion.div
                        className="text-text-secondary leading-relaxed text-base md:text-xl max-w-3xl mx-auto opacity-80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <p dangerouslySetInnerHTML={{
                            __html: portfolioData.about.description.join(' ').replace(/AI-powered document processing/g, '<span class="text-text-primary font-bold">AI-powered document processing</span>')
                        }} />
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
                    {portfolioData.about.stats?.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-8 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-all bg-background/40 backdrop-blur-xl"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                        >
                            <div className={`text-4xl sm:text-5xl font-black mb-2 tracking-tighter transition-colors ${stat.label === "Tech Stack" ? 'text-primary group-hover:text-text-primary' : 'text-text-primary group-hover:text-primary'}`}>
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Recognitions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
                    {portfolioData.about.recognitions?.map((award, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 sm:p-8 flex flex-col gap-6 group hover:border-primary/30 transition-all bg-background/40 backdrop-blur-xl overflow-hidden relative"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + index * 0.2 }}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="space-y-3 flex-1">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                        <span className="size-2 rounded-full bg-primary animate-pulse" />
                                        <span className="text-[10px] font-black text-primary uppercase tracking-widest">Recognition</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl font-black text-text-primary tracking-tighter leading-tight">
                                        {award.title.split(' ').map((word: string, i: number) => (
                                            word.match(/Q[1-4]|202\d|INNOVATION/) ? <span key={i} className="text-primary italic ml-1">{word} </span> : word + ' '
                                        ))}
                                    </h4>
                                </div>
                                <div className="size-16 sm:size-20 shrink-0 rounded-2xl bg-input-bg/50 border border-border flex items-center justify-center p-3 relative group-hover:border-primary/20 transition-all">
                                    <img
                                        src={award.image}
                                        alt="Award Trophy"
                                        className="w-full h-full object-contain relative z-10 drop-shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = "https://cdn-icons-png.flaticon.com/512/3112/3112946.png";
                                        }}
                                    />
                                </div>
                            </div>

                            <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
                                Awarded by <span className="text-text-primary font-bold">{award.awarder}</span>. {award.description}
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
                                {award.tags.map((tag: string, i: number) => (
                                    <span key={i} className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest border transition-all ${i === 0 ? 'bg-text-primary text-background border-text-primary' : 'bg-primary/5 text-primary border-primary/10 hover:bg-primary/10'}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Section Advance Hint */}
                <motion.button
                    onClick={handleTransition}
                    className="flex flex-col items-center gap-5 text-[10px] font-black uppercase tracking-[0.4em] text-text-muted hover:text-text-primary transition-all mt-4 group relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    {/* Expanding Portal Effect */}
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
                        Continue sequence
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

export default About;

