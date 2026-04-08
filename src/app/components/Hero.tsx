import { motion } from 'motion/react';
import { Download, ArrowRight, Linkedin, Mail, MessageCircle } from 'lucide-react';
import profileImage from '../../assets/85c8e988547fd7b02b3123173cd649752ad2e2d2.png';

export function Hero() {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/D.M Wickramarachchi.pdf';
    link.download = 'Dilruk_Migara_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00d4ff]/20 to-[#c0ff00]/20 border border-[#00d4ff]/30 text-[#00d4ff] text-sm font-medium">
                IoT Engineer & Digital Marketing Strategist
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#00d4ff] to-[#c0ff00] bg-clip-text text-transparent">
                Dilruk Migara
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-400 leading-relaxed"
            >
              A detail-oriented <span className="text-[#00d4ff] font-semibold">Computer Systems Engineering</span> undergraduate at SLIIT, specializing in{' '}
              <span className="text-[#c0ff00] font-semibold">IoT and Embedded Systems</span>. As Co-Founder of Goal Marketing, I bridge the gap between cutting-edge technology and strategic business solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group px-6 py-3 bg-gradient-to-r from-[#00d4ff] to-[#0099cc] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#00d4ff]/50 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <button
                onClick={handleDownloadCV}
                className="group px-6 py-3 bg-white/5 backdrop-blur-sm border border-[#00d4ff]/30 rounded-lg font-semibold hover:bg-white/10 hover:border-[#00d4ff]/50 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={20} />
                Download Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="https://www.linkedin.com/in/dilruk-migara-wickramarachchi-617b5b308/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300"
              >
                <Linkedin size={20} className="text-[#00d4ff]" />
              </a>
              <a
                href="https://wa.me/94779780053"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 backdrop-blur-sm border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300"
              >
                <MessageCircle size={20} className="text-[#00d4ff]" />
              </a>
              <a
                href="mailto:dilrukmigara@gmail.com"
                className="p-3 bg-white/5 backdrop-blur-sm border border-[#00d4ff]/30 rounded-lg hover:bg-[#00d4ff]/20 hover:border-[#00d4ff]/50 transition-all duration-300"
              >
                <Mail size={20} className="text-[#00d4ff]" />
              </a>
            </motion.div>
          </motion.div>

          

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glowing border effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00d4ff] to-[#c0ff00] rounded-2xl blur-2xl opacity-30"></div>
              
              {/* Image container with glassmorphism */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-[#00d4ff]/30 rounded-2xl p-2 overflow-hidden">
                <div className="w-full aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2f]">
                  <img
                    src={profileImage}
                    alt="Dilruk Migara"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}