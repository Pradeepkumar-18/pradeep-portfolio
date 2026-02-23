import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';


interface NavbarProps {
    setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setActiveTab }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', id: 'about' },
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Contact', id: 'contact' },
    ];

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b md:left-[260px] ${isScrolled ? 'bg-background-light/80 backdrop-blur-md border-slate-200 py-3' : 'bg-transparent border-transparent py-5'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                    {/* Logo */}
                    <button onClick={() => handleTabClick('intro')} className="flex items-center gap-2 group">
                        <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
                            <Terminal size={20} />
                        </div>
                        <span className="font-bold tracking-tight text-lg uppercase text-slate-900">
                            {portfolioData.personal.name} {portfolioData.personal.surname}
                        </span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => handleTabClick(link.id)}
                                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
                            >
                                {link.name}
                            </button>
                        ))}

                        <button onClick={() => handleTabClick('contact')} className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all font-bold text-sm">
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-slate-900"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="fixed inset-0 z-30 bg-background-light pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => handleTabClick(link.id)}
                                    className="text-2xl font-bold text-slate-900 text-left"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                onClick={() => handleTabClick('contact')}
                                className="bg-primary hover:bg-primary/90 text-white w-full text-center py-4 rounded-xl font-bold"
                            >
                                Hire Me
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
