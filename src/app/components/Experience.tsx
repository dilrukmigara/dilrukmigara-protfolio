import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'education',
      title: 'B.Sc. in Computer Systems Engineering',
      organization: 'SLIIT - Sri Lanka Institute of Information Technology',
      period: '2023 - Present',
      location: 'Malabe, Sri Lanka',
      description: 'Specializing in IoT, Embedded Systems, and Edge AI. Final-year research on "SecureEdge" — real-time intrusion detection in resource-constrained IoT microcontrollers using TinyML and Transfer Learning.',
      highlights: ['IoT & Embedded Systems', 'TinyML & Edge AI', 'FreeRTOS & ESP-IDF', 'PCB Design & Fabrication', 'Embedded C/C++'],
      color: '#00d4ff',
    },
    {
      type: 'work',
      title: 'Co-Founder & Managing Director',
      organization: 'Goal Marketing',
      period: '2022 - Present',
      location: 'Digital Marketing Agency',
      description: 'Leading a digital marketing agency specializing in data-driven strategies and brand growth',
      highlights: ['Business Strategy', 'Team Leadership', 'Client Management', 'Digital Marketing'],
      color: '#c0ff00',
    },
    {
      type: 'work',
      title: 'Owner & Tuition Master',
      organization: 'Mathsbook (O/L Mathematics Academy)',
      period: '2024 - Present',
      location: 'Sri Lanka / Online',
      description: 'Conducting structured O/L Mathematics classes. Managing the mathsbook online learning system to track student progress, share homework, and offer online tests.',
      highlights: ['Maths Instruction', 'Curriculum Design', 'E-Learning Platform', 'Student Mentoring'],
      color: '#ffaa00',
      website: 'https://mathsbook.dilrukmigara.me',
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Experience & Education
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My Journey in Engineering, Business, and Education</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full flex flex-col justify-between">
                {/* Glowing border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle at top left, ${exp.color}30, transparent)` }}
                ></div>
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon */}
                    <div className="mb-6">
                      <div 
                        className="inline-flex p-3 rounded-xl border"
                        style={{ backgroundColor: `${exp.color}20`, borderColor: `${exp.color}40` }}
                      >
                        {exp.type === 'education' ? (
                          <GraduationCap size={32} style={{ color: exp.color }} />
                        ) : (
                          <Briefcase size={32} style={{ color: exp.color }} />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-2" style={{ color: exp.color }}>
                      {exp.title}
                    </h3>
                    <p className="text-xl text-white mb-4">{exp.organization}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-gray-400 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">{exp.description}</p>
                  </div>

                  <div>
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
                          style={{ 
                            backgroundColor: `${exp.color}15`,
                            borderWidth: '1px',
                            borderColor: `${exp.color}30`,
                            color: exp.color
                          }}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Action website link */}
                    {exp.website && (
                      <div className="mt-4 pt-4 border-t border-white/5">
                        <a 
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer hover:bg-opacity-80 border"
                          style={{ 
                            backgroundColor: `${exp.color}20`,
                            borderColor: `${exp.color}40`,
                            color: exp.color
                          }}
                        >
                          Visit O/L Platform
                          <ExternalLink size={14} />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dual-Threat Identity Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 relative"
        >
          <div className="relative bg-gradient-to-r from-[#00d4ff]/10 to-[#c0ff00]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-3">
                The <span className="text-[#00d4ff]">Dual-Threat</span> Engineer
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Combining technical expertise in <span className="text-[#00d4ff] font-semibold">IoT & Embedded Systems</span> with 
                strategic business acumen as a <span className="text-[#c0ff00] font-semibold">Digital Marketing Agency Founder</span> and educational leader. 
                I bring a unique perspective that bridges hardware innovation, market strategy, and software execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
