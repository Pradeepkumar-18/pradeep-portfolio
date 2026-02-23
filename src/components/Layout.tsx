import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface LayoutProps {
    children: React.ReactNode;
    activeTab: string;
    setActiveTab: (tab: string) => void;
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, theme, toggleTheme }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="min-h-screen bg-background flex transition-colors duration-300">
            {/* Left Sidebar */}
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content Area */}
            <div className="flex-1 md:ml-[260px] flex flex-col min-h-screen relative">
                {/* Global Scroll Progress */}
                <motion.div
                    className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60] md:left-[260px]"
                    style={{ scaleX }}
                />

                <Topbar theme={theme} toggleTheme={toggleTheme} />

                <main className="flex-1 relative">
                    <div className="max-w-6xl mx-auto px-6 md:px-2">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
