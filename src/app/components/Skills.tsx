import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Wrench,
  Zap,
  Terminal,
  Layers,
  Sparkles,
  ShieldCheck,
  Network,
  Activity,
  Gauge,
  BrainCircuit,
  Binary,
  CheckCircle2,
  ChevronDown,
  ChevronsUpDown
} from 'lucide-react';

type IconType = (props: any) => JSX.Element;

interface Skill {
  name: string;
  badge?: 'Research' | 'Learning' | 'Developing';
}

const skillCategories: {
  category: string;
  subtitle: string;
  icon: IconType;
  color: string;
  skills: Skill[];
}[] = [
  {
    category: 'Embedded Systems & Edge Computing',
    subtitle: 'Microcontrollers & Hardware Optimization',
    icon: Cpu,
    color: '#7CFF00',
    skills: [
      { name: 'ESP32 / ESP32-S3' },
      { name: 'Resource-Constrained Devices' },
      { name: 'Embedded System Development' },
      { name: 'Memory & CPU Optimization', badge: 'Research' },
      { name: 'Embedded AI / Edge AI', badge: 'Research' },
      { name: 'Arduino & Raspberry Pi' },
    ],
  },
  {
    category: 'RTOS & Embedded Software',
    subtitle: 'Real-Time Determinism & Concurrency',
    icon: Activity,
    color: '#00d4ff',
    skills: [
      { name: 'FreeRTOS Task Scheduling', badge: 'Research' },
      { name: 'ESP-IDF Framework', badge: 'Research' },
      { name: 'Inter-Task Communication', badge: 'Research' },
      { name: 'Queues, Semaphores & Sync', badge: 'Research' },
      { name: 'Real-Time Task Management', badge: 'Research' },
      { name: 'Embedded Performance Tuning', badge: 'Research' },
    ],
  },
  {
    category: 'IoT & Network Engineering',
    subtitle: 'Protocols, Connectivity & Packet Analysis',
    icon: Network,
    color: '#8BE1FF',
    skills: [
      { name: 'IoT Network Architecture' },
      { name: 'MQTT & IoT Protocols' },
      { name: 'Wi-Fi & TCP/IP Fundamentals' },
      { name: 'Network Traffic Monitoring', badge: 'Research' },
      { name: 'Packet Analysis (Wireshark)', badge: 'Research' },
      { name: 'Traffic Feature Extraction', badge: 'Research' },
    ],
  },
  {
    category: 'Cybersecurity & Intrusion Detection',
    subtitle: 'NIDS, Threat Analysis & Anomaly Detection',
    icon: ShieldCheck,
    color: '#FF5E7E',
    skills: [
      { name: 'Network IDS (NIDS)', badge: 'Research' },
      { name: 'Anomaly Detection', badge: 'Research' },
      { name: 'DoS / DDoS Detection', badge: 'Research' },
      { name: 'Port Scanning Detection', badge: 'Research' },
      { name: 'Network Attack Analysis', badge: 'Research' },
      { name: 'IoT Cybersecurity Hardening', badge: 'Research' },
    ],
  },
  {
    category: 'TinyML & Edge AI',
    subtitle: 'Microcontroller ML Deployment & Quantization',
    icon: BrainCircuit,
    color: '#FF6AF5',
    skills: [
      { name: 'TinyML' },
      { name: 'LiteRT Micro / TFLite Micro', badge: 'Research' },
      { name: 'Microcontroller ML Deployment', badge: 'Research' },
      { name: 'Model Quantization (INT8)', badge: 'Research' },
      { name: 'Lightweight Neural Net Design', badge: 'Research' },
      { name: 'RAM, Flash & Latency Profiling', badge: 'Research' },
    ],
  },
  {
    category: 'Machine & Adaptive Learning',
    subtitle: 'Deep Learning, Transfer & Continual Learning',
    icon: Zap,
    color: '#A78BFA',
    skills: [
      { name: '1D-CNN / Deep Learning', badge: 'Research' },
      { name: 'Transfer Learning & Fine-Tuning', badge: 'Research' },
      { name: 'Incremental & Continual Learning', badge: 'Research' },
      { name: 'ML for Cybersecurity', badge: 'Research' },
      { name: 'Feature Engineering & Classification', badge: 'Research' },
      { name: 'Metrics (Precision, Recall, F1)', badge: 'Research' },
    ],
  },
  {
    category: 'Core Programming & Hardware',
    subtitle: 'Languages, Circuit Analysis & Fabrication',
    icon: Code2,
    color: '#38BDF8',
    skills: [
      { name: 'Embedded C' },
      { name: 'C++' },
      { name: 'Python' },
      { name: 'PCB Design & Fabrication' },
      { name: 'Circuit Testing & Debugging' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'Tools, Benchmarking & Strategy',
    subtitle: 'Engineering Workflows & Business Acumen',
    icon: Terminal,
    color: '#FFD36A',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'Linux / Unix CLI' },
      { name: 'Embedded AI Benchmarking', badge: 'Research' },
      { name: 'Digital Marketing Strategy' },
      { name: 'Project Management' },
      { name: 'Cross-Functional Leadership' },
    ],
  },
];

