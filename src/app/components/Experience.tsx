import { motion } from 'motion/react';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'education',
      title: 'B.Sc. in Computer Systems Engineering',
      organization: 'SLIIT - Sri Lanka Institute of Information Technology',
      period: '2023 - Present',
      location: 'Malabe, Sri Lanka',
      description: 'Specializing in IoT, Embedded Systems, and Digital Circuit Design',
      highlights: ['IoT Development', 'PCB Design & Fabrication', 'Embedded C/C++', 'Digital Systems'],
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
          <p className="text-gray-400 text-lg">My Journey in Engineering and Business</p>
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
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
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 h-full">
                {/* Glowing border on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                  style={{ background: `radial-gradient(circle at top left, ${exp.color}30, transparent)` }}
                ></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className="inline-flex p-3 rounded-xl"
                      style={{ backgroundColor: `${exp.color}20`, borderColor: `${exp.color}50` }}
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

                  <p className="text-gray-300 mb-6">{exp.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: `${exp.color}20`,
                          borderWidth: '1px',
                          borderColor: `${exp.color}40`,
                          color: exp.color
                        }}
                      >
                        {highlight}
                      </span>
                    ))}
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
                strategic business acumen as a <span className="text-[#c0ff00] font-semibold">Digital Marketing Agency Founder</span>. 
                I bring a unique perspective that bridges hardware innovation and market strategy.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
