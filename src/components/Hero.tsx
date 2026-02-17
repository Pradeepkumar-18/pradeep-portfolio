import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="text-indigo-400 font-medium tracking-wider uppercase mb-4 block"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hi, I'm Pradeep Kumar
                    </motion.span>
                    <motion.h2
                        className="text-2xl sm:text-3xl font-medium text-slate-300 mb-2"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                    >
                        Full Stack Developer
                    </motion.h2>
                    <motion.h1
                        className="text-5xl sm:text-7xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                            experiences
                        </span>
                    </motion.h1>
                    <motion.p
                        className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        I craft accessible, pixel-perfect, and performant web experiences.
                        Focused on creating intuitive interfaces with clean code.
                    </motion.p>

                    <motion.div
                        className="flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <a href="#projects" className="group flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-medium transition-all">
                            View Work
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <div className="flex items-center gap-4 px-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="relative hidden lg:block"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl" />
                    <div className="relative z-10 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                        <div className="flex gap-2 mb-6">
                            <div className="w-3 h-3 rounded-full bg-red-500" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500" />
                            <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="space-y-4 font-mono text-sm">
                            <div className="flex gap-4">
                                <span className="text-pink-400">const</span>
                                <span className="text-yellow-200">developer</span>
                                <span className="text-slate-400">=</span>
                                <span className="text-slate-400">{`{`}</span>
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-cyan-400">name:</span>
                                <span className="text-green-400">'Pradeep Kumar'</span>,
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-cyan-400">skills:</span>
                                <span className="text-slate-400">['React', 'Node', 'Next.js']</span>,
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-cyan-400">hardWorker:</span>
                                <span className="text-orange-400">true</span>,
                            </div>
                            <div className="pl-8 flex gap-4">
                                <span className="text-cyan-400">problemSolver:</span>
                                <span className="text-orange-400">true</span>
                            </div>
                            <div className="text-slate-400">{`}`}</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
