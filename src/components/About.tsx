import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server } from 'lucide-react';

const skills = [
    {
        category: "Frontend",
        icon: <Globe className="w-6 h-6 text-cyan-400" />,
        items: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6 text-indigo-400" />,
        items: ["Node.js", "Express", "NestJS", "REST APIs"]
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6 text-pink-400" />,
        items: ["SQL", "MongoDB", "Redis", "Prisma"]
    },
    {
        category: "DevOps",
        icon: <Code2 className="w-6 h-6 text-yellow-400" />,
        items: ["Git", "Docker", "CI/CD"]
    }
];

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-indigo-500/5 rounded-full blur-3xl -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Passionate about building scalable applications and solving complex problems along the way.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 hover:border-indigo-500/30 transition-all group"
                    >
                        <div className="mb-4 bg-slate-900/50 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                            {skill.icon}
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
                        <ul className="space-y-2">
                            {skill.items.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-slate-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
