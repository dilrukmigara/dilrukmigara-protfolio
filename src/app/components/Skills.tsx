import { motion } from 'motion/react';
import { Code2, Cpu, Wrench, Zap, Terminal, Layers } from 'lucide-react';
import { useState } from 'react';

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: Code2,
      color: '#00d4ff',
      skills: [
        { name: 'C++', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Embedded C', level: 88 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      category: 'IoT & Embedded Systems',
      icon: Cpu,
      color: '#c0ff00',
      skills: [
        { name: 'Arduino', level: 95 },
        { name: 'Raspberry Pi', level: 90 },
        { name: 'ESP32/ESP8266', level: 85 },
        { name: 'Sensor Integration', level: 92 },
      ],
    },
    {
      category: 'Hardware & PCB Design',
      icon: Wrench,
      color: '#00d4ff',
      skills: [
        { name: 'PCB Design', level: 80 },
        { name: 'Circuit Analysis', level: 85 },
        { name: 'Fabrication', level: 75 },
        { name: 'Testing & Debug', level: 88 },
      ],
    },
    {
      category: 'Development Tools',
      icon: Terminal,
      color: '#c0ff00',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Arduino IDE', level: 95 },
        { name: 'Linux/Unix', level: 80 },
      ],
    },
    {
      category: 'AI & Machine Learning',
      icon: Zap,
      color: '#00d4ff',
      skills: [
        { name: 'Machine Learning', level: 45 },
        { name: 'Deep Learning', level: 40 },
        { name: 'Data Analysis', level: 60 },
        { name: 'Python ML Libraries', level: 50 },
      ],
    },
    {
      category: 'Digital Marketing & Business',
      icon: Layers,
      color: '#c0ff00',
      skills: [
        { name: 'Digital Marketing', level: 90 },
        { name: 'Project Management', level: 87 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Business Strategy', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#00d4ff] to-[#c0ff00] bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Expertise across Hardware and Software</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  {/* Glowing effect on hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `radial-gradient(circle at top, ${category.color}20, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="p-2 rounded-lg"
                        style={{ backgroundColor: `${category.color}20` }}
                      >
                        <Icon size={24} style={{ color: category.color }} />
                      </div>
                      <h3 className="font-bold text-lg">{category.category}</h3>
                    </div>

                    {/* Skills */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skillIndex}
                          onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                            <span className="text-xs text-gray-500">{skill.level}%</span>
                          </div>
                          <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                              className="h-full rounded-full relative"
                              style={{ 
                                background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`,
                                boxShadow: hoveredSkill === `${categoryIndex}-${skillIndex}` 
                                  ? `0 0 10px ${category.color}` 
                                  : 'none'
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Interests & Learning Section */}
      <div className="max-w-7xl mx-auto mt-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-r from-[#00d4ff]/10 to-[#c0ff00]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-[#00d4ff]">Current Learning</span> &{' '}
              <span className="text-[#c0ff00]">Interests</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Actively exploring the intersection of IoT and Artificial Intelligence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-[#00d4ff]/20 border border-[#00d4ff]/40 rounded-xl">
                <span className="text-[#00d4ff] font-semibold">🤖 Machine Learning</span>
                <span className="text-gray-400 text-sm ml-2">(Learning)</span>
              </div>
              <div className="px-6 py-3 bg-[#c0ff00]/20 border border-[#c0ff00]/40 rounded-xl">
                <span className="text-[#c0ff00] font-semibold">🧠 Deep Learning</span>
                <span className="text-gray-400 text-sm ml-2">(Learning)</span>
              </div>
              <div className="px-6 py-3 bg-[#00d4ff]/20 border border-[#00d4ff]/40 rounded-xl">
                <span className="text-[#00d4ff] font-semibold">📊 Data Science</span>
                <span className="text-gray-400 text-sm ml-2">(Interest)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}