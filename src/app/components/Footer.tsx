import { motion } from 'motion/react';
import { Mail, Linkedin, MessageCircle, Twitter, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-3">
              <span className="text-[#00d4ff]">Dilruk</span>
              <span className="text-[#c0ff00]"> Migara</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">
              Computer Systems Engineering undergraduate passionate about IoT, Embedded Systems, 
              and building innovative solutions that bridge hardware and software.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-[#00d4ff]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#leadership" className="text-gray-400 hover:text-[#00d4ff] transition-colors">
                  Leadership
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-[#c0ff00]">Get In Touch</h4>
            <p className="text-gray-400 text-sm mb-4">
              Let's collaborate on innovative IoT projects or discuss digital marketing strategies.
            </p>
            <div className="flex gap-3">
              <a
                href="mailto:dilrukmigara@gmail.com"
                className="p-2 bg-white/5 border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <Mail size={20} className="text-[#00d4ff]" />
              </a>
              <a
                href="https://www.linkedin.com/in/dilruk-migara-wickramarachchi-617b5b308/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <Linkedin size={20} className="text-[#00d4ff]" />
              </a>
              <a
                href="https://wa.me/94779780053"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <MessageCircle size={20} className="text-[#00d4ff]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/5 border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all"
              >
                <Twitter size={20} className="text-[#00d4ff]" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Dilruk Migara. Built with React & Tailwind CSS
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 bg-gradient-to-r from-[#00d4ff] to-[#c0ff00] rounded-lg hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all group"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
