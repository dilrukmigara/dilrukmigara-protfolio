import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ShieldCheck,
  Cpu,
  Network,
  Activity,
  Gauge,
  BrainCircuit,
  Sparkles,
  Layers,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Radio,
  Wifi,
  Server,
  Database,
  Lock,
  RefreshCw,
  GitBranch,
  BookOpen,
  Terminal,
  Workflow,
  FileText,
  Check,
  X,
  Clock,
  Target,
  ArrowRight,
  ExternalLink,
  Laptop,
  Flame,
  Binary,
  Compass,
  Sliders
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedRQ, setExpandedRQ] = useState<number | null>(null);
  const [selectedArchNode, setSelectedArchNode] = useState<number>(3); // default to ESP32-S3
  const [isSimulatingLiveFlow, setIsSimulatingLiveFlow] = useState(true);
  const [simulatedPackets, setSimulatedPackets] = useState(14820);
  const [activeTransferTab, setActiveTransferTab] = useState<'transfer' | 'incremental' | 'tinyml'>('transfer');

  // Handle URL hash or subpath initialization
  useEffect(() => {
    const handleSubpath = () => {
      const path = window.location.pathname;
      if (path.includes('transfer-learning')) {
        setActiveTab('adaptive-learning');
        setActiveTransferTab('transfer');
      } else if (path.includes('incremental-learning')) {
        setActiveTab('adaptive-learning');
        setActiveTransferTab('incremental');
      } else if (path.includes('tinyml')) {
        setActiveTab('tinyml-rtos');
        setActiveTransferTab('tinyml');
      } else if (path.includes('architecture')) {
        setActiveTab('architecture');
      } else if (path.includes('methodology')) {
        setActiveTab('methodology');
      } else if (path.includes('problem') || path.includes('gap')) {
        setActiveTab('problem');
      } else if (path.includes('objectives') || path.includes('novelty')) {
        setActiveTab('novelty');
      } else if (path.includes('evaluation')) {
        setActiveTab('evaluation');
      }
    };
    handleSubpath();
    window.addEventListener('popstate', handleSubpath);
    return () => window.removeEventListener('popstate', handleSubpath);
  }, []);

  // Simulate real-time packet processing counter
  useEffect(() => {
    if (!isSimulatingLiveFlow) return;
    const interval = setInterval(() => {
      setSimulatedPackets((prev) => prev + Math.floor(Math.random() * 8) + 2);
    }, 1800);
    return () => clearInterval(interval);
  }, [isSimulatingLiveFlow]);

  const navigateToTab = (tabId: string, subpath?: string) => {
    setActiveTab(tabId);
    if (subpath) {
      window.history.pushState({}, '', `/${subpath}`);
    }
    const element = document.getElementById(tabId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // 7 Architecture Stages (Matching Uploaded Proposal Diagram)
  const archStages = [
    {
      id: 0,
      title: '1. IoT Network Environment',
      tag: 'Traffic Origin',
      icon: Wifi,
      color: '#00d4ff',
      summary: 'Heterogeneous IoT devices, smart sensors, cameras, and local access gateways emitting continuous raw network traffic.',
      details: [
        'Realistic laboratory testbed IoT devices (smart home & sensors)',
        'Continuous packet streaming across local Wi-Fi / Ethernet subnets',
        'Normal operating traffic mixed with simulated malicious activity',
      ],
    },
    {
      id: 1,
      title: '2. Network Traffic Capture',
      tag: 'Packet Sniffing',
      icon: Laptop,
      color: '#8BE1FF',
      summary: 'Software-based packet sniffer utilizing Wireshark / tshark to capture raw PCAP frames, parse headers, and generate bidirectional flows.',
      details: [
        'Packet sniffing via tshark & libpcap drivers',
        'Bidirectional network flow generation (IP 5-tuple: src/dst IP, src/dst port, protocol)',
        'Conversion of raw packet dumps into structured CSV flow records for evaluation',
      ],
    },
    {
      id: 2,
      title: '3. Feature Extraction & Selection',
      tag: 'Feature Reduction',
      icon: Binary,
      color: '#A78BFA',
      summary: 'Statistical flow metric extraction and dimensional reduction, distilling hundreds of raw metrics down to top < 20 discriminative features.',
      details: [
        'Calculates flow duration, total forward/backward packets, byte volumes, packet inter-arrival times, and TCP flags',
        'Applies Correlation Analysis and Mutual Information to eliminate redundant features',
        'Optimized reduced feature set tailored for extreme microcontroller memory efficiency',
      ],
    },
    {
      id: 3,
      title: '4. ESP32-S3 Edge Inference Engine',
      tag: 'Edge Intelligence',
      icon: Cpu,
      color: '#7CFF00',
      isCenterpiece: true,
      summary: 'The central physical hardware device running the lightweight quantized 1D-CNN using TensorFlow Lite Micro runtime directly on MCU silicon.',
      details: [
        'ESP32-S3 Dual-Core Xtensa LX7 @ 240MHz, 520KB SRAM, optional PSRAM',
        'TensorFlow Lite Micro runtime optimized for low memory footprint (< 100KB Flash)',
        'Executes per-flow inference in real-time under FreeRTOS preemptive scheduling',
        'Evaluates latency, memory footprint (RAM/Flash), and power consumption on real hardware',
      ],
    },
    {
      id: 4,
      title: '5. Classification Output',
      tag: 'Decision Boundary',
      icon: ShieldCheck,
      color: '#FF5E7E',
      summary: 'Instantaneous multi-class or binary decision boundary: Normal Traffic (allowed) vs. Malicious Intrusion (flagged & logged).',
      details: [
        'NORMAL TRAFFIC: Low anomaly score, traffic forwarded with nominal telemetry',
        'MALICIOUS TRAFFIC: Detection of DoS/DDoS floods, port scans, brute force',
        'Generates structured threat classification vector with confidence score',
      ],
    },
    {
      id: 5,
      title: '6. Alert & Communication',
      tag: 'MQTT Broker',
      icon: Radio,
      color: '#FFD36A',
      summary: 'Lightweight, encrypted MQTT telemetry transmission publishing alert notifications and flow statistics to central cloud or local broker.',
      details: [
        'TLS-encrypted MQTT publish/subscribe messaging',
        'Minimal network transmission overhead to conserve edge bandwidth',
        'Instant alert dispatch for critical security threshold breaches',
      ],
    },
    {
      id: 6,
      title: '7. Security Dashboard',
      tag: 'SOC Monitoring',
      icon: Activity,
      color: '#00ff88',
      summary: 'Interactive security operations dashboard providing real-time threat telemetry, attack distribution charts, and edge node health.',
      details: [
        'Live threat statistics and classification breakdown',
        'Hardware health telemetry: CPU utilization, free heap, battery/power metrics',
        'Concept drift trigger: alerts when new unclassified attack patterns arise',
      ],
    },
  ];

  // Research Questions Data
  const researchQuestions = [
    {
      id: 1,
      rq: 'RQ1: How accurately can a lightweight 1D-CNN classify network traffic using a reduced feature set?',
      pairedObjective: 'Sub-Objective 01: Develop a lightweight 1D-CNN flow classifier capable of capturing spatial relationships in network flows with minimal computational complexity.',
      details: 'Investigates feature importance metrics (mutual information, correlation analysis) to reduce the dimensionality from >80 raw flow features down to <20, and measures precision, recall, F1-score, and confusion matrix against baseline models (Random Forest, Decision Trees, SVM).',
    },
    {
      id: 2,
      rq: 'RQ2: What are the effects of INT8 quantization on accuracy, memory, latency and energy?',
      pairedObjective: 'Sub-Objective 02: Optimize and deploy the model on ESP32-S3 using TinyML (TensorFlow Lite Micro).',
      details: 'Evaluates post-training INT8 quantization and structured pruning. Compares floating-point 32-bit vs. 8-bit integer models in terms of accuracy drop, RAM overhead, Flash footprint (<100KB target), and execution latency per flow on the 240MHz ESP32-S3.',
    },
    {
      id: 3,
      rq: 'RQ3: How much does transfer learning improve adaptation compared with training from scratch?',
      pairedObjective: 'Sub-Objective 03: Investigate transfer learning for adaptation to a target IoT environment.',
      details: 'Trains a generalized baseline model on large public benchmarks (e.g. CIC-IDS2017 / UNSW-NB15) and fine-tunes selected frozen/unfrozen layers on local IoT network data. Evaluates convergence speed, sample efficiency, and classification accuracy compared to building models from scratch.',
    },
    {
      id: 4,
      rq: 'RQ4: How well can incremental learning detect new attacks while minimizing catastrophic forgetting?',
      pairedObjective: 'Sub-Objective 04: Investigate incremental learning for learning new attacks while minimizing catastrophic forgetting.',
      details: 'Studies continual learning mechanisms—specifically Elastic Weight Consolidation (EWC) and rehearsal-based memory replay—to allow the deployed edge model to incorporate novel attack classes over time without degrading performance on previously learned patterns.',
    },
  ];

  // Research Gap Matrix
  const gapMatrix = [
    {
      feature: 'TinyML Deployment on Real Microcontrollers',
      traditionalNIDS: '❌ Server/Cloud only',
      existingTinyML: '⚠️ Mostly simulated / offline',
      secureEdge: '✅ Deployed on ESP32-S3 MCU (TFLite Micro)',
      highlight: true,
    },
    {
      feature: 'Transfer Learning for Cross-IoT Adaptation',
      traditionalNIDS: '❌ Fixed models',
      existingTinyML: '❌ Assumes static environment',
      secureEdge: '✅ Pre-trained benchmark + Target IoT fine-tuning',
      highlight: true,
    },
    {
      feature: 'Incremental Learning (Continual Adaptation)',
      traditionalNIDS: '❌ Complete retraining required',
      existingTinyML: '❌ Retraining too heavy for edge',
      secureEdge: '✅ EWC & Replay to curb catastrophic forgetting',
      highlight: true,
    },
    {
      feature: 'Lightweight Deep Neural Architecture',
      traditionalNIDS: '❌ Heavy Multi-layer Perceptrons / Transformers',
      existingTinyML: '⚠️ Basic Decision Trees or shallow ML',
      secureEdge: '✅ Tailored 1D-CNN (<100KB INT8 footprint)',
      highlight: false,
    },
    {
      feature: 'Physical Hardware Evaluation (Power/RAM/Latency)',
      traditionalNIDS: '❌ Evaluated on x86 servers',
      existingTinyML: '⚠️ Partial or simulation-only',
      secureEdge: '✅ End-to-end empirical hardware validation',
      highlight: true,
    },
  ];

  return (
    <div className="min-h-screen bg-[#06070c] text-white pt-16 pb-28 relative selection:bg-[#00d4ff]/20 selection:text-[#00d4ff]">
      {/* Background Ambience & Circuits */}
      <div className="fixed inset-0 opacity-[0.07] pointer-events-none">
        <div className="circuit-pattern"></div>
      </div>
      <div className="fixed top-20 left-1/4 w-[500px] h-[500px] bg-[#00d4ff]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="fixed bottom-20 right-1/4 w-[500px] h-[500px] bg-[#FF6AF5]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Top Header / Sticky Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#06070c]/90 backdrop-blur-xl border-b border-white/10 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href="https://dilrukmigara.me"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/10 text-xs font-semibold text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Portfolio</span>
            </a>
            <div className="h-4 w-[1px] bg-white/15 hidden sm:block" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" />
              <span className="text-xs font-bold tracking-wide text-white uppercase">
                SecureEdge Research
              </span>
              <span className="hidden md:inline-block text-[10px] px-2 py-0.5 rounded bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] font-extrabold uppercase tracking-wider">
                research.dilrukmigara.me
              </span>
            </div>
          </div>

          {/* Quick-Jump Section Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto no-scrollbar py-1 text-xs">
            {[
              { id: 'overview', label: 'Overview', subpath: 'overview' },
              { id: 'problem', label: 'Problem & Gap', subpath: 'problem' },
              { id: 'novelty', label: 'Novelty & Objectives', subpath: 'objectives' },
              { id: 'architecture', label: 'System Architecture', subpath: 'architecture' },
              { id: 'adaptive-learning', label: 'Transfer & Continual AI', subpath: 'transfer-learning' },
              { id: 'tinyml-rtos', label: 'TinyML & RTOS', subpath: 'tinyml' },
              { id: 'methodology', label: 'Methodology', subpath: 'methodology' },
              { id: 'evaluation', label: 'Evaluation & Roadmap', subpath: 'evaluation' },
              { id: 'references', label: 'Scope & References', subpath: 'references' },
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => navigateToTab(t.id, t.subpath)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === t.id
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/40'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-24">
        {/* ========================================================================= */}
        {/* SECTION 1: HERO SECTION */}
        {/* ========================================================================= */}
        <section id="overview" className="relative pt-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#00d4ff]/15 via-[#a855f7]/15 to-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] text-xs font-bold uppercase tracking-widest"
            >
              <ShieldCheck size={14} />
              <span>FINAL-YEAR ENGINEERING RESEARCH INVESTIGATION</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-[#00d4ff] via-[#8BE1FF] to-[#c0ff00] bg-clip-text text-transparent">
                SecureEdge
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-200 mt-3 leading-snug">
                Transfer Learning & Incremental TinyML for Real-Time Intrusion Detection in Resource-Constrained IoT Networks
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto"
            >
              A lightweight and adaptive edge-based Network Intrusion Detection System (NIDS) designed for resource-constrained IoT environments.
            </motion.p>

            {/* Visual Representation Flow: IoT Network -> SecureEdge ESP32-S3 -> TinyML IDS -> Attack Detection -> Security Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-2xl relative overflow-hidden"
            >
              <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>End-to-End System Pipeline</span>
                <span className="text-[#00d4ff] flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-[#00d4ff] animate-ping" /> Real-Time Flow Simulation
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative">
                {[
                  { title: 'IoT Network', desc: 'Sensors & Wi-Fi Traffic', icon: Wifi, color: '#8BE1FF' },
                  { title: 'SecureEdge ESP32-S3', desc: 'Hardware Edge Node', icon: Cpu, color: '#7CFF00', highlight: true },
                  { title: 'TinyML 1D-CNN IDS', desc: 'Quantized Inference', icon: BrainCircuit, color: '#FF6AF5' },
                  { title: 'Attack Detection', desc: 'DoS, Scans & Anomalies', icon: AlertTriangle, color: '#FF5E7E' },
                  { title: 'Security Dashboard', desc: 'MQTT Telemetry & Alerts', icon: Activity, color: '#00d4ff' },
                ].map((step, idx) => {
                  const StepIcon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className={`relative p-3.5 rounded-xl border transition-all ${
                        step.highlight
                          ? 'bg-[#7CFF00]/10 border-[#7CFF00]/40 shadow-[0_0_20px_rgba(124,255,0,0.15)]'
                          : 'bg-white/[0.02] border-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${step.color}15`, color: step.color }}
                        >
                          <StepIcon size={18} />
                        </div>
                        <span className="text-[10px] font-mono text-gray-400">0{idx + 1}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white text-left">{step.title}</h4>
                      <p className="text-[11px] text-gray-400 text-left mt-0.5">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-2"
            >
              <button
                onClick={() => navigateToTab('problem', 'problem')}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#00d4ff] to-[#0088cc] hover:from-[#00c0ff] hover:to-[#0077b3] text-black shadow-lg shadow-[#00d4ff]/25 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Research</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => navigateToTab('architecture', 'architecture')}
                className="px-6 py-3 rounded-xl font-bold text-sm bg-white/5 border border-[#00d4ff]/30 hover:border-[#00d4ff] hover:bg-white/10 text-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <Workflow size={16} className="text-[#00d4ff]" />
                <span>View System Architecture</span>
              </button>
            </motion.div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 2: RESEARCH AT A GLANCE */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Research at a Glance</h2>
            <p className="text-gray-400 text-sm mt-1">Core technical parameters and architectural specifications</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Domain', value: 'Embedded AI / TinyML / IoT Cybersecurity', icon: ShieldCheck, color: '#00d4ff' },
              { label: 'Target Hardware', value: 'ESP32-S3 (240MHz, 520KB SRAM)', icon: Cpu, color: '#7CFF00' },
              { label: 'Core AI Model', value: 'Lightweight 1D-CNN Flow Classifier', icon: BrainCircuit, color: '#FF6AF5' },
              { label: 'Edge Runtime', value: 'TensorFlow Lite Micro (<100KB)', icon: Layers, color: '#FFD36A' },
              { label: 'RTOS & Tasking', value: 'ESP-IDF / FreeRTOS Concurrency', icon: Activity, color: '#8BE1FF' },
              { label: 'Networking', value: 'Wi-Fi (802.11) & Encrypted MQTT', icon: Wifi, color: '#A78BFA' },
              { label: 'Adaptive Learning', value: 'Transfer Learning + Incremental (EWC)', icon: GitBranch, color: '#c0ff00' },
              { label: 'Evaluation Metrics', value: 'Accuracy + Latency + Memory + Energy', icon: Gauge, color: '#FF5E7E' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                      {item.label}
                    </span>
                    <Icon size={16} style={{ color: item.color }} />
                  </div>
                  <div className="text-sm font-bold text-white leading-snug">{item.value}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 3: THE PROBLEM */}
        {/* ========================================================================= */}
        <section id="problem" className="relative scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10">
            <div className="max-w-3xl mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#FF5E7E]/15 border border-[#FF5E7E]/30 text-[#FF5E7E] mb-3">
                <AlertTriangle size={13} />
                <span>Problem Statement</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">The Problem</h2>
              <blockquote className="mt-4 p-4 rounded-xl bg-white/[0.02] border-l-4 border-[#00d4ff] text-base text-gray-200 italic font-normal">
                “IoT devices are increasingly connected, but their limited computational and energy resources make conventional Network Intrusion Detection Systems difficult to deploy directly on the edge.”
              </blockquote>
            </div>

            {/* Problem Breakdown Flow */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-3 mb-8">
              {[
                { title: 'Connected IoT Devices', desc: 'Proliferation of smart sensors, cameras, gateways', icon: Wifi },
                { title: 'Resource Constraints', desc: 'Constrained RAM, Flash, CPU cycles, and battery power', icon: Cpu, alert: true },
                { title: 'Heavy Traditional NIDS', desc: 'Snort / Suricata / Deep ML too heavy for microcontrollers', icon: Server },
                { title: 'Evolving IoT Attacks', desc: 'Traffic profiles and attack signatures drift continuously', icon: Flame, alert: true },
                { title: 'Static Models Expire', desc: 'Fixed classifiers suffer severe performance degradation', icon: Clock },
                { title: 'The Urgent Need', desc: 'Lightweight, adaptive edge NIDS with hardware verification', icon: Target, success: true },
              ].map((step, i) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className={`p-4 rounded-xl border flex flex-col justify-between ${
                      step.alert
                        ? 'bg-[#FF5E7E]/10 border-[#FF5E7E]/30'
                        : step.success
                        ? 'bg-[#7CFF00]/10 border-[#7CFF00]/40'
                        : 'bg-white/[0.02] border-white/10'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Icon
                          size={18}
                          className={step.alert ? 'text-[#FF5E7E]' : step.success ? 'text-[#7CFF00]' : 'text-[#00d4ff]'}
                        />
                        <span className="text-[10px] font-mono text-gray-400">0{i + 1}</span>
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">{step.title}</h4>
                      <p className="text-[11px] text-gray-400 leading-tight">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Triad Highlight: Resource Constraints + Changing Attack Behaviour + Static ML Models */}
            <div className="grid md:grid-cols-3 gap-4 p-5 rounded-2xl bg-[#080b14] border border-white/10 text-center">
              <div className="p-3">
                <div className="text-xs font-bold text-[#FF6AF5] uppercase tracking-wider mb-1">01. Resource Constraints</div>
                <p className="text-xs text-gray-300">ESP32 microcontrollers feature &lt;1MB SRAM and strict power envelopes, forbidding traditional deep learning models.</p>
              </div>
              <div className="p-3 border-y md:border-y-0 md:border-x border-white/10">
                <div className="text-xs font-bold text-[#FF5E7E] uppercase tracking-wider mb-1">02. Changing Attack Behaviour</div>
                <p className="text-xs text-gray-300">Zero-day attacks, stealth port scans, and varying network topologies cause acute concept drift over time.</p>
              </div>
              <div className="p-3">
                <div className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider mb-1">03. Static ML Models</div>
                <p className="text-xs text-gray-300">Models trained offline become blind to new attack patterns without continuous retraining mechanisms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 4: RESEARCH GAP */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] mb-3">
              <Compass size={13} />
              <span>Literature Shortcoming</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">The Research Gap</h2>
            <p className="text-gray-300 text-sm sm:text-base mt-2">
              Based on the comprehensive survey of state-of-the-art literature, existing intrusion detection works address edge intelligence only partially or in simulation.
            </p>
          </div>

          {/* Central Gap Callout */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#00d4ff]/10 via-[#FF6AF5]/10 to-[#7CFF00]/10 border border-[#00d4ff]/40 text-center">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#00d4ff]">Central Identified Gap</span>
            <p className="text-base sm:text-lg font-semibold text-white mt-2 max-w-4xl mx-auto leading-relaxed">
              “Very limited research combines lightweight deep-learning based TinyML deployment, transfer learning, incremental learning, and end-to-end evaluation on real microcontroller hardware.”
            </p>
          </div>

          {/* Visual Comparison Matrix */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 border-b border-white/10 text-gray-300 font-bold uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Evaluation Dimension</th>
                  <th className="py-3.5 px-4 text-gray-400">Traditional NIDS</th>
                  <th className="py-3.5 px-4 text-gray-400">Existing TinyML Literature</th>
                  <th className="py-3.5 px-4 text-[#00d4ff] bg-[#00d4ff]/10">SecureEdge Proposed Approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {gapMatrix.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 text-gray-400">{row.traditionalNIDS}</td>
                    <td className="py-3.5 px-4 text-gray-300">{row.existingTinyML}</td>
                    <td className="py-3.5 px-4 font-bold text-[#7CFF00] bg-[#00d4ff]/5">{row.secureEdge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 5: WHAT IS NOVEL ABOUT SECUREEDGE? */}
        {/* ========================================================================= */}
        <section id="novelty" className="relative scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-white">What is Novel About SecureEdge?</h2>
            <p className="text-gray-400 text-sm mt-2">
              Four interconnected engineering pillars unified on physical microcontroller silicon.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl bg-[#090d18] border border-white/10 overflow-hidden">
            {/* 4 Connected Blocks with central SECUREEDGE core */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {/* Block 1 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#00d4ff]/30 hover:border-[#00d4ff] transition-all">
                <div className="flex items-center gap-3 mb-2 text-[#00d4ff]">
                  <BrainCircuit size={20} />
                  <h3 className="text-base font-bold text-white">1. Lightweight Deep Learning</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Compact 1D-CNN flow classifier specifically designed and quantized (INT8) to fit within microcontroller SRAM/Flash constraints while preserving feature discrimination.
                </p>
              </div>

              {/* Block 2 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#8BE1FF]/30 hover:border-[#8BE1FF] transition-all">
                <div className="flex items-center gap-3 mb-2 text-[#8BE1FF]">
                  <GitBranch size={20} />
                  <h3 className="text-base font-bold text-white">2. Transfer Learning</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Adapts pre-trained representations from comprehensive public benchmark datasets to specific target IoT networks with minimal localized data and fine-tuning.
                </p>
              </div>

              {/* Block 3 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#FF6AF5]/30 hover:border-[#FF6AF5] transition-all">
                <div className="flex items-center gap-3 mb-2 text-[#FF6AF5]">
                  <RefreshCw size={20} />
                  <h3 className="text-base font-bold text-white">3. Incremental Learning</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Learns new zero-day attack patterns sequentially via Elastic Weight Consolidation (EWC) and rehearsal replay without catastrophic forgetting or full retraining.
                </p>
              </div>

              {/* Block 4 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-[#7CFF00]/30 hover:border-[#7CFF00] transition-all">
                <div className="flex items-center gap-3 mb-2 text-[#7CFF00]">
                  <Cpu size={20} />
                  <h3 className="text-base font-bold text-white">4. Real MCU Validation</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Direct physical deployment and empirical benchmarking on ESP32-S3 hardware, measuring actual per-flow latency, memory consumption, and energy drain.
                </p>
              </div>
            </div>

            {/* Central Synthesis Statement */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#00d4ff] bg-[#00d4ff]/10 px-3 py-1 rounded-full border border-[#00d4ff]/25">
                Core Research Thesis
              </span>
              <p className="text-base font-semibold text-gray-200 mt-3 max-w-2xl mx-auto">
                “SecureEdge jointly investigates lightweight deep learning, transfer learning, incremental learning, and physical deployment on real microcontroller hardware.”
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 6: RESEARCH OBJECTIVES */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="mb-6">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Strategic Goals</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Research Objectives</h2>
            </div>

            {/* Primary Objective Banner */}
            <div className="p-5 rounded-2xl bg-[#00d4ff]/10 border border-[#00d4ff]/30 mb-8">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#00d4ff]">Primary Main Objective</span>
              <p className="text-base sm:text-lg font-bold text-white mt-1 leading-snug">
                “Design, develop and evaluate an adaptive TinyML-based NIDS for real-time flow classification on an ESP32, balancing accuracy, latency, memory and energy.”
              </p>
            </div>

            {/* 4 Sub-Objectives */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { num: '01', title: 'Lightweight 1D-CNN Flow Classifier', desc: 'Develop a compact 1D-CNN model to classify network traffic flows with high accuracy using a minimal, selected feature set.' },
                { num: '02', title: 'TinyML Optimization & MCU Deployment', desc: 'Optimize the model via INT8 quantization and deploy using TensorFlow Lite Micro directly onto the ESP32-S3.' },
                { num: '03', title: 'Target IoT Transfer Learning', desc: 'Investigate transfer learning for efficient adaptation from source datasets to a target IoT environment without retraining from scratch.' },
                { num: '04', title: 'Continual Incremental Learning', desc: 'Investigate incremental learning algorithms to detect newly introduced attack classes while minimizing catastrophic forgetting.' },
              ].map((obj) => (
                <div key={obj.num} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-extrabold text-[#00d4ff] font-mono">{obj.num}</span>
                    <h4 className="text-sm font-bold text-white mt-2 mb-1">{obj.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{obj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 7: RESEARCH QUESTIONS */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Research Questions</h2>
            <p className="text-gray-400 text-sm mt-1">
              Click each research question to reveal its corresponding methodology and paired objective.
            </p>
          </div>

          <div className="space-y-3 max-w-4xl mx-auto">
            {researchQuestions.map((item) => {
              const isExpanded = expandedRQ === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedRQ(isExpanded ? null : item.id)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] font-bold text-xs flex items-center justify-center shrink-0">
                        {item.id}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">{item.rq}</span>
                    </div>
                    {isExpanded ? <ChevronUp size={18} className="text-[#00d4ff] shrink-0" /> : <ChevronDown size={18} className="text-gray-400 shrink-0" />}
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 pt-0 border-t border-white/5 bg-black/20 text-xs sm:text-sm space-y-2"
                      >
                        <div className="p-3 rounded-lg bg-[#00d4ff]/5 border border-[#00d4ff]/20 text-gray-200">
                          <span className="font-bold text-[#00d4ff] block mb-1">Paired Research Objective:</span>
                          {item.pairedObjective}
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.details}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 8 & 9: PROPOSED SECUREEDGE SYSTEM ARCHITECTURE (CENTERPIECE) */}
        {/* ========================================================================= */}
        <section id="architecture" className="relative scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0a0e1c] to-[#060810] border border-[#00d4ff]/30 shadow-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00d4ff]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00d4ff]/15 border border-[#00d4ff]/35 text-[#00d4ff] mb-2">
                  <Workflow size={13} />
                  <span>Proposal System Architecture</span>
                </div>
                <h2 className="text-3xl font-extrabold text-white">Proposed SecureEdge Solution</h2>
                <p className="text-gray-300 text-sm mt-1">
                  Interactive end-to-end data pipeline from raw IoT frame ingestion to edge intelligence and cloud telemetry.
                </p>
              </div>

              {/* Simulation State Toggle */}
              <div className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 text-xs">
                <span className="text-gray-400">Telemetry Stream:</span>
                <button
                  onClick={() => setIsSimulatingLiveFlow(!isSimulatingLiveFlow)}
                  className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                    isSimulatingLiveFlow
                      ? 'bg-[#7CFF00]/20 text-[#7CFF00] border border-[#7CFF00]/40'
                      : 'bg-white/10 text-gray-400'
                  }`}
                >
                  {isSimulatingLiveFlow ? '● Live Active' : '○ Paused'}
                </button>
              </div>
            </div>

            {/* Interactive Architecture Flow Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-8">
              {archStages.map((stage) => {
                const Icon = stage.icon;
                const isSelected = selectedArchNode === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setSelectedArchNode(stage.id)}
                    className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer ${
                      isSelected
                        ? 'bg-[#00d4ff]/20 border-[#00d4ff] shadow-[0_0_15px_rgba(0,212,255,0.3)] scale-[1.02]'
                        : stage.isCenterpiece
                        ? 'bg-[#7CFF00]/10 border-[#7CFF00]/40 hover:border-[#7CFF00]'
                        : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <Icon size={16} style={{ color: stage.color }} />
                      <span className="text-[9px] font-mono text-gray-400">0{stage.id + 1}</span>
                    </div>
                    <div className="text-xs font-bold text-white truncate">{stage.title.split('. ')[1]}</div>
                    <span className="text-[9px] text-gray-400 block mt-0.5">{stage.tag}</span>

                    {/* Animated Data Packet Indicator */}
                    {isSimulatingLiveFlow && (
                      <span
                        className="absolute bottom-1 right-2 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: stage.color, boxShadow: `0 0 6px ${stage.color}` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Node Detailed Inspector (Matching Proposal Image Modules) */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/15">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className="p-3 rounded-xl border"
                    style={{
                      backgroundColor: `${archStages[selectedArchNode].color}20`,
                      borderColor: `${archStages[selectedArchNode].color}40`,
                    }}
                  >
                    {(() => {
                      const ActiveIcon = archStages[selectedArchNode].icon;
                      return <ActiveIcon size={24} style={{ color: archStages[selectedArchNode].color }} />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{archStages[selectedArchNode].title}</h3>
                    <p className="text-xs text-gray-400">{archStages[selectedArchNode].summary}</p>
                  </div>
                </div>

                <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-[#00d4ff]">
                  Module Status: Planned / Active Development
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Technical Specifications</h4>
                  <ul className="space-y-1.5">
                    {archStages[selectedArchNode].details.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Feedback Loop Integration</span>
                    <p className="text-xs text-gray-300 mt-1">
                      New attack data or concept drift detected during classification is queued for model adaptation without full retraining, closing the adaptive feedback loop.
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-gray-400 pt-2 border-t border-white/5">
                    <span>Target MCU: ESP32-S3</span>
                    <span>Inference: TFLite Micro</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 10, 11 & 12: ADAPTIVE AI (TRANSFER, INCREMENTAL & TINYML) */}
        {/* ========================================================================= */}
        <section id="adaptive-learning" className="relative scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl font-extrabold text-white">Adaptive Edge Intelligence</h2>
            <p className="text-gray-400 text-sm mt-1">
              Investigating transfer learning for environment adaptation and incremental learning for zero-day threat resilience.
            </p>

            {/* Sub-Tabs */}
            <div className="flex items-center justify-center gap-2 mt-6">
              <button
                onClick={() => {
                  setActiveTransferTab('transfer');
                  window.history.pushState({}, '', '/transfer-learning');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTransferTab === 'transfer'
                    ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/40 shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Transfer Learning Framework
              </button>
              <button
                onClick={() => {
                  setActiveTransferTab('incremental');
                  window.history.pushState({}, '', '/incremental-learning');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTransferTab === 'incremental'
                    ? 'bg-[#FF6AF5]/20 text-[#FF6AF5] border border-[#FF6AF5]/40 shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                Incremental Learning Framework
              </button>
              <button
                onClick={() => {
                  setActiveTransferTab('tinyml');
                  window.history.pushState({}, '', '/tinyml');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTransferTab === 'tinyml'
                    ? 'bg-[#7CFF00]/20 text-[#7CFF00] border border-[#7CFF00]/40 shadow-lg'
                    : 'bg-white/5 text-gray-400 hover:text-white'
                }`}
              >
                TinyML & MCU Constraints
              </button>
            </div>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            {activeTransferTab === 'transfer' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Methodology Dimension</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Cross-Environment Transfer Learning</h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    Rather than training a separate model from scratch for each IoT deployment, SecureEdge leverages pre-trained representations learned from comprehensive public benchmarks (CIC-IDS2017 / UNSW-NB15) and transfers that knowledge to local target IoT networks via supervised fine-tuning.
                  </p>
                </div>

                {/* Visual Pipeline Flow */}
                <div className="grid grid-cols-1 sm:grid-cols-6 gap-3 pt-4">
                  {[
                    { step: '01', title: 'Public / Source Dataset', desc: 'CIC-IDS2017 & NSL-KDD rich intrusion benchmarks' },
                    { step: '02', title: 'Pre-Trained Model', desc: '1D-CNN feature extractor trained on source distributions' },
                    { step: '03', title: 'Knowledge Transfer', desc: 'Freezing lower layers; transferring generalized weights' },
                    { step: '04', title: 'Target Fine-Tuning', desc: 'Fine-tuning upper dense layers on target IoT telemetry' },
                    { step: '05', title: 'Adapted Model', desc: 'Tailored decision boundary for target network noise' },
                    { step: '06', title: 'Target IoT Deployment', desc: 'Deployed on ESP32-S3 node for local inference' },
                  ].map((s) => (
                    <div key={s.step} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <span className="text-[10px] font-mono text-[#00d4ff] font-bold">{s.step}</span>
                      <h4 className="text-xs font-bold text-white mt-1 mb-0.5">{s.title}</h4>
                      <p className="text-[11px] text-gray-400">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTransferTab === 'incremental' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF6AF5]">Continual Adaptation</span>
                  <h3 className="text-2xl font-bold text-white mt-1">Incremental Continual Learning</h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    IoT cybersecurity suffers from rapid concept drift as attackers invent novel exploit mechanisms. SecureEdge investigates how newly observed attack classes can be learned over time while retaining previous knowledge and mitigating catastrophic forgetting.
                  </p>
                </div>

                {/* Visual Equation / Flow */}
                <div className="p-5 rounded-2xl bg-[#FF6AF5]/10 border border-[#FF6AF5]/30 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-bold text-white">
                    <span className="px-3 py-1.5 rounded-lg bg-white/10">New Attack Detection</span>
                    <span>+</span>
                    <span className="px-3 py-1.5 rounded-lg bg-white/10">Old Knowledge Retention</span>
                    <span>→</span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#FF6AF5]/20 text-[#FF6AF5] border border-[#FF6AF5]/40">
                      Reduced Catastrophic Forgetting
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <Zap size={16} className="text-[#FF6AF5]" />
                      Elastic Weight Consolidation (EWC)
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Computes Fisher Information Matrix to identify model parameters vital to previous tasks and applies quadratic penalties against modifying them during novel attack updates.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                    <h4 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                      <RefreshCw size={16} className="text-[#00d4ff]" />
                      Rehearsal-Based Memory Replay
                    </h4>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Stores an ultra-compact exemplar buffer of historical flow prototypes and interleaves them with new attack batches to preserve established decision boundaries.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTransferTab === 'tinyml' && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                <div className="max-w-3xl">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#7CFF00]">MCU Deployment Pipeline</span>
                  <h3 className="text-2xl font-bold text-white mt-1">TinyML Compression & Hardware Constraints</h3>
                  <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                    Deploying deep learning on the ESP32-S3 requires aggressive model compression to satisfy the strict SRAM, Flash, latency, and power budgets of microcontrollers.
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-2">
                  {[
                    { name: 'Keras / PyTorch Model', desc: 'Trained floating-point 32-bit baseline', icon: BrainCircuit },
                    { name: 'Structured Pruning', desc: 'Removes zero-weight filters & connections', icon: Sliders },
                    { name: 'INT8 Quantization', desc: '4x reduction in size via post-training INT8', icon: Binary },
                    { name: 'TFLite FlatBuffer', desc: 'Compact binary file (< 100KB target size)', icon: Layers },
                    { name: 'ESP32-S3 Deployment', desc: 'Executed via TensorFlow Lite Micro C++ runtime', icon: Cpu },
                  ].map((p, i) => (
                    <div key={p.name} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <span className="text-[10px] font-mono text-[#7CFF00] font-bold">Stage 0{i + 1}</span>
                      <h4 className="text-xs font-bold text-white mt-1 mb-0.5">{p.name}</h4>
                      <p className="text-[11px] text-gray-400">{p.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Constraint Breakdown */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">SRAM Ceiling</span>
                    <div className="text-sm font-bold text-white mt-0.5">520 KB Internal</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Target Model Size</span>
                    <div className="text-sm font-bold text-[#7CFF00] mt-0.5">&lt; 100 KB Flash</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Clock Speed</span>
                    <div className="text-sm font-bold text-white mt-0.5">240 MHz Xtensa LX7</div>
                  </div>
                  <div className="p-3 rounded-lg bg-black/30 border border-white/10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase">Inference Goal</span>
                    <div className="text-sm font-bold text-[#00d4ff] mt-0.5">Sub-Second Real-Time</div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 13: METHODOLOGY PIPELINE (8 STAGES) */}
        {/* ========================================================================= */}
        <section id="methodology" className="relative scroll-mt-24">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Engineering Rigor</span>
            <h2 className="text-3xl font-extrabold text-white mt-1">Research Methodology Pipeline</h2>
            <p className="text-gray-400 text-sm mt-1">Structured 8-stage methodology from benchmark preparation to real hardware validation.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                num: 'Stage 01',
                title: 'Dataset Preparation',
                desc: 'Acquiring public benchmarks: CIC-IDS2017, UNSW-NB15, NSL-KDD, and IoT-23 capture sets.',
                icon: Database,
              },
              {
                num: 'Stage 02',
                title: 'Data Preprocessing',
                desc: 'Handling missing values, infinite float clipping, label encoding, MinMax normalization, and stratified splits.',
                icon: Sliders,
              },
              {
                num: 'Stage 03',
                title: 'Feature Selection',
                desc: 'Applying Mutual Information and Pearson Correlation Analysis to extract top <20 discriminative flow features.',
                icon: Binary,
              },
              {
                num: 'Stage 04',
                title: 'Model Development',
                desc: 'Benchmarking 1D-CNN architectures against baseline models (Tiny LSTM, Random Forest, Decision Tree, SVM).',
                icon: BrainCircuit,
              },
              {
                num: 'Stage 05',
                title: 'Model Optimization',
                desc: 'Structured weight pruning, post-training INT8 quantization, and compilation into TensorFlow Lite format.',
                icon: Layers,
              },
              {
                num: 'Stage 06',
                title: 'Transfer Learning',
                desc: 'Adapting pre-trained source model weights to a target IoT environment via supervised layer fine-tuning.',
                icon: GitBranch,
              },
              {
                num: 'Stage 07',
                title: 'Incremental Learning',
                desc: 'Investigating Elastic Weight Consolidation (EWC) and memory replay to ingest new threat vectors continually.',
                icon: RefreshCw,
              },
              {
                num: 'Stage 08',
                title: 'ESP32-S3 Deployment',
                desc: 'Compiling TFLite Micro tensor arena under FreeRTOS on real hardware for empirical latency & power profiling.',
                icon: Cpu,
              },
            ].map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.num}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-[#00d4ff]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono font-bold text-[#00d4ff]">{stage.num}</span>
                      <Icon size={18} className="text-gray-400" />
                    </div>
                    <h4 className="text-sm font-bold text-white mb-1.5">{stage.title}</h4>
                    <p className="text-xs text-gray-400 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 14 & 15: REAL-TIME EDGE OPERATION & RTOS TASK ARCHITECTURE */}
        {/* ========================================================================= */}
        <section id="tinyml-rtos" className="relative scroll-mt-24">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Real-Time Edge Operation */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#7CFF00]/15 border border-[#7CFF00]/30 text-[#7CFF00] mb-3">
                  <Activity size={13} />
                  <span>Real-Time Operation</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Real-Time Edge Flow Operation</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  Real-time operation is defined by the end-to-end latency between flow arrival and intrusion alert dispatch on microcontroller hardware.
                </p>

                {/* Visual Operational Chain */}
                <div className="space-y-2.5 mt-6">
                  {[
                    { label: 'Attacker / Abnormal Traffic Enters IoT Subnet', icon: AlertTriangle, color: '#FF5E7E' },
                    { label: 'Network Packet Sniffer Parses Frame Headers', icon: Laptop, color: '#8BE1FF' },
                    { label: 'ESP32-S3 Task Extracts Flow Statistical Vector', icon: Cpu, color: '#7CFF00' },
                    { label: 'TinyML 1D-CNN Evaluates Tensor Arena Boundary', icon: BrainCircuit, color: '#FF6AF5' },
                    { label: 'Immediate Detection & Encrypted MQTT Dispatch', icon: Radio, color: '#00d4ff' },
                  ].map((step, idx) => {
                    const Icon = step.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                        <Icon size={16} style={{ color: step.color }} />
                        <span className="text-xs text-gray-200 font-medium">{step.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 p-4 rounded-xl bg-black/30 border border-white/10 text-[11px] text-gray-400">
                <span className="text-gray-300 font-bold block mb-1">Empirical Latency Evaluation:</span>
                Exact detection latency (ms) and inference duration will be measured using high-precision hardware timers during final physical testbed validation.
              </div>
            </div>

            {/* RTOS Task Architecture (ESP-IDF / FreeRTOS) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-[#090d18] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[#00d4ff]/15 border border-[#00d4ff]/30 text-[#00d4ff] mb-3">
                  <Cpu size={13} />
                  <span>Embedded Concurrency</span>
                </div>
                <h3 className="text-2xl font-bold text-white">ESP-IDF / FreeRTOS Task Architecture</h3>
                <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
                  FreeRTOS provides deterministic preemptive task scheduling and inter-task synchronization across the ESP32-S3's dual cores.
                </p>

                {/* 4 Concurrent Tasks */}
                <div className="space-y-3 mt-6">
                  {[
                    {
                      task: 'Traffic Monitoring Task (Core 0)',
                      priority: 'High Priority',
                      desc: 'Captures raw frames from network interface buffer and writes packets into circular ring buffer.',
                      color: '#8BE1FF',
                    },
                    {
                      task: 'Feature Processing Task (Core 0)',
                      priority: 'Medium Priority',
                      desc: 'Computes windowed flow statistical features and pushes vector to TinyML inference queue.',
                      color: '#00d4ff',
                    },
                    {
                      task: 'TinyML Inference Task (Core 1)',
                      priority: 'High Priority (Dedicated Core)',
                      desc: 'Runs TensorFlow Lite Micro interpreter on quantized 1D-CNN; computes classification score.',
                      color: '#7CFF00',
                    },
                    {
                      task: 'Alert / Communication Task (Core 0)',
                      priority: 'Low/Normal Priority',
                      desc: 'Publishes MQTT alerts over TLS socket to security broker upon threat detection.',
                      color: '#FFD36A',
                    },
                  ].map((t) => (
                    <div key={t.task} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">{t.task}</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                          {t.priority}
                        </span>
                      </div>
                      <p className="text-[11px] text-gray-400">{t.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-[11px] text-gray-400">
                Inter-task synchronization utilizes FreeRTOS <span className="text-white font-mono">xQueue</span> and <span className="text-white font-mono">xSemaphore</span> to prevent race conditions during continuous flow processing.
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 16: HOW WILL SECUREEDGE BE EVALUATED? */}
        {/* ========================================================================= */}
        <section id="evaluation" className="relative scroll-mt-24">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Rigorous Benchmarking</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">How Will SecureEdge Be Evaluated?</h2>
              <p className="text-gray-300 text-xs sm:text-sm mt-2">
                Four comprehensive evaluation groups balancing statistical classification power with embedded hardware viability.
              </p>
              <div className="inline-block mt-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                Experimental Results — To Be Evaluated (Planned Methodology)
              </div>
            </div>

            {/* 4 Evaluation Clusters */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Group 1 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#00d4ff] uppercase tracking-wider">01. Model Performance</span>
                  <h4 className="text-base font-bold text-white mt-1 mb-3">Classification Accuracy</h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#00d4ff]" /> Accuracy & Balanced Accuracy</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#00d4ff]" /> Precision & Recall per attack class</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#00d4ff]" /> Macro & Weighted F1-score</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#00d4ff]" /> Complete Confusion Matrix</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400">
                  Target: &gt;95% detection rate on benchmark datasets
                </div>
              </div>

              {/* Group 2 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#7CFF00] uppercase tracking-wider">02. TinyML Performance</span>
                  <h4 className="text-base font-bold text-white mt-1 mb-3">Hardware Resource Footprint</h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#7CFF00]" /> Model Size on Flash (&lt;100KB target)</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#7CFF00]" /> Dynamic RAM / Tensor Arena (KB)</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#7CFF00]" /> Inference Latency per flow (ms)</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#7CFF00]" /> Power / Energy consumption (mW)</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400">
                  Benchmarked directly on physical ESP32-S3
                </div>
              </div>

              {/* Group 3 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#FF6AF5] uppercase tracking-wider">03. Transfer Learning</span>
                  <h4 className="text-base font-bold text-white mt-1 mb-3">Adaptation Efficiency</h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FF6AF5]" /> Fine-tuned model vs. training from scratch</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FF6AF5]" /> Training sample efficiency / data hunger</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FF6AF5]" /> Convergence speed across epochs</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FF6AF5]" /> Target IoT domain adaptation score</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400">
                  Evaluated across heterogeneous testbeds
                </div>
              </div>

              {/* Group 4 */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-[#FFD36A] uppercase tracking-wider">04. Incremental Learning</span>
                  <h4 className="text-base font-bold text-white mt-1 mb-3">Continual Plasticity</h4>
                  <ul className="space-y-1.5 text-xs text-gray-300">
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FFD36A]" /> New Attack Detection Rate</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FFD36A]" /> Catastrophic Forgetting Rate (%)</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FFD36A]" /> Retained accuracy on initial classes</li>
                    <li className="flex items-center gap-2"><Check size={13} className="text-[#FFD36A]" /> Memory overhead of exemplar buffer</li>
                  </ul>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-gray-400">
                  EWC vs. Rehearsal replay comparative metric
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 17: EXPECTED RESEARCH CONTRIBUTIONS */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1222] via-[#070a14] to-[#0d0718] border border-white/10">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Impact & Value</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Expected Research Contributions</h2>
              <p className="text-gray-400 text-sm mt-1">
                Clearly defined anticipated deliverables from the ongoing final-year research investigation:
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  id: '01',
                  title: 'Lightweight 1D-CNN TinyML NIDS Approach',
                  desc: 'A designed and verified compact 1D-CNN flow classifier optimized via INT8 quantization for resource-constrained microcontrollers.',
                },
                {
                  id: '02',
                  title: 'Investigation of Transfer Learning for IoT Adaptation',
                  desc: 'Methodological insight into how pre-trained models on public datasets adapt to localized target IoT environments with minimal retraining data.',
                },
                {
                  id: '03',
                  title: 'Investigation of Incremental Learning on Edge Devices',
                  desc: 'Systematic analysis of continual learning methods (EWC vs. replay) to enable edge detection of emerging cyber threats without catastrophic forgetting.',
                },
                {
                  id: '04',
                  title: 'End-to-End Evaluation on Physical ESP32-S3 Hardware',
                  desc: 'A fully implemented edge testbed providing real-world measurements for latency, RAM, Flash, and power consumption.',
                },
                {
                  id: '05',
                  title: 'Empirical Evidence on Adaptive TinyML Feasibility',
                  desc: 'Rigorous empirical benchmarks clarifying the trade-offs between model accuracy and embedded resource constraints in edge cybersecurity.',
                },
              ].map((c) => (
                <div key={c.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/10 flex items-start gap-4">
                  <span className="text-lg font-mono font-bold text-[#00d4ff] shrink-0 mt-0.5">{c.id}</span>
                  <div>
                    <h4 className="text-sm font-bold text-white">{c.title}</h4>
                    <p className="text-xs text-gray-300 mt-0.5 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 18: SCOPE & LIMITATIONS */}
        {/* ========================================================================= */}
        <section id="references" className="relative scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-6">
            {/* In Scope */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#7CFF00]/30">
              <div className="flex items-center gap-2 mb-3 text-[#7CFF00]">
                <CheckCircle2 size={18} />
                <h3 className="text-lg font-bold text-white">In Research Scope</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                  <span>Flow-level statistical traffic classification (duration, packets, bytes, flags)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                  <span>Controlled laboratory IoT testbed simulating typical residential/industrial sensors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                  <span>Physical ESP32-S3 microcontroller deployment and execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                  <span>Evaluation on recognized public datasets (CIC-IDS2017, UNSW-NB15, NSL-KDD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={14} className="text-[#7CFF00] shrink-0 mt-0.5" />
                  <span>Real-time per-flow inference latency and memory profiling</span>
                </li>
              </ul>
            </div>

            {/* Outside Current Scope */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-[#FF5E7E]/30">
              <div className="flex items-center gap-2 mb-3 text-[#FF5E7E]">
                <AlertTriangle size={18} />
                <h3 className="text-lg font-bold text-white">Outside Current Scope</h3>
              </div>
              <ul className="space-y-2 text-xs text-gray-300">
                <li className="flex items-start gap-2">
                  <X size={14} className="text-[#FF5E7E] shrink-0 mt-0.5" />
                  <span>Automated attack mitigation or firewall packet drop prevention</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-[#FF5E7E] shrink-0 mt-0.5" />
                  <span>Payload-level Deep Packet Inspection (DPI) due to encryption & RAM limits</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-[#FF5E7E] shrink-0 mt-0.5" />
                  <span>Large-scale multi-site production industrial deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <X size={14} className="text-[#FF5E7E] shrink-0 mt-0.5" />
                  <span>Cellular 5G / satellite transport network analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 19: RESEARCH TECHNOLOGY STACK */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Research Technology Stack</h2>
            <p className="text-gray-400 text-xs sm:text-sm mt-1">Tools and frameworks utilized in the SecureEdge project</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {[
              { category: 'HARDWARE', tech: 'ESP32-S3', color: '#7CFF00' },
              { category: 'EMBEDDED', tech: 'ESP-IDF / FreeRTOS', color: '#00d4ff' },
              { category: 'AI / ML', tech: 'Python, TensorFlow, Keras', color: '#FF6AF5' },
              { category: 'EDGE AI', tech: 'TFLite Micro, INT8', color: '#FFD36A' },
              { category: 'NETWORKING', tech: 'Wi-Fi, MQTT (TLS)', color: '#8BE1FF' },
              { category: 'SECURITY', tech: 'NIDS, Wireshark/tshark', color: '#FF5E7E' },
              { category: 'DATASETS', tech: 'CIC-IDS2017, UNSW-NB15', color: '#A78BFA' },
            ].map((st) => (
              <div key={st.category} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 text-center">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400 block mb-1">
                  {st.category}
                </span>
                <span className="text-xs font-bold text-white block">{st.tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 20 & 21: RESEARCH STATUS & ROADMAP */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#00d4ff]">Milestones</span>
              <h2 className="text-3xl font-extrabold text-white mt-1">Research Status & 18-Week Roadmap</h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">
                Progress tracking based on the proposed 18-week project timeline.
              </p>
            </div>

            {/* Status Flow */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
              {[
                { stage: 'Literature Review', status: 'Completed', color: '#7CFF00' },
                { stage: 'Problem & Scope Definition', status: 'Completed', color: '#7CFF00' },
                { stage: 'Methodology & Arch Design', status: 'Completed', color: '#7CFF00' },
                { stage: 'Model Dev & TinyML Opt', status: 'In Progress', color: '#00d4ff' },
                { stage: 'ESP32-S3 Hardware Setup', status: 'In Progress', color: '#00d4ff' },
                { stage: 'Transfer Learning Study', status: 'Planned', color: '#A78BFA' },
                { stage: 'Incremental Learning Study', status: 'Planned', color: '#A78BFA' },
                { stage: 'Testbed Latency Benchmarking', status: 'Planned', color: '#A78BFA' },
                { stage: 'End-to-End Evaluation', status: 'Planned', color: '#A78BFA' },
                { stage: 'Final Documentation & Thesis', status: 'Planned', color: '#A78BFA' },
              ].map((item, idx) => (
                <div key={item.stage} className="p-3 rounded-xl bg-white/[0.02] border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-gray-400">W{idx * 2 + 1}</span>
                    <span
                      className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.2 rounded"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.status}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-white mt-1 leading-snug">{item.stage}</div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 text-center text-xs text-gray-300">
              <span className="text-[#00d4ff] font-bold">Current Milestone:</span> Baseline 1D-CNN flow model development, feature selection matrix calculation, and TensorFlow Lite Micro arena environment initialization.
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SECTION 22: ACADEMIC REFERENCES */}
        {/* ========================================================================= */}
        <section className="relative">
          <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="flex items-center gap-2 mb-4 text-[#00d4ff]">
              <BookOpen size={18} />
              <h3 className="text-lg font-bold text-white">Academic References (Proposal Citations)</h3>
            </div>
            <ol className="space-y-2 text-xs text-gray-400 list-decimal list-inside leading-relaxed">
              <li>
                <span className="text-gray-200">Sharafaldin, I., Lashkari, A. H., & Ghorbani, A. A. (2018).</span> Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization (CIC-IDS2017). <em>ICISSP</em>.
              </li>
              <li>
                <span className="text-gray-200">David, R., Duke, P., Jain, A., et al. (2021).</span> TensorFlow Lite Micro: Embedded Machine Learning on TinyML Systems. <em>Proceedings of Machine Learning and Systems (MLSys)</em>.
              </li>
              <li>
                <span className="text-gray-200">Kirkpatrick, J., Pascanu, R., Rabinowitz, N., et al. (2017).</span> Overcoming catastrophic forgetting in neural networks (Elastic Weight Consolidation). <em>Proceedings of the National Academy of Sciences (PNAS)</em>.
              </li>
              <li>
                <span className="text-gray-200">Moustafa, N., & Slay, J. (2015).</span> UNSW-NB15: A comprehensive data set for network intrusion detection systems. <em>Military Communications and Information Systems Conference (MilCIS)</em>.
              </li>
              <li>
                <span className="text-gray-200">Rebuffi, S. A., Kolesnikov, A., Sperl, G., & Lampert, C. H. (2017).</span> iCaRL: Incremental Classifier and Representation Learning. <em>IEEE CVPR</em>.
              </li>
            </ol>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-white/10 text-center text-xs text-gray-500">
        <p>SecureEdge Research Project • Dilruk Migara Wickramarachchi • B.Sc. in Computer Systems Engineering (SLIIT)</p>
        <p className="mt-1 text-gray-400">
          Hosted on <a href="https://research.dilrukmigara.me" className="text-[#00d4ff] hover:underline">research.dilrukmigara.me</a> • Connected to <a href="https://dilrukmigara.me" className="text-[#7CFF00] hover:underline">dilrukmigara.me</a>
        </p>
      </footer>
    </div>
  );
}
