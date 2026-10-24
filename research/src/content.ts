export const project = {
  title:
    "Transfer Learning and Incremental TinyML for Real-Time Intrusion Detection in Resource-Constrained IoT Networks",
  researcher: "Dilruk Migara Wickramarachchi",
  studentId: "IT23288812",
  programme: "Computer Systems Engineering, SLIIT",
  evidence:
    "Implementation statements are researcher-reported in the PP1 update brief. Independent result files, firmware, screenshots and prototype photographs were not supplied with this update.",
  model: [
    ["Input", "[16, 1]"],
    ["Parameters", "721"],
    ["INT8 model file", "7,072 bytes"],
    ["Decision threshold", "0.75"],
  ],
};
export const nav = [
  ["overview", "Overview"],
  ["progress", "PP1 Progress"],
  ["architecture", "Architecture"],
  ["results", "Results"],
  ["roadmap", "Roadmap"],
  ["documents", "Documents"],
];
export const features = [
  {
    title: "Duration",
    note: "How long the observed flow lasts.",
    items: ["Flow Duration"],
  },
  {
    title: "Packet counts & byte volumes",
    note: "Traffic volume in each direction.",
    items: [
      "Total Forward Packets",
      "Total Backward Packets",
      "Total Length of Forward Packets",
      "Total Length of Backward Packets",
    ],
  },
  {
    title: "Directional packet lengths",
    note: "The distribution of packet sizes in each direction.",
    items: [
      "Forward Packet Length Minimum",
      "Forward Packet Length Maximum",
      "Forward Packet Length Mean",
      "Forward Packet Length Standard Deviation",
      "Backward Packet Length Minimum",
      "Backward Packet Length Maximum",
      "Backward Packet Length Mean",
      "Backward Packet Length Standard Deviation",
    ],
  },
  {
    title: "Packet timing",
    note: "Spacing and variation between observed packets.",
    items: [
      "Flow Inter-Arrival Time Mean",
      "Flow Inter-Arrival Time Standard Deviation",
      "Flow Inter-Arrival Time Maximum",
    ],
  },
];
export const progress = [
  [
    "Hardware / network setup",
    "Implemented",
    "Waveshare ESP32-S3-ETH prototype reported. Photographs not supplied.",
    "Document the physical test setup.",
  ],
  [
    "Gateway functionality",
    "Demonstrated",
    "Laptop internet connectivity reported via Ethernet uplink and Wi-Fi AP.",
    "Validate all three physical IoT nodes.",
  ],
  [
    "Real-time monitoring",
    "Implemented",
    "Local flow dashboard reported; screenshot and firmware evidence pending.",
    "Validate capture coverage and complete device inventory.",
  ],
  [
    "TinyML detection",
    "Requires validation",
    "Local CNN scoring reported on ESP32-S3.",
    "Run controlled, labelled target-IoT attack evaluation.",
  ],
  [
    "Automated mitigation",
    "Planned",
    "No verified blocking evidence.",
    "Implement and verify mitigation safely.",
  ],
  [
    "MQTT / dashboard",
    "In progress",
    "HTTP sensor dashboard and firmware template reported.",
    "Validate physical uploads; implement MQTT/TLS security events.",
  ],
  [
    "Performance evaluation",
    "Preliminary result",
    "Offline results and device observations reported; source files unavailable here.",
    "Attach source exports and evaluation conditions.",
  ],
  [
    "Comparative analysis",
    "In progress",
    "Offline model comparison reported.",
    "Benchmark IDS enabled versus disabled on the same setup.",
  ],
  [
    "Reliability",
    "Planned",
    "MQTT outage/recovery not yet tested.",
    "Measure recovery, buffering and delivery behavior.",
  ],
];
export const roadmap = [
  "Validate capture and training/runtime feature parity",
  "Connect and test three physical sensor nodes",
  "Investigate unscored-flow causes",
  "Collect labelled target-IoT traffic",
  "Evaluate transfer learning against training from scratch",
  "Implement and evaluate MQTT/TLS security telemetry and recovery",
  "Implement and verify mitigation",
  "Compare IDS enabled/disabled throughput, latency and memory",
  "Evaluate incremental learning and catastrophic forgetting",
];
export const feedback = [
  [
    "Presentation timing",
    "Focused PP1 narrative and four-stage network explanation.",
    "Rehearse against the panel time limit.",
  ],
  [
    "Explain model choices",
    "Model structure, size and deployment trade-offs are visible.",
    "Document operator support and measured memory requirements.",
  ],
  [
    "Justify features",
    "Exact feature order and four groups are documented.",
    "Formal ablation and excluded-feature comparison remain pending.",
  ],
  [
    "Related-work coverage",
    "Proposal reference topics retained.",
    "Broader literature review remains ongoing.",
  ],
  [
    "Target-environment adaptation",
    "Baseline and adaptation work are separated.",
    "Transfer learning and target-IoT validation remain incomplete.",
  ],
  [
    "Readability and font sizes",
    "Responsive layouts, readable tables and progressive detail.",
    "Check readability in the actual presentation room.",
  ],
];
export const stages = [
  [
    "Ethernet uplink",
    "SecureEdge connects to the main router through Ethernet.",
  ],
  [
    "Wi-Fi gateway",
    "IoT devices connect to the SecureEdge Wi-Fi access point.",
  ],
  [
    "Local intrusion detection",
    "Network-flow classification runs locally on the ESP32-S3.",
  ],
  [
    "Cloud telemetry",
    "Sensor readings reach the cloud dashboard through HTTPS.",
  ],
];
export const references = [
  [
    "CIC-IDS2017 / source dataset",
    "Sharafaldin, Lashkari & Ghorbani (2018). Toward Generating a New Intrusion Detection Dataset and Intrusion Traffic Characterization. ICISSP.",
  ],
  [
    "Embedded inference",
    "David et al. (2021). TensorFlow Lite Micro: Embedded Machine Learning on TinyML Systems. MLSys.",
  ],
  [
    "Forgetting / planned investigation",
    "Kirkpatrick et al. (2017). Overcoming catastrophic forgetting in neural networks. PNAS.",
  ],
  [
    "Alternative proposed dataset",
    "Moustafa & Slay (2015). UNSW-NB15: A comprehensive data set for network intrusion detection systems. MilCIS.",
  ],
  [
    "Incremental learning / planned investigation",
    "Rebuffi et al. (2017). iCaRL: Incremental Classifier and Representation Learning. CVPR.",
  ],
];