function SkillButton({ name, color, badge }: { name: string; color: string; badge?: Skill['badge'] }) {
  const [hovered, setHovered] = useState(false);

  const getBadgeStyle = (b: Skill['badge']) => {
    switch (b) {
      case 'Research':
        return 'bg-[#00d4ff]/15 border-[#00d4ff]/35 text-[#00d4ff] shadow-[0_0_8px_rgba(0,212,255,0.15)]';
      case 'Learning':
        return 'bg-[#ff6af5]/15 border-[#ff6af5]/30 text-[#ff6af5]';
      case 'Developing':
        return 'bg-[#c0ff00]/15 border-[#c0ff00]/30 text-[#c0ff00]';
      default:
        return '';
    }
  };

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className="px-3.5 py-2.5 rounded-xl bg-white/[0.03] border transition-all duration-200 flex items-center justify-between gap-2.5 cursor-default"
      style={{
        borderColor: hovered ? color : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: hovered ? `${color}12` : 'rgba(255, 255, 255, 0.03)',
        boxShadow: hovered ? `0 4px 20px ${color}15` : 'none',
      }}
    >
      <div className="flex items-center gap-2 min-w-0">
        <span
          className="w-2 h-2 rounded-full shrink-0"
          style={{
            backgroundColor: badge === 'Research' ? '#00d4ff' : badge === 'Learning' ? '#ff6af5' : color,
            boxShadow: `0 0 6px ${badge === 'Research' ? '#00d4ff' : badge === 'Learning' ? '#ff6af5' : color}`,
          }}
        />
        <span className="text-xs sm:text-sm font-semibold text-gray-200 transition-colors truncate">
          {name}
        </span>
      </div>

      {badge && (
        <span
          className={`text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded border shrink-0 ${getBadgeStyle(
            badge
          )}`}
        >
          {badge}
        </span>
      )}
    </motion.div>
  );
}

