import { motion } from 'framer-motion';
import { Cpu, Zap, Database, Globe } from 'lucide-react';

const Stats = () => {
    const stats = [
        { label: 'System Uptime', value: '99.99%', icon: <Zap size={20} />, color: 'text-yellow-500' },
        { label: 'OCR Accuracy', value: '98.4%', icon: <Cpu size={20} />, color: 'text-primary' },
        { label: 'Data Managed', value: '1.2TB+', icon: <Database size={20} />, color: 'text-blue-500' },
        { label: 'Total Queries', value: '500k+', icon: <Globe size={20} />, color: 'text-green-500' },
    ];

    return (
        <section className="dashboard-section !items-start" id="stats">
            <motion.div
                className="max-w-5xl space-y-16 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-6">
                    <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Stats</h2>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-text-primary leading-tight tracking-tight">System Performance</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="glass-card p-6 sm:p-8 hover:border-primary/30 transition-all group shadow-xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={`${stat.color} mb-4 sm:mb-6 bg-input-bg/50 border border-border size-10 sm:size-12 rounded-xl flex items-center justify-center shadow-inner`}>
                                {stat.icon}
                            </div>
                            <div className="text-2xl sm:text-3xl font-black text-text-primary mb-2 tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-black uppercase tracking-widest text-text-muted">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Performance Chart Placeholder */}
                <div className="glass-card p-6 sm:p-10 w-full relative overflow-hidden group shadow-2xl">
                    <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Zap size={160} className="text-primary" />
                    </div>
                    <div className="flex items-center justify-between mb-10">
                        <h4 className="text-[11px] font-black text-text-primary uppercase tracking-[0.3em]">Real-time Pipeline Throughput</h4>
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">Live Monitoring</span>
                        </div>
                    </div>
                    <div className="flex items-end gap-2.5 h-40">
                        {[40, 60, 45, 70, 55, 80, 65, 90, 75, 100, 85, 95, 80, 110, 90, 105].map((h, i) => (
                            <motion.div
                                key={i}
                                className="flex-1 bg-primary/20 rounded-t-md border-t-2 border-primary/40 group-hover:bg-primary/30 transition-colors"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                            />
                        ))}
                    </div>
                    <p className="text-[10px] text-text-muted mt-8 font-black uppercase tracking-widest opacity-50">
                        System Stability: Nominal • Latency: 42ms • Resource Load: 64%
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Stats;
