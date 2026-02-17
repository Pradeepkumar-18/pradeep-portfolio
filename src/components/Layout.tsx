import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './Navbar';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-slate-900 text-white font-sans selection:bg-indigo-500 selection:text-white">
            <Navbar />
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-indigo-500 origin-left z-50"
                style={{ scaleX }}
            />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {children}
            </main>
            <footer className="py-8 text-center text-slate-500 text-sm">
                <p>&copy; {new Date().getFullYear()} Modern Portfolio. Built with React & Tailwind.</p>
            </footer>
        </div>
    );
};

export default Layout;
