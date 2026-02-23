import { motion } from 'framer-motion';
import { Mail, MapPin, Send, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = ({ setActiveTab }: { setActiveTab?: (tab: string) => void }) => {
    return (
        <section className="dashboard-section !items-start" id="contact">
            <motion.div
                className="max-w-5xl space-y-20 flex flex-col items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-left space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Contact</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-text-primary leading-tight tracking-tight">
                        Let's build something <span className="text-primary italic">efficient</span>.
                    </h3>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl">
                        Currently exploring opportunities to engineer high-performance software systems and intelligent document pipelines.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 w-full">
                    <div className="space-y-8 flex flex-col">
                        <div className="space-y-6">
                            <a href={`mailto:${portfolioData.contact.email}`} className="glass-card p-8 flex items-center gap-6 group hover:border-primary/40 transition-all shadow-xl">
                                <div className="size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div className="text-left space-y-1">
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Email Address</div>
                                    <div className="font-black text-lg text-text-primary group-hover:text-primary transition-colors">{portfolioData.contact.email}</div>
                                </div>
                            </a>
                            <div className="glass-card p-8 flex items-center gap-6 group shadow-xl">
                                <div className="size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div className="text-left space-y-1">
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Current Location</div>
                                    <div className="font-black text-lg text-text-primary">{portfolioData.contact.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="glass-card p-10 space-y-8 shadow-2xl">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Full Name
                            </label>
                            <input
                                className="w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm"
                                placeholder="E.g. John Doe"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Email Address
                            </label>
                            <input
                                className="w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Inquiry Details
                            </label>
                            <textarea
                                className="w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 min-h-[140px] text-sm resize-none"
                                placeholder="Describe the project or role requirements..."
                            ></textarea>
                        </div>
                        <button className="btn-dashboard-primary w-full justify-center py-5 text-base shadow-2xl shadow-primary/20 hover:scale-[1.01]">
                            Send Message
                            <Send size={20} />
                        </button>
                    </form>
                </div>

                <motion.button
                    onClick={() => setActiveTab?.('intro')}
                    className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-text-muted hover:text-text-primary transition-colors mt-8 group"
                >
                    <span className="relative">
                        Back to Top
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-300"></span>
                    </span>
                    <motion.div
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                    >
                        <ArrowRight size={18} className="-rotate-90 group-hover:text-primary transition-colors" />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Contact;

