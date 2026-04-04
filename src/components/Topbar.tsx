import { useEffect, useState } from 'react';
import { Search, Clock, Sun, Moon, Github, Command } from 'lucide-react';

interface TopbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
    onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ theme, toggleTheme, onMenuClick }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formattedTime = time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });

    return (
        <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-40 px-4 md:px-8 flex items-center justify-between transition-colors duration-300">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="p-2 rounded-lg hover:bg-input-bg transition-colors md:hidden text-text-muted hover:text-text-primary"
                    aria-label="Open menu"
                >
                    <Command size={20} />
                </button>

                {/* Search Bar */}
                <div className="relative group max-w-md w-full hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-text-primary transition-colors" size={16} />
                    <input
                        type="text"
                        placeholder="Search sections..."
                        className="w-full bg-input-bg border border-border rounded-lg py-2 pl-10 pr-12 text-sm text-text-secondary focus:outline-none focus:border-primary/50 transition-all"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 px-1.5 py-0.5 bg-background border border-border rounded text-[10px] text-text-muted font-mono">
                        <Command size={10} /> K
                    </div>
                </div>
            </div>

            {/* Icons & Clock */}
            <div className="flex items-center gap-3 md:gap-6">
                <div className="hidden sm:flex items-center gap-3 bg-input-bg border border-border rounded-full px-4 py-1.5 shadow-sm group">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse"></div>
                    <Clock size={14} className="text-text-muted" />
                    <span className="text-sm font-mono text-text-primary tracking-wider">{formattedTime}</span>
                </div>

                <div className="flex items-center gap-2 md:gap-4 text-text-muted">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg hover:bg-input-bg transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? (
                            <Moon size={18} className="hover:text-text-primary cursor-pointer transition-colors" />
                        ) : (
                            <Sun size={18} className="hover:text-text-primary cursor-pointer transition-colors" />
                        )}
                    </button>
                    <Github size={18} className="hover:text-text-primary cursor-pointer transition-colors" />
                </div>
            </div>
        </header>
    );
};

export default Topbar;
