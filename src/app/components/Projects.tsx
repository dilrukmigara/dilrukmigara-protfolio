import { motion } from 'motion/react';
import { ExternalLink, Github, Settings, Cpu, Box, Radio, Lightbulb, LineChart } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'PID Controller System',
      description: 'Advanced temperature control system simulation implementing PID algorithms for precise regulation. Features real-time tuning capabilities and comprehensive data visualization for system performance analysis.',
      icon: Settings,
      image: 'https://images.unsplash.com/photo-1651231960369-3c31ab2a490c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmR1aW5vJTIwbWljcm9jb250cm9sbGVyJTIwZWxlY3Ryb25pY3N8ZW58MXx8fHwxNzc1NjQyMjQ5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['C++', 'Control Systems', 'Arduino', 'Sensors', 'Math Modeling'],
      color: '#00d4ff',
      featured: true,
    },
    {
      title: 'Custom PCB Fabrication',
      description: 'Professional multi-layer PCB design and fabrication for embedded systems applications. Includes component selection, schematic design, routing optimization, and rigorous quality testing protocols.',
      icon: Cpu,
      image: 'https://images.unsplash.com/photo-1560165143-fa7e2d9e594c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjBwY2IlMjBkZXNpZ258ZW58MXx8fHwxNzc1NjQyMjUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['PCB Design', 'Eagle/KiCad', 'SMD Assembly', 'Testing', 'Hardware'],
      color: '#c0ff00',
      featured: true,
    },
    {
      title: 'Autonomous Line Following Robot',
      description: 'Intelligent robot implementing IR sensor arrays and decision-making algorithms for autonomous navigation. Features obstacle detection and optimal path-finding capabilities.',
      icon: Box,
      image: 'https://images.unsplash.com/photo-1699602048487-f52024260d3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGF1dG9ub21vdXMlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NTY0MjI1MHww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Arduino', 'C++', 'Sensors', 'Robotics', 'Algorithms'],
      color: '#00d4ff',
      featured: false,
    },
    {
      title: 'IoT Weather Monitoring',
      description: 'Real-time environmental monitoring system with cloud integration. Tracks temperature, humidity, and pressure with data logging and remote access capabilities.',
      icon: Radio,
      image: 'https://images.unsplash.com/photo-1625571705670-38fc39c923ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXNwYmVycnklMjBwaSUyMGlvdCUyMGRldmljZXxlbnwxfHx8fDE3NzU2NDIyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['ESP32', 'IoT', 'Cloud', 'Sensors', 'Data Logging'],
      color: '#c0ff00',
      featured: false,
    },
    {
      title: 'Smart Home Automation',
      description: 'IoT-based home automation system with mobile app control. Features include lighting control, security monitoring, and energy management.',
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1679356505858-bf4129177392?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc3NTU2MDQ0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Raspberry Pi', 'Python', 'MQTT', 'Mobile App', 'IoT'],
      color: '#00d4ff',
      featured: false,
    },
    {
      title: 'Digital Marketing Dashboard',
      description: 'Comprehensive analytics dashboard for Goal Marketing agency. Tracks campaign performance, ROI metrics, and client engagement with real-time insights.',
      icon: LineChart,
      image: 'https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc3NTYzMDE5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Analytics', 'Dashboard', 'Business Intelligence', 'Data Visualization'],
      color: '#c0ff00',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Building Solutions with IoT and Embedded Systems</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {projects.filter(p => p.featured).map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                  {/* Glowing effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"
                    style={{ background: `radial-gradient(circle at top, ${project.color}30, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent"></div>
                      
                      {/* Icon overlay */}
                      <div 
                        className="absolute top-4 left-4 p-3 rounded-xl backdrop-blur-sm"
                        style={{ backgroundColor: `${project.color}20`, borderWidth: '1px', borderColor: `${project.color}50` }}
                      >
                        <Icon size={28} style={{ color: project.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{ 
                              backgroundColor: `${project.color}15`,
                              borderWidth: '1px',
                              borderColor: `${project.color}30`,
                              color: project.color
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex gap-3">
                        <button 
                          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all"
                          style={{ 
                            backgroundColor: `${project.color}20`,
                            borderWidth: '1px',
                            borderColor: `${project.color}50`,
                            color: project.color
                          }}
                        >
                          <ExternalLink size={16} />
                          View Details
                        </button>
                        <button 
                          className="p-2 rounded-lg border border-white/20 hover:border-white/40 transition-all"
                        >
                          <Github size={20} className="text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full">
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{ background: `radial-gradient(circle at top, ${project.color}20, transparent)` }}
                  ></div>

                  <div className="relative z-10">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                      
                      <div 
                        className="absolute top-3 left-3 p-2 rounded-lg backdrop-blur-sm"
                        style={{ backgroundColor: `${project.color}20`, borderWidth: '1px', borderColor: `${project.color}50` }}
                      >
                        <Icon size={20} style={{ color: project.color }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <h3 className="font-bold mb-2" style={{ color: project.color }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded text-xs"
                            style={{ 
                              backgroundColor: `${project.color}15`,
                              color: project.color
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
