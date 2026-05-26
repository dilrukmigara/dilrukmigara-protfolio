import { motion } from 'motion/react';
import {
  Code2,
  Cpu,
  Wrench,
  Zap,
  Terminal,
  Layers,
  Smile,
  GitBranch,
} from 'lucide-react';

type IconType = (props: any) => JSX.Element;

const skillCategories: {
  category: string;
  icon: IconType;
  color: string;
  skills: { name: string; icon?: IconType; learning?: boolean }[];
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

function SkillBadge({ name, color, Icon, learning }: { name: string; color: string; Icon?: IconType; learning?: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative flex flex-col items-center justify-center gap-3 p-4 rounded-2xl bg-white/3 border border-white/6 backdrop-blur-md hover:shadow-[0_6px_30px_rgba(0,0,0,0.6)] transition-shadow duration-300"
    >
      <div className="relative">
        {/* Neon glow ring */}
        <div
          className={`absolute -inset-1 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          style={{ boxShadow: `0 6px 40px ${color}66` }}
        />

        <div className="relative flex items-center justify-center">
          <div
            className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-black/30 to-white/5 border border-white/10`}
            style={{ boxShadow: `inset 0 -6px 18px rgba(0,0,0,0.6), 0 6px 30px ${color}30` }}
          >
            {Icon ? <Icon size={22} style={{ color }} /> : <Smile size={20} style={{ color }} />}
          </div>

          {learning && (
            <span className="absolute -right-2 -top-2 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-transparent ring-2" style={{ boxShadow: `0 0 8px ${color}` }} />
            </span>
          )}
        </div>
      </div>

      <div className="text-center">
        <div className="text-sm font-semibold text-gray-100">{name}</div>
        {learning ? (
          <div className="mt-1 text-xs text-[#cbd5ff] flex items-center justify-center gap-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-white/6 border border-white/8">Currently Learning</span>
          </div>
        ) : (
          <div className="mt-1 text-xs text-gray-400">Proficient</div>
        )}
      </div>
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-[#8BE1FF] via-[#FF6AF5] to-[#C0FF00] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Focused on hardware, embedded systems, and modern AI tooling — presented with a dark, futuristic aesthetic.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => {
            const HeaderIcon = cat.icon;
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-gradient-to-b from-white/3 to-white/2 border border-white/6 backdrop-blur-md hover:shadow-[0_15px_50px_rgba(0,0,0,0.6)] transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg" style={{ background: `${cat.color}18` }}>
                        <HeaderIcon size={20} style={{ color: cat.color }} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-100">{cat.category}</h3>
                    </div>
                    <div className="text-sm text-gray-400">{cat.skills.length} items</div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {cat.skills.map((s) => (
                      <SkillBadge key={s.name} name={s.name} color={cat.color} learning={!!s.learning} />
                    ))}
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
          className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-[#0b1020]/40 to-[#05060a]/30 border border-white/6 backdrop-blur-sm"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-semibold text-gray-100">Learning & Interests</h4>
              <p className="text-gray-400 text-sm">Actively sharpening AI & ML skills — expect continual improvements and hands-on projects.</p>
            </div>

            <div className="flex gap-3">
              <div className="px-3 py-2 rounded-full bg-gradient-to-r from-[#FF6AF5]/20 to-[#8BE1FF]/10 border border-white/6 text-sm text-gray-200">AI & ML — Currently Learning</div>
              <div className="px-3 py-2 rounded-full bg-white/3 border border-white/6 text-sm text-gray-200">IoT & Edge</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}