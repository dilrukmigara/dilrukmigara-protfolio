import { motion } from 'motion/react';
import { Award, Users, Trophy, Target, Shield, Star } from 'lucide-react';

export function Leadership() {
  const timeline = [
    {
      year: '2023 - Present',
      title: 'Vice President',
      organization: 'CSE Student Community - SLIIT',
      description: 'Leading student initiatives, organizing technical workshops, and fostering a collaborative learning environment for 500+ engineering students.',
      icon: Users,
      color: '#00d4ff',
    },
    {
      year: '2022 - Present',
      title: 'Co-Founder & Managing Director',
      organization: 'Goal Marketing',
      description: 'Building and scaling a digital marketing agency, managing client relationships, and leading a team of creative professionals.',
      icon: Target,
      color: '#c0ff00',
    },
    {
      year: '2020 - 2022',
      title: 'Company Sergeant Major',
      organization: 'National Cadet Corps',
      description: 'Demonstrated exceptional leadership in military training, discipline, and team coordination. Led drill parades and mentored junior cadets.',
      icon: Shield,
      color: '#00d4ff',
    },
    {
      year: '2018 - 2020',
      title: 'Senior Prefect',
      organization: 'School Leadership',
      description: 'Served as a role model for students, organized school events, and maintained discipline while fostering a positive learning environment.',
      icon: Star,
      color: '#c0ff00',
    },
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Leadership Excellence',
      description: 'Recognized for outstanding leadership in both academic and military settings',
      color: '#00d4ff',
    },
    {
      icon: Award,
      title: 'Community Impact',
      description: 'Organized 15+ technical workshops and mentored 100+ students',
      color: '#c0ff00',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Successfully built and managed cross-functional teams in various capacities',
      color: '#00d4ff',
    },
  ];

  return (
    <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050508]">
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
              Beyond Engineering
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Leadership, Sports & Community Service</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d4ff] via-[#c0ff00] to-[#00d4ff] opacity-30"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative flex gap-6"
                  >
                    {/* Icon */}
                    <div className="relative z-10">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-sm border-2"
                        style={{ 
                          backgroundColor: `${item.color}20`,
                          borderColor: item.color
                        }}
                      >
                        <Icon size={28} style={{ color: item.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="mb-2">
                          <span 
                            className="text-sm font-semibold"
                            style={{ color: item.color }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-gray-400 text-sm mb-3">{item.organization}</p>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 text-center h-full">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `radial-gradient(circle at center, ${achievement.color}20, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    <div 
                      className="inline-flex p-4 rounded-2xl mb-4"
                      style={{ backgroundColor: `${achievement.color}20` }}
                    >
                      <Icon size={32} style={{ color: achievement.color }} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Sports & Activities Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 relative"
        >
          <div className="relative bg-gradient-to-r from-[#00d4ff]/10 to-[#c0ff00]/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">
                <span className="text-[#00d4ff]">Discipline</span> meets{' '}
                <span className="text-[#c0ff00]">Innovation</span>
              </h3>
              <p className="text-gray-300">
                My journey through military training as a Company Sergeant Major has instilled discipline, 
                resilience, and strategic thinking—qualities that drive my engineering projects and business ventures. 
                Combining structured leadership with creative problem-solving to build impactful solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
