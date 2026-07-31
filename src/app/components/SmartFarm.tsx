import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, Github, Linkedin, Cpu, Thermometer, Droplets, Sun, 
  Activity, Database, AlertCircle, RefreshCw, Sliders, ToggleLeft, 
  ToggleRight, CloudRain, Camera, Server, Monitor, Wifi, CheckCircle2, 
  ArrowRight, Maximize2, Zap 
} from 'lucide-react';
import smartfarmImage from '../../assets/smartfarm1.jpeg';
import esp32SystemDiagram from '../../assets/esp32_system_diagram.jpg';
import esp32CamDiagram from '../../assets/esp32_cam_diagram.jpg';
import flaskBackendDiagram from '../../assets/flask_backend_diagram.jpg';
import confetti from 'canvas-confetti';

export function SmartFarm() {
  const [isWaterPumpOn, setIsWaterPumpOn] = useState(false);
  const [isAIAutoMode, setIsAIAutoMode] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleTimeString());
  const [activeDiagTab, setActiveDiagTab] = useState<'system' | 'cam' | 'backend'>('system');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const [metrics, setMetrics] = useState({
    temp: 26.8,
    soil: 68,
    humidity: 74,
    light: 820,
    rain: false,
  });

  // Simulate real-time metric updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => {
        const tempDiff = (Math.random() - 0.5) * 0.4;
        const soilDiff = isWaterPumpOn 
          ? (Math.random() * 1.5) 
          : (Math.random() - 0.6) * 0.5;
        const humDiff = (Math.random() - 0.5) * 0.8;
        const lightDiff = (Math.random() - 0.5) * 15;
        const rainChance = Math.random() > 0.85;

        return {
          temp: Math.min(Math.max(Number((prev.temp + tempDiff).toFixed(1)), 15), 45),
          soil: Math.min(Math.max(Number((prev.soil + soilDiff).toFixed(0)), 0), 100),
          humidity: Math.min(Math.max(Number((prev.humidity + humDiff).toFixed(0)), 10), 100),
          light: Math.min(Math.max(Number((prev.light + lightDiff).toFixed(0)), 0), 2000),
          rain: rainChance ? !prev.rain : prev.rain,
        };
      });
      setLastUpdated(new Date().toLocaleTimeString());
    }, 4000);

    return () => clearInterval(interval);
  }, [isWaterPumpOn]);

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new Event('popstate'));
    window.scrollTo(0, 0);
  };

  const handlePumpToggle = () => {
    const nextState = !isWaterPumpOn;
    setIsWaterPumpOn(nextState);
    if (nextState) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#00ff88', '#00d4ff', '#ffffff']
      });
    }
  };

  const diagrams = {
    system: {
      title: 'System Logic & Microcontroller Layer',
      desc: 'Schematic layout detailing the ESP32 connection interfaces, PIR sensor distribution, rain/soil telemetry pipelines, and stepper motor control wiring.',
      img: esp32SystemDiagram
    },
    cam: {
      title: 'AI Surveillance & Camera Node',
      desc: 'Architecture flow of the ESP32-CAM capturing visual frames and transmitting binary streams directly to the server endpoint over HTTP POST.',
      img: esp32CamDiagram
    },
    backend: {
      title: 'Flask REST API & Storage Pipeline',
      desc: 'Comprehensive visual map of endpoints, processing validation layers, database transactions using SQLAlchemy ORM, and dashboard data streaming structures.',
      img: flaskBackendDiagram
    }
  };

  const techStack = {
    embedded: ['ESP32', 'ESP32-CAM', 'Arduino Framework'],
    backend: ['Flask (Python)', 'REST API'],
    frontend: ['HTML', 'CSS', 'JavaScript'],
    database: ['SQLite / MySQL', 'SQLAlchemy ORM'],
    communication: ['HTTP', 'Wi-Fi', 'JSON exchange'],
    hardware: ['PIR Motion Sensors', 'DHT11 Temp/Humidity Sensor', 'Capacitive Soil Moisture Sensor', 'Rain Sensor', '28BYJ-48 Stepper Motor', 'ULN2003 Driver']
  };

  const roleTasks = [
    'Designed the complete IoT system architecture and circuit logic',
    'Developed the custom ESP32 firmware using C++ / Arduino',
    'Integrated and calibrated multiple environmental sensors for high accuracy',
    'Implemented motion-based edge automation logic for the stepper motor actuator',
    'Developed a Flask backend supporting multi-client telemetry ingestion',
    'Connected embedded nodes to securely upload sensor streams and image data',
    'Built the responsive web dashboard for real-time tracking and metrics visualization',
    'Tested, calibrated, and optimized Wi-Fi connectivity and package delivery success rate'
  ];

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Back button */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8"
      >
        <a 
          href="/" 
          onClick={handleBackToHome}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00ff88] transition-colors group cursor-pointer"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={20} />
          <span>Back to Portfolio</span>
        </a>
      </motion.div>

      {/* Main Title & CTA Header */}
      <div className="grid lg:grid-cols-12 gap-8 items-start mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-[#00ff88] text-xs font-semibold uppercase tracking-wider">
            <Cpu size={14} /> Full-Stack IoT Application
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            🚀 Smart IoT & AI-Based{' '}
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00d4ff] bg-clip-text text-transparent block mt-1">
              Environmental Monitoring System
            </span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed">
            The <strong>Smart IoT & AI-Based Environmental Monitoring System</strong> is an intelligent monitoring platform that integrates IoT devices, embedded systems, and a web-based backend to provide real-time environmental monitoring and automated control. The system uses ESP32 and ESP32-CAM microcontrollers to collect sensor data, detect motion, capture images, and communicate with a Flask-powered backend through Wi-Fi.
          </p>
          <p className="text-gray-400">
            Designed with scalability in mind, the platform demonstrates how hardware and software can seamlessly work together to enable smart automation and remote monitoring.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a 
              href="https://github.com/dilrukmigara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#00ff88]/20 border border-[#00ff88]/40 hover:bg-[#00ff88]/30 rounded-xl font-semibold text-[#00ff88] transition-all hover:shadow-lg hover:shadow-[#00ff88]/10 cursor-pointer"
            >
              <Github size={20} />
              GitHub Repository
            </a>
            <a 
              href="https://lnkd.in/g4K-Rxme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl font-semibold text-gray-300 transition-all cursor-pointer"
            >
              <Linkedin size={20} className="text-[#00d4ff]" />
              LinkedIn Details
            </a>
          </div>
        </motion.div>

        {/* Hero image preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-4 relative mt-4 lg:mt-0"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-2xl blur-xl opacity-25"></div>
          <div className="relative bg-white/5 backdrop-blur-md border border-white/15 rounded-2xl p-2.5 overflow-hidden group">
            <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-900">
              <img 
                src={smartfarmImage} 
                alt="Smart Farm IoT System" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* System Architecture Flow Diagram */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-16"
      >
        <h3 className="font-bold text-xl text-white mb-6 text-center sm:text-left flex items-center gap-2">
          <Zap className="text-[#00ff88]" size={20} />
          System Architecture & Data Flow
        </h3>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
          {/* Node 1 */}
          <div className="flex flex-col items-center p-4 rounded-lg bg-slate-900/60 border border-[#00ff88]/30 w-full lg:w-44 text-center">
            <Cpu className="text-[#00ff88] mb-2" size={24} />
            <div className="font-bold text-sm">ESP32 Clusters</div>
            <div className="text-[10px] text-gray-400 mt-1">ESP32 & ESP32-CAM</div>
          </div>

          <ArrowRight className="text-gray-500 rotate-90 lg:rotate-0" size={20} />

          {/* Node 2 */}
          <div className="flex flex-col items-center p-4 rounded-lg bg-slate-900/60 border border-[#00d4ff]/30 w-full lg:w-44 text-center">
            <Wifi className="text-[#00d4ff] mb-2" size={24} />
            <div className="font-bold text-sm">Wireless Transmit</div>
            <div className="text-[10px] text-gray-400 mt-1">Wi-Fi & HTTP API</div>
          </div>

          <ArrowRight className="text-gray-500 rotate-90 lg:rotate-0" size={20} />

          {/* Node 3 */}
          <div className="flex flex-col items-center p-4 rounded-lg bg-slate-900/60 border border-purple-500/30 w-full lg:w-44 text-center">
            <Server className="text-purple-400 mb-2" size={24} />
            <div className="font-bold text-sm">Flask Backend</div>
            <div className="text-[10px] text-gray-400 mt-1">RESTful Ingestion API</div>
          </div>

          <ArrowRight className="text-gray-500 rotate-90 lg:rotate-0" size={20} />

          {/* Node 4 */}
          <div className="flex flex-col items-center p-4 rounded-lg bg-slate-900/60 border border-orange-500/30 w-full lg:w-44 text-center">
            <Database className="text-orange-400 mb-2" size={24} />
            <div className="font-bold text-sm">Relational DB</div>
            <div className="text-[10px] text-gray-400 mt-1">SQLite / MySQL</div>
          </div>

          <ArrowRight className="text-gray-500 rotate-90 lg:rotate-0" size={20} />

          {/* Node 5 */}
          <div className="flex flex-col items-center p-4 rounded-lg bg-slate-900/60 border border-[#c0ff00]/30 w-full lg:w-44 text-center">
            <Monitor className="text-[#c0ff00] mb-2" size={24} />
            <div className="font-bold text-sm">Web Dashboard</div>
            <div className="text-[10px] text-gray-400 mt-1">React Telemetry UI</div>
          </div>
        </div>
      </motion.div>

      {/* Interactive System Live Demo / Dashboard */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16 items-stretch">
        
        {/* Live Metrics Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg text-gray-200 flex items-center gap-2">
                <Activity size={18} className="text-[#00ff88]" />
                Live Sensor Telemetry Simulation
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-gray-400">
                <RefreshCw size={12} className="animate-spin text-[#00ff88]" />
                Active
              </div>
            </div>

            {/* Metrics List */}
            <div className="space-y-4">
              {/* Temperature */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20">
                    <Thermometer size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Temperature</div>
                    <div className="font-semibold text-white">{metrics.temp} °C</div>
                  </div>
                </div>
                <div className="text-xs font-semibold px-2 py-0.5 rounded bg-orange-500/10 text-orange-400">Normal</div>
              </div>

              {/* Soil Moisture */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Droplets size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Soil Moisture</div>
                    <div className="font-semibold text-white">{metrics.soil} %</div>
                  </div>
                </div>
                <div className={`text-xs font-semibold px-2 py-0.5 rounded ${
                  metrics.soil < 50 ? 'bg-red-500/10 text-red-400' : 'bg-green-500/10 text-green-400'
                }`}>
                  {metrics.soil < 50 ? 'Dry (Needs Water)' : 'Optimum'}
                </div>
              </div>

              {/* Humidity */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                    <Sliders size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Relative Humidity</div>
                    <div className="font-semibold text-white">{metrics.humidity} %</div>
                  </div>
                </div>
                <div className="text-xs font-semibold px-2 py-0.5 rounded bg-teal-500/10 text-teal-400">Balanced</div>
              </div>

              {/* Rain Status */}
              <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${metrics.rain ? 'bg-blue-500/20 text-[#00d4ff] border border-blue-500/30' : 'bg-slate-500/10 text-gray-400'}`}>
                    <CloudRain size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Rain Sensor</div>
                    <div className="font-semibold text-white">{metrics.rain ? 'Rain Detected' : 'No Rain'}</div>
                  </div>
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${metrics.rain ? 'bg-blue-500/20 text-[#00d4ff]' : 'bg-white/5 text-gray-400'}`}>
                  {metrics.rain ? 'ACTIVE' : 'STANDBY'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-gray-400 flex justify-between">
            <span>Last Telemetry Sync:</span>
            <span>{lastUpdated}</span>
          </div>
        </motion.div>

        {/* Live Controller Panel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-lg text-gray-200 mb-2 flex items-center gap-2">
              <Sliders size={18} className="text-[#00d4ff]" />
              Actuator Simulation Gate
            </h3>
            <p className="text-xs text-gray-400 mb-6">
              Manually trigger environmental devices or delegate to system-level AI automation.
            </p>

            <div className="space-y-6">
              {/* AI Auto Mode Toggle */}
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5">
                <div>
                  <div className="font-semibold text-white text-sm">AI Autopilot Mode</div>
                  <div className="text-xs text-gray-400">Automatic stepper motor control based on motion events and soil readings</div>
                </div>
                <button 
                  onClick={() => setIsAIAutoMode(!isAIAutoMode)}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {isAIAutoMode ? (
                    <ToggleRight size={44} className="text-[#00ff88]" />
                  ) : (
                    <ToggleLeft size={44} className="text-gray-500" />
                  )}
                </button>
              </div>

              {/* Water Pump Switch */}
              <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 border border-white/5 relative">
                {isAIAutoMode && (
                  <div className="absolute inset-0 bg-[#0a0a0f]/80 backdrop-blur-[1px] rounded-xl flex items-center justify-center z-10">
                    <span className="text-xs text-[#00ff88] font-medium bg-[#00ff88]/10 border border-[#00ff88]/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <AlertCircle size={12} /> Managed by AI Automation Model
                    </span>
                  </div>
                )}
                <div>
                  <div className="font-semibold text-white text-sm">Water Pump Switch</div>
                  <div className="text-xs text-gray-400">Manual stepper motor & relay control override</div>
                </div>
                <button 
                  onClick={handlePumpToggle}
                  className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                >
                  {isWaterPumpOn ? (
                    <ToggleRight size={44} className="text-[#00d4ff]" />
                  ) : (
                    <ToggleLeft size={44} className="text-gray-500" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs text-[#00d4ff] flex gap-2">
            <Database size={16} className="shrink-0 mt-0.5" />
            <span>
              <strong>Relational Persistence:</strong> System captures trigger logs, telemetry snapshots, and camera snapshots in a relational database layout (SQLite / MySQL) for downstream dashboard telemetry visualization.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Schematic & Architecture Diagrams Carousel Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h3 className="font-bold text-2xl text-white">System Architecture Diagrams</h3>
            <p className="text-gray-400 text-sm">Detailed visual mappings of hardware schematics, firmware logic, backend server, and camera integrations.</p>
          </div>
          
          {/* Tab buttons */}
          <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 shrink-0 self-start md:self-auto">
            {(Object.keys(diagrams) as Array<keyof typeof diagrams>).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveDiagTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  activeDiagTab === tab 
                    ? 'bg-[#00ff88] text-[#0a0a0f] shadow-md shadow-[#00ff88]/20' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'system' ? 'ESP32 Node' : tab === 'cam' ? 'ESP32-CAM' : 'Flask API'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab display */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-slate-950/40 p-4 sm:p-6 rounded-xl border border-white/5">
          {/* Detail */}
          <div className="lg:col-span-4 space-y-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-300">
              Figure: {activeDiagTab === 'system' ? '01' : activeDiagTab === 'cam' ? '02' : '03'}
            </span>
            <h4 className="font-bold text-xl text-[#00ff88]">{diagrams[activeDiagTab].title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed">{diagrams[activeDiagTab].desc}</p>
          </div>

          {/* Diagram image container */}
          <div className="lg:col-span-8 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] rounded-xl blur-lg opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-white/10 bg-slate-900 group">
              <img 
                src={diagrams[activeDiagTab].img} 
                alt={diagrams[activeDiagTab].title}
                className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Overlay maximize button */}
              <button 
                onClick={() => setSelectedImage(diagrams[activeDiagTab].img)}
                className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-black/80 text-white transition-colors border border-white/10 cursor-pointer"
                title="View Full Diagram"
              >
                <Maximize2 size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid of Key Features & Technologies */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        
        {/* Features Card */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-bold text-2xl text-white mb-6">Key Specifications & Features</h3>
          
          <div className="grid sm:grid-cols-2 gap-4">
            
            {/* Feature 1 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <Activity className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">Motion Surveillance</h4>
              <p className="text-gray-400 text-xs mt-1">Real-time motion tracking using multi-sensor arrays and edge triggers.</p>
            </div>

            {/* Feature 2 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <CloudRain className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">Environmental Tracking</h4>
              <p className="text-gray-400 text-xs mt-1">Proactive tracking of Soil Moisture, Rain Detection, Temp, and Humidity.</p>
            </div>

            {/* Feature 3 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <Cpu className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">Actuator Automation</h4>
              <p className="text-gray-400 text-xs mt-1">Automatic stepper motor control utilizing ULN2003 driver triggers based on events.</p>
            </div>

            {/* Feature 4 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <Camera className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">ESP32-CAM Streaming</h4>
              <p className="text-gray-400 text-xs mt-1">Wireless visual frame captures with direct HTTP multipart upload endpoints.</p>
            </div>

            {/* Feature 5 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <Server className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">REST API communication</h4>
              <p className="text-gray-400 text-xs mt-1">Clean server-side route architecture using standard Flask (Python) backends.</p>
            </div>

            {/* Feature 6 */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-[#00ff88]/30 transition-all group">
              <Database className="text-[#00ff88] mb-2 group-hover:scale-110 transition-transform" size={24} />
              <h4 className="font-semibold text-white text-sm">Dual DB Persistence</h4>
              <p className="text-gray-400 text-xs mt-1">Structured telemetry and binary image capture stored in SQLite / MySQL.</p>
            </div>

          </div>
        </motion.div>

        {/* Technologies Card */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-2xl text-white mb-6">Technologies Used</h3>
            
            <div className="space-y-4">
              {/* Category 1 */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Embedded Systems</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.embedded.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/20 text-xs text-[#00ff88] font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Category 2 */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Backend & Database</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.backend.concat(techStack.database).map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-xs text-[#00d4ff] font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Category 3 */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Frontend & Network</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.frontend.concat(techStack.communication).map(t => (
                    <span key={t} className="px-3 py-1 rounded-full bg-[#c0ff00]/10 border border-[#c0ff00]/20 text-xs text-[#c0ff00] font-medium">{t}</span>
                  ))}
                </div>
              </div>

              {/* Category 4 */}
              <div>
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sensors & Hardware Components</div>
                <div className="flex flex-wrap gap-2">
                  {techStack.hardware.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Role and Outcomes */}
      <div className="grid lg:grid-cols-12 gap-8 mb-16">
        
        {/* My Role */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-bold text-2xl text-white mb-6">My Engineering Role</h3>
          <div className="space-y-4">
            {roleTasks.map((task, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-[#00ff88] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 leading-relaxed">{task}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-2xl text-white mb-4">Project Outcomes</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              This end-to-end development journey significantly consolidated core concepts in full-stack hardware-software engineering, network topologies, and responsive telemetry design:
            </p>
            
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-300 mb-6">
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Internet of Things (IoT)</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Embedded Firmware</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Microcontroller Logic</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ RESTful Flask APIs</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Network Protocols</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Relational Databases</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ Edge Automation</span>
              <span className="px-3 py-2 rounded bg-white/5 border border-white/5">✔ UI Visualization</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#00ff88]/10 border border-[#00ff88]/20 text-xs text-gray-300 leading-relaxed">
            Dilruk's project demonstrates complete capability in assembling end-to-end IoT frameworks by routing low-level sensor packets through Wi-Fi, structuring backend APIs, and crafting front-end dashboard panels.
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Image Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedImage(null)}></div>
          <div className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-xl border border-white/10 z-10">
            <img src={selectedImage} alt="Fullscreen diagram" className="w-full h-auto object-contain max-h-[85vh] mx-auto" />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors border border-white/20 cursor-pointer text-sm font-semibold"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
