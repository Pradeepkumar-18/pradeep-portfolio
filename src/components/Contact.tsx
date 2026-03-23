import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <section className="dashboard-section !items-center" id="contact">
            <motion.div
                className="max-w-5xl space-y-12 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-text-primary leading-tight tracking-tighter">
                        Contact <span className="text-primary italic">Me</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 w-full items-start">
                    <div className="space-y-6 flex flex-col items-center lg:items-center">
                        <div className="space-y-4 md:space-y-6 w-full max-w-md lg:max-w-none">
                            <a href={`mailto:${portfolioData.contact.email}`} className="glass-card p-6 md:p-8 flex items-center gap-4 md:gap-6 group hover:border-primary/40 transition-all shadow-xl">
                                <div className="size-12 md:size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                    <Mail size={22} />
                                </div>
                                <div className="text-left space-y-1 overflow-hidden">
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Email Address</div>
                                    <div className="font-black text-base md:text-lg text-text-primary group-hover:text-primary transition-colors truncate">{portfolioData.contact.email}</div>
                                </div>
                            </a>
                            <div className="glass-card p-6 md:p-8 flex items-center gap-4 md:gap-6 group shadow-xl">
                                <div className="size-12 md:size-14 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div className="text-left space-y-1">
                                    <div className="text-[10px] font-black text-text-muted uppercase tracking-widest">Current Location</div>
                                    <div className="font-black text-base md:text-lg text-text-primary">{portfolioData.contact.location}</div>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <a 
                                    href="https://linkedin.com/in/pradeep-kumar-046bb722b/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="glass-card p-6 flex items-center gap-4 group hover:border-primary/40 transition-all shadow-xl"
                                >
                                    <div className="size-12 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                        <Linkedin size={20} />
                                    </div>
                                    <div className="text-left space-y-0.5 overflow-hidden">
                                        <div className="text-[9px] font-black text-text-muted uppercase tracking-widest">LinkedIn</div>
                                        <div className="font-black text-sm text-text-primary group-hover:text-primary transition-colors truncate">Connect</div>
                                    </div>
                                </a>
                                <a 
                                    href="https://github.com/Pradeepkumar-18" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="glass-card p-6 flex items-center gap-4 group hover:border-primary/40 transition-all shadow-xl"
                                >
                                    <div className="size-12 rounded-xl bg-input-bg border border-border flex items-center justify-center text-primary group-hover:scale-110 transition-transform flex-shrink-0">
                                        <Github size={20} />
                                    </div>
                                    <div className="text-left space-y-0.5 overflow-hidden">
                                        <div className="text-[9px] font-black text-text-muted uppercase tracking-widest">GitHub</div>
                                        <div className="font-black text-sm text-text-primary group-hover:text-primary transition-colors truncate">View Profile</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>

                    <form className="glass-card p-10 space-y-8 shadow-2xl w-full max-w-md lg:max-w-none mx-auto">
                        <div className="space-y-3">
                            <label htmlFor="full-name" className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Full Name
                            </label>
                            <input
                                id="full-name"
                                className="w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm"
                                placeholder="E.g. John Doe"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full bg-input-bg/50 border border-border rounded-xl px-5 py-4 text-text-primary focus:outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5 transition-all placeholder:text-text-muted/30 text-sm"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="space-y-3">
                            <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-text-muted flex items-center gap-2">
                                <span className="size-1 rounded-full bg-primary"></span>
                                Inquiry Details
                            </label>
                            <textarea
                                id="message"
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
            </motion.div>
        </section>
    );
};

export default Contact;

