import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing products, orders, and analytics. Built with React and Recharts.",
        tags: ["React", "Typescript", "Tailwind", "Recharts"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat interface powered by Large Language Models. Features streaming responses and chat history.",
        tags: ["Next.js", "OpenAI API", "Socket.io", "MongoDB"],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", code: "#" }
    },
    {
        title: "Task Management App",
        description: "Collaborative task manager with Kanban boards and team features. Includes drag-and-drop support.",
        tags: ["Vue", "Firebase", "Pinia", "SortableJS"],
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800",
        links: { demo: "#", code: "#" }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    A selection of projects that demonstrate my expertise in building complex web applications.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-colors"
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a href={project.links.demo} className="p-2 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                                <a href={project.links.code} className="p-2 bg-white text-slate-900 rounded-full hover:bg-indigo-500 hover:text-white transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                            <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