export function Skills() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  const allExpanded = skillCategories.every((cat) => !!expandedCategories[cat.category]);

  const toggleAll = () => {
    if (allExpanded) {
      setExpandedCategories({});
    } else {
      const next: Record<string, boolean> = {};
      skillCategories.forEach((cat) => {
        next[cat.category] = true;
      });
      setExpandedCategories(next);
    }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/25 text-[#00d4ff] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Technical Profile & Research Expansion</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8BE1FF] via-[#FF6AF5] to-[#C0FF00] bg-clip-text text-transparent">
              Technical Skills & Research Competencies
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto">
            Grounded in embedded systems, RTOS, and hardware engineering — actively expanding into Edge AI,
            TinyML, network cybersecurity, and adaptive machine learning.
          </p>

          {/* Legend & Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-4 border-t border-white/5 max-w-4xl mx-auto text-xs text-gray-400">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#7CFF00] shadow-[0_0_6px_#7CFF00]" />
                <span className="text-gray-300">Core Engineering Skill</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#00d4ff]/15 border border-[#00d4ff]/35 text-[#00d4ff]">
                  Research
                </span>
                <span className="text-gray-300">SecureEdge Final-Year Focus</span>
              </div>
            </div>

            <button
              onClick={toggleAll}
              type="button"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/[0.04] hover:bg-white/[0.09] text-gray-300 hover:text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer shadow-sm ml-auto"
            >
              <ChevronsUpDown size={14} className="text-[#00d4ff]" />
              <span>{allExpanded ? 'Collapse All Sides' : 'Expand All Points'}</span>
            </button>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 items-start">
          {skillCategories.map((cat, i) => {
            const HeaderIcon = cat.icon;
            const isExpanded = !!expandedCategories[cat.category];

            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className="group relative"
              >
                {/* Glowing border effect on hover */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
                  style={{ background: `linear-gradient(135deg, ${cat.color}40, transparent)` }}
                />

                <div className="relative p-5 rounded-2xl bg-[#0a0a0f]/90 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Header / Side covered */}
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => toggleCategory(cat.category)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          toggleCategory(cat.category);
                        }
                      }}
                      className="cursor-pointer select-none"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="p-2.5 rounded-xl border shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105"
                          style={{
                            backgroundColor: `${cat.color}15`,
                            borderColor: `${cat.color}35`,
                          }}
                        >
                          <HeaderIcon size={18} style={{ color: cat.color }} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                            {cat.category}
                          </h3>
                          <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">{cat.subtitle}</p>
                        </div>
                      </div>

                      {/* Side overview pill & toggle indicator */}
                      <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                        <span className="text-[11px] font-medium text-gray-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/5">
                          {cat.skills.length} Key Points
                        </span>

                        <div
                          className="inline-flex items-center gap-1 text-[11px] font-semibold transition-colors duration-200"
                          style={{ color: isExpanded ? cat.color : '#9ca3af' }}
                        >
                          <span>{isExpanded ? 'See less' : 'See more'}</span>
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-300"
                            style={{
                              transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Collapsible Dropdown Skill List */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="skills-list"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 flex flex-col gap-2">
                            {cat.skills.map((s) => (
                              <SkillButton
                                key={s.name}
                                name={s.name}
                                color={cat.color}
                                badge={s.badge}
                              />
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Research Deep-Dive Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 relative overflow-hidden rounded-3xl border border-[#00d4ff]/30 bg-gradient-to-br from-[#080d1a] via-[#05070e] to-[#0d0714] p-6 sm:p-8 backdrop-blur-xl"
        >
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00d4ff]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF6AF5]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            {/* Header / Meta */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00d4ff]/15 border border-[#00d4ff]/35 text-[#00d4ff] flex items-center gap-1.5">
                    <ShieldCheck size={13} />
                    Active Final-Year Research
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    SLIIT Department of Computer Systems Engineering
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
                  SecureEdge:{' '}
                  <span className="bg-gradient-to-r from-[#00d4ff] via-[#8BE1FF] to-[#c0ff00] bg-clip-text text-transparent">
                    Transfer Learning & Incremental TinyML for Real-Time Intrusion Detection
                  </span>
                </h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-4xl">
                  Developing an intelligent, resource-conscious Network Intrusion Detection System (NIDS) operating directly on edge microcontrollers (ESP32-S3) under real-time RTOS constraints.
                </p>
              </div>

              <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                  <span className="text-gray-400">Target Target:</span> ESP32-S3 (FreeRTOS)
                </div>
                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300">
                  <span className="text-gray-400">Engine:</span> LiteRT / TFLite Micro
                </div>
              </div>
            </div>

            {/* 4 Research Pillars */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              {/* Pillar 1 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#7CFF00]/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#7CFF00]">
                  <Activity size={16} />
                  <h4 className="text-sm font-bold text-white">Edge & RTOS Architecture</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  ESP32-S3 system design leveraging FreeRTOS preemptive task scheduling, inter-task queues, and strict memory/Flash footprint optimization.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['FreeRTOS', 'ESP-IDF', 'Queues & Semaphores', 'SRAM Optimization'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#7CFF00]/10 text-[#7CFF00] border border-[#7CFF00]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF5E7E]/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#FF5E7E]">
                  <ShieldCheck size={16} />
                  <h4 className="text-sm font-bold text-white">Cybersecurity & NIDS</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Packet-level traffic analysis, flow feature extraction, and real-time detection of DoS/DDoS attacks and stealth port scanning in IoT networks.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Network IDS', 'DoS/DDoS Detection', 'Port Scans', 'Wireshark'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#FF5E7E]/10 text-[#FF5E7E] border border-[#FF5E7E]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#FF6AF5]/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#FF6AF5]">
                  <BrainCircuit size={16} />
                  <h4 className="text-sm font-bold text-white">TinyML & 1D-CNN Inference</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Lightweight 1D-CNN topologies, post-training INT8 quantization, and ultra-low-latency deployment using LiteRT Micro on microcontrollers.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['1D-CNN', 'LiteRT Micro', 'INT8 Quantization', 'Inference Speed'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#FF6AF5]/10 text-[#FF6AF5] border border-[#FF6AF5]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pillar 4 */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#00d4ff]/40 transition-all">
                <div className="flex items-center gap-2 mb-2 text-[#00d4ff]">
                  <Gauge size={16} />
                  <h4 className="text-sm font-bold text-white">Adaptive Learning & Validation</h4>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  Transfer learning across diverse IoT environments and incremental learning for new threat vectors without full retraining, benchmarked against real hardware.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Transfer Learning', 'Continual Learning', 'Latency & Power', 'F1-Score / Matrix'].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] bg-[#00d4ff]/10 text-[#00d4ff] border border-[#00d4ff]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}