import { LayoutDashboard, User, FolderKanban, Wrench, Briefcase, GraduationCap, Mail, BarChart3, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavItemProps {
    id: string;
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    onClick: (id: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ id, icon, label, active, onClick }) => (
    <button
        onClick={() => onClick(id)}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm group ${active ? 'bg-input-bg text-text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary hover:bg-input-bg/50'}`}
    >
        <span className={`${active ? 'text-primary' : 'text-text-muted group-hover:text-text-primary'}`}>{icon}</span>
        {label}
    </button>
);

interface SidebarProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
    const navItems = [
        { href: '#intro', icon: <LayoutDashboard size={18} />, label: "Introduction", id: 'intro' },
        { href: '#about', icon: <User size={18} />, label: "About Me", id: 'about' },
        { href: '#projects', icon: <FolderKanban size={18} />, label: "Projects", id: 'projects' },
        { href: '#experience', icon: <Briefcase size={18} />, label: "Experience", id: 'experience' },
        { href: '#skills', icon: <Wrench size={18} />, label: "Skills & Tools", id: 'skills' },
        { href: '#education', icon: <GraduationCap size={18} />, label: "Education", id: 'education' },
        { href: '#contact', icon: <Mail size={18} />, label: "Contact", id: 'contact' },
        { href: '#stats', icon: <BarChart3 size={18} />, label: "Stats", id: 'stats' },
    ];

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-[260px] bg-sidebar border-r border-border p-6 flex flex-col gap-8 z-50 overflow-y-auto hidden md:flex transition-colors duration-300">
            {/* Logo */}
            <div className="flex items-center gap-3 px-2">
                <div className="size-8 bg-input-bg border border-border rounded flex items-center justify-center text-text-primary">
                    <ArrowUpRight size={18} />
                </div>
                <span className="font-bold text-lg text-text-primary tracking-tight leading-none uppercase">
                    {portfolioData.personal.name.toLowerCase().split(" ")[0]}.dev
                </span>
            </div>

            {/* Navigation Sections */}
            <nav className="flex flex-col gap-1">
                <div className="px-4 mb-4 mt-2">
                    <h4 className="text-[11px] font-black tracking-[0.2em] text-text-muted uppercase">Sections</h4>
                </div>

                {navItems.map((item) => (
                    <NavItem
                        key={item.id}
                        id={item.id}
                        icon={item.icon}
                        label={item.label}
                        active={activeTab === item.id}
                        onClick={setActiveTab}
                    />
                ))}
            </nav>

            <div className="mt-auto px-4 py-6 border-t border-border">
                <p className="text-[10px] text-text-muted leading-relaxed font-medium">
                    © {new Date().getFullYear()} {portfolioData.personal.name} {portfolioData.personal.surname}. Designed for elite performance.
                </p>
            </div>
        </aside>
    );
};

export default Sidebar;

