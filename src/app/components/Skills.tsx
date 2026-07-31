import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Wrench,
  Zap,
  Terminal,
  Layers,
  Sparkles
} from 'lucide-react';

type IconType = (props: any) => JSX.Element;

const skillCategories: {
  category: string;
  icon: IconType;
  color: string;
  skills: { name: string; learning?: boolean }[];
}[] = [
  {
    category: 'Programming Languages',
    icon: Code2,
    color: '#00d4ff',
    skills: [
      { name: 'C++' },
      { name: 'Python' },
      { name: 'Embedded C' },
      { name: 'JavaScript' },
    ],
  },
  {
    category: 'IoT & Embedded Systems',
    icon: Cpu,
    color: '#7CFF00',
    skills: [
      { name: 'Arduino' },
      { name: 'Raspberry Pi' },
      { name: 'ESP32/ESP8266' },
      { name: 'Sensor Integration' },
    ],
  },
  {
    category: 'Hardware & PCB Design',
    icon: Wrench,
    color: '#8BE1FF',
    skills: [
      { name: 'PCB Design' },
      { name: 'Circuit Analysis' },
      { name: 'Fabrication' },
      { name: 'Testing & Debug' },
    ],
  },
  {
    category: 'Development Tools',
    icon: Terminal,
    color: '#C0FF00',
    skills: [
      { name: 'Git & GitHub' },
      { name: 'VS Code' },
      { name: 'Arduino IDE' },
      { name: 'Linux/Unix' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: Zap,
    color: '#FF6AF5',
    skills: [
      { name: 'Machine Learning', learning: true },
      { name: 'Deep Learning', learning: true },
      { name: 'Data Analysis', learning: true },
      { name: 'Python ML Libraries', learning: true },
    ],
  },
  {
    category: 'Digital Marketing & Business',
    icon: Layers,
    color: '#FFD36A',
    skills: [
      { name: 'Digital Marketing' },
      { name: 'Project Management' },
      { name: 'Team Leadership' },
      { name: 'Business Strategy' },
    ],
  },
];

function SkillButton({ name, color, learning }: { name: string; color: string; learning?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="px-4 py-3 rounded-xl bg-white/3 border transition-all duration-300 flex items-center justify-between gap-3 cursor-default"
      style={{
        borderColor: hovered ? color : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: hovered ? `${color}12` : 'rgba(255, 255, 255, 0.03)',
        boxShadow: hovered ? `0 4px 20px ${color}15` : 'none'
      }}
    >
      <div className="flex items-center gap-2.5">
        <span 
          className="w-2 h-2 rounded-full shrink-0"
          style={{ 
            backgroundColor: learning ? '#ff6af5' : color,
            boxShadow: `0 0 6px ${learning ? '#ff6af5' : color}`
          }}
        />
        <span className="text-sm font-bold text-gray-200 transition-colors">
          {name}
        </span>
      </div>
      
      {learning && (
        <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#ff6af5]/15 border border-[#ff6af5]/25 text-[#ff6af5]">
          Learning
        </span>
      )}
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#8BE1FF] via-[#FF6AF5] to-[#C0FF00] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Focused on hardware, embedded systems, development tools, and modern AI pipelines.</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const HeaderIcon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative"
              >
                {/* Glowing border effect on hover */}
                <div 
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"
                  style={{ background: `linear-gradient(135deg, ${cat.color}40, transparent)` }}
                />
                
                <div className="relative p-6 rounded-2xl bg-[#0a0a0f]/85 border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="p-2.5 rounded-xl border"
                        style={{ 
                          backgroundColor: `${cat.color}15`, 
                          borderColor: `${cat.color}35`,
                        }}
                      >
                        <HeaderIcon size={20} style={{ color: cat.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-wide">{cat.category}</h3>
                    </div>

                    {/* Skill Lists */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.skills.map((s) => (
                        <SkillButton 
                          key={s.name} 
                          name={s.name} 
                          color={cat.color} 
                          learning={s.learning} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#0b1020]/40 to-[#05060a]/30 border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#FF6AF5]/15 border border-[#FF6AF5]/30 rounded-lg">
                <Sparkles className="text-[#FF6AF5]" size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-100">Learning & Development</h4>
                <p className="text-gray-400 text-sm">Actively expanding my knowledge base in AI algorithms, deep learning, and advanced cloud endpoints.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <div className="px-3.5 py-1.5 rounded-full bg-[#FF6AF5]/10 border border-[#FF6AF5]/20 text-xs font-semibold text-gray-200">AI & Machine Learning</div>
              <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200">Edge Intelligence</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}