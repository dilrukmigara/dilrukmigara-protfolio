import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Cpu,
  Shield,
  Network,
  Wifi,
  Server,
  Thermometer,
  Sun,
  DoorOpen,
  Menu,
  X,
} from "lucide-react";
import {
  project,
  nav,
  features,
  progress,
  roadmap,
  feedback,
  stages,
  references,
} from "./content";
import proposal from "./proposal.json";

function Badge({ children }: { children: ReactNode }) {
  return (
    <span
      className={`badge ${children === "Implemented" || children === "Demonstrated" ? "verified" : children === "Planned" ? "planned" : "pending"}`}
    >
      {children}
    </span>
  );
}
function Heading({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{number} / RESEARCH NOTEBOOK</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}
function Evidence({ children }: { children: ReactNode }) {
  return <p className="evidence">{children}</p>;
}
function Flow({ items }: { items: string[] }) {
  return (
    <ol className="flow">
      {items.map((s, i) => (
        <li key={s}>
          <span>{s}</span>
          {i < items.length - 1 && <ArrowRight aria-hidden="true" size={18} />}
        </li>
      ))}
    </ol>
  );
}
function NetworkStory() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    const o = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setStage(Number((e.target as HTMLElement).dataset.stage));
        });
      },
      { rootMargin: "-25% 0px -40% 0px" },
    );
    document.querySelectorAll("[data-stage]").forEach((e) => o.observe(e));
    return () => o.disconnect();
  }, []);
  return (
    <div className="story">
      <div className={`network-visual stage-${stage}`}>
        <div className="figure-top">
          <span>Physical network · conceptual layout</span>
          <span>↔ Bidirectional links</span>
        </div>
        <div className="network-line">
          <div className="device cloud">
            <Server />
            <strong>Cloud dashboard</strong>
            <small>HTTPS sensor telemetry</small>
          </div>
          <div className="wire">
            <span>Internet ↕</span>
          </div>
          <div className="device router">
            <Network />
            <strong>Main router</strong>
            <small>Internet uplink</small>
          </div>
          <div className="wire ethernet">
            <span>Ethernet LAN ↕</span>
            <i />
          </div>
          <div className="device gateway">
            <Cpu size={36} />
            <div>
              <span className="eyebrow">SECUREEDGE</span>
              <strong>ESP32-S3-ETH · W5500</strong>
              <small>DHCP + NAT · Wi-Fi AP</small>
              <code>192.168.4.1</code>
            </div>
          </div>
          <div className="wire wireless">
            <span>Wi-Fi ↕</span>
          </div>
          <div className="sensors">
            {[
              [Thermometer, "DHT11", "Temperature / humidity"],
              [Sun, "LDR", "Light"],
              [DoorOpen, "Reed switch", "Door status"],
            ].map(([Icon, name, label]) => {
              const I = Icon as typeof Sun;
              return (
                <div className="sensor" key={String(name)}>
                  <I />
                  <strong>{String(name)}</strong>
                  <small>{String(label)}</small>
                </div>
              );
            })}
          </div>
        </div>
        <div className="concept">
          <span>Inside the gateway · conceptual processing</span>
          <p>
            Packet observation <ArrowRight size={14} /> Flow features{" "}
            <ArrowRight size={14} /> TinyML inference
          </p>
        </div>
        <Evidence>
          Illustrative data flow. Planned demonstration setup; three physical
          sensor connections require validation. This is a technical schematic,
          not a board photograph or live traffic view.
        </Evidence>
      </div>
      <div className="story-steps">
        {stages.map(([title, caption], i) => (
          <article
            key={title}
            data-stage={i}
            className={stage === i ? "selected" : ""}
          >
            <span className="step-index">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{caption}</p>
            {i === 1 && <Badge>Requires validation</Badge>}
            {i === 2 && (
              <p className="muted">
                Inference stays on the gateway. Cloud access is not the
                inference engine.
              </p>
            )}
            {i === 3 && (
              <p className="muted">
                Telemetry follows the sensor → gateway → router → cloud route.
              </p>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
export default function App() {
  const [active, setActive] = useState("overview");
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const aliases: Record<string, string> = {
      problem: "research-overview",
      gap: "research-overview",
      objectives: "research-overview",
      novelty: "research-overview",
      "transfer-learning": "roadmap",
      "incremental-learning": "roadmap",
      "adaptive-learning": "roadmap",
      tinyml: "features",
      "tinyml-rtos": "features",
      methodology: "features",
      evaluation: "results",
    };
    const route = location.pathname.split("/").filter(Boolean).pop() || "";
    const hash = location.hash.slice(1);
    const target = aliases[hash] || hash || aliases[route] || route;
    if (target)
      requestAnimationFrame(() =>
        document.getElementById(target)?.scrollIntoView(),
      );
    const o = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-10% 0px -65% 0px" },
    );
    nav.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) o.observe(el);
    });
    return () => o.disconnect();
  }, []);
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header>
        <div className="header-inner">
          <a href="#overview" className="brand" aria-label="SecureEdge home">
            <Shield />
            <span>
              SecureEdge<span className="brand-sub">RESEARCH / SLIIT</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="main-nav"
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
          <nav
            id="main-nav"
            className={menu ? "open" : ""}
            aria-label="Main navigation"
          >
            {nav.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setMenu(false)}
              >
                {label}
              </a>
            ))}
          </nav>
          <a className="portfolio" href="https://dilrukmigara.me">
            Portfolio <ArrowUpRight size={16} />
          </a>
        </div>
      </header>
      <main id="main">
        <section id="overview" className="hero">
          <div>
            <div className="milestone">
              <span /> Progress Presentation 1
            </div>
            <h1>
              SecureEdge<span className="title-dot">.</span>
            </h1>
            <p className="research-title">{project.title}</p>
            <p className="hero-summary">
              Working gateway and local TinyML prototype; target-IoT validation
              in progress.
            </p>
            <div className="actions">
              <a className="button primary" href="#progress">
                Explore PP1 Progress <ArrowRight size={18} />
              </a>
              <a className="button" href="#results">
                View Results
              </a>
            </div>
            <div className="text-links">
              <a href="#architecture">View Architecture ↗</a>
              <a href="#proposal">Proposal Archive ↗</a>
            </div>
            <div className="researcher">
              {project.researcher}
              <span>
                {project.studentId} · {project.programme}
              </span>
            </div>
          </div>
          <aside className="hero-aside">
            <div className="aside-top">
              <span>THE CURRENT PROTOTYPE</span>
              <Cpu size={22} />
            </div>
            <h2>
              Observe locally.
              <br />
              Classify at the edge.
            </h2>
            <div className="mini-flow">
              <span>Routed network traffic</span>
              <span>↓</span>
              <strong>
                ESP32-S3<span>Flow features → INT8 CNN</span>
              </strong>
              <span>↓</span>
              <span>Local monitoring output</span>
            </div>
            <div className="state-row">
              <span>Gateway & local inference</span>
              <Badge>Implemented</Badge>
            </div>
            <div className="state-row">
              <span>Target-IoT evaluation</span>
              <Badge>In progress</Badge>
            </div>
            <div className="state-row">
              <span>Transfer / incremental learning</span>
              <Badge>Planned</Badge>
            </div>
            <Evidence>
              Reported prototype status. Implementation does not establish
              detection accuracy.
            </Evidence>
          </aside>
        </section>
        <div className="context-strip">
          <span>
            EDGE AI <strong>On-device inference</strong>
          </span>
          <span>
            NETWORK <strong>Routed IPv4 gateway</strong>
          </span>
          <span>
            ASSESSMENT <strong>Evidence before claims</strong>
          </span>
        </div>
        <section id="research-overview">
          <Heading
            number="01"
            title="A small gateway. A focused research question."
          >
            Can a constrained microcontroller support useful flow classification
            while balancing accuracy, latency, memory and energy?
          </Heading>
          <div className="two-col">
            <div>
              <h3>The problem</h3>
              <p>
                IoT devices are increasingly connected, but their limited
                compute and energy budgets make conventional network intrusion
                detection difficult to deploy at the edge.
              </p>
              <h3>The investigation</h3>
              <p>
                SecureEdge investigates compact deep learning, cross-environment
                adaptation and incremental learning on physical microcontroller
                hardware. The gap under study is how these approaches work
                together under deployment constraints—not a claim that existing
                research has solved none of them.
              </p>
            </div>
            <div className="panel">
              <h3>Research objectives & questions</h3>
              {proposal.questions.map((q, i) => (
                <details key={q.question}>
                  <summary>{q.question}</summary>
                  <p>{q.objective}</p>
                  <p>{q.details}</p>
                  <Badge>{i < 2 ? "In progress" : "Planned"}</Badge>
                </details>
              ))}
            </div>
          </div>
          <div className="notice">
            Baseline training uses CIC-IDS2017-derived flow data. UNSW-NB15 and
            NSL-KDD were proposed datasets; use in the current baseline is not
            established. Transfer learning, incremental learning and pruning are
            not presented as completed.
          </div>
        </section>
        <section id="progress">
          <Heading number="02" title="What works. What still needs evidence.">
            A PP1 status ledger that separates implementation, demonstration and
            experimental validation.
          </Heading>
          <Evidence>{project.evidence}</Evidence>
          <div
            className="table-wrap"
            tabIndex={0}
            aria-label="Scrollable PP1 status table"
          >
            <table>
              <caption>
                PP1 requirements, reported evidence and next steps
              </caption>
              <thead>
                <tr>
                  {[
                    "Requirement",
                    "Status",
                    "Evidence / current interpretation",
                    "Next step",
                  ].map((t) => (
                    <th key={t} scope="col">
                      {t}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {progress.map(([name, status, evidence, next]) => (
                  <tr key={name}>
                    <th scope="row">{name}</th>
                    <td>
                      <Badge>{status}</Badge>
                    </td>
                    <td>{evidence}</td>
                    <td>{next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section id="architecture">
          <Heading
            number="03"
            title="Follow the network. Find the intelligence."
          >
            Ethernet supplies the uplink. SecureEdge routes downstream traffic
            and runs flow classification locally.
          </Heading>
          <NetworkStory />
          <div className="two-col architecture-detail">
            <div className="panel">
              <h3>Inside SecureEdge</h3>
              <Flow
                items={[
                  "Observed routed packets",
                  "Bidirectional flow aggregation",
                  "16-feature vector",
                  "Matching training preprocessing",
                  "INT8 CNN inference",
                  "Score + threshold",
                  "Monitoring output",
                ]}
              />
              <Evidence>
                Training/runtime parity is a requirement still to validate. A
                suspicious score is not a confirmed attack.
              </Evidence>
            </div>
            <div>
              <h3>A routed gateway, not a transparent bridge</h3>
              <p>
                Wi-Fi clients receive addresses through DHCP. NAT routes their
                traffic through W5500 Ethernet to the main router. Laptop
                internet connectivity has been demonstrated according to the
                update brief.
              </p>
              <div className="planned-path">
                Planned path: security events → MQTT/TLS → alert dashboard
              </div>
              <div className="planned-path">
                Planned path: classification → verified mitigation
              </div>
              <p>
                HTTPS sensor telemetry is a separate application path through
                the gateway. It does not depend on the CNN output.
              </p>
            </div>
          </div>
          <div className="notice">
            <strong>Capture boundary:</strong> monitoring focuses on routed IPv4
            TCP/UDP. IPv6, ICMP, fragments and gateway-local traffic are outside
            the stated coverage. Some flows remain unscored.{" "}
            <strong>Not scored never means benign.</strong>
          </div>
          <div className="hardware">
            <Cpu size={40} />
            <div>
              <span className="eyebrow">HARDWARE & RUNTIME</span>
              <h3>Waveshare ESP32-S3-ETH · N16R8</h3>
              <p>16 MB flash · 8 MB PSRAM · W5500 Ethernet · Wi-Fi AP</p>
              <p>
                Arduino-ESP32 with FreeRTOS-based tasks, local flow monitoring,
                a local web dashboard and TensorFlow Lite Micro inference.
              </p>
              <Evidence>
                Hardware specifications and runtime are researcher-reported.
                Prototype photographs were not supplied; no substitute
                photograph is shown.
              </Evidence>
            </div>
          </div>
        </section>
        <section id="features">
          <Heading number="04" title="Sixteen features. One compact model.">
            Statistical summaries reduce the amount of state and input data a
            constrained gateway must process.
          </Heading>
          <div className="feature-grid">
            {features.map((f, i) => (
              <div key={f.title} className="feature">
                <span className="step-index">0{i + 1}</span>
                <h3>{f.title}</h3>
                <p>{f.note}</p>
                <details>
                  <summary>
                    View {f.items.length}{" "}
                    {f.items.length === 1 ? "feature" : "features"}
                  </summary>
                  <ol
                    start={
                      1 +
                      features
                        .slice(0, i)
                        .reduce((s, g) => s + g.items.length, 0)
                    }
                  >
                    {f.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                </details>
              </div>
            ))}
          </div>
          <p>
            Volume, packet size and timing together may reveal patterns relevant
            to classification. This is an explanatory interpretation, not a
            proven feature-to-attack mapping. No single feature independently
            identifies an attack. Formal feature ablation remains pending.
          </p>
          <div className="two-col">
            <div className="panel">
              <h3>Lightweight 1D-CNN</h3>
              <dl className="model-stats">
                {project.model.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <Evidence>
                Configuration reported in the PP1 brief; model artifact not
                supplied.
              </Evidence>
              <details>
                <summary>Model architecture</summary>
                <Flow
                  items={[
                    "Input [16, 1]",
                    "Conv1D · 8 filters · kernel 3 · same · ReLU",
                    "Conv1D · 16 filters · kernel 3 · same · ReLU",
                    "Global Average Pooling",
                    "Dense 16 · ReLU",
                    "Dense 1 · sigmoid",
                  ]}
                />
              </details>
            </div>
            <div>
              <h3>Reproducible preprocessing</h3>
              <ol className="numbered">
                <li>Use the exact fixed feature order above.</li>
                <li>Apply the log1p transformation.</li>
                <li>Standardize with training-derived parameters.</li>
                <li>Quantize consistently with the deployed INT8 model.</li>
              </ol>
              <p className="notice">
                Capture definitions, direction, units and preprocessing parity
                must be validated against training. Deployment alone does not
                establish parity.
              </p>
              <details>
                <summary>Feature context and model selection</summary>
                <p>
                  IP addresses, MAC addresses and ports identify flows or
                  provide context; they are not CNN inputs. TCP flags, rates and
                  additional timing statistics remain candidates for evaluation.
                </p>
                <p>
                  CNN selection considers file size, operator support, memory
                  requirements and MCU feasibility as well as accuracy. It is
                  not claimed to have the highest offline accuracy. The model
                  file size is not the runtime memory footprint.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section id="results">
          <Heading number="05" title="Results need context.">
            Offline evaluation, quantization and on-device measurements answer
            different questions.
          </Heading>
          <div className="notice">
            <strong>Evidence gate:</strong> the brief includes historical
            numerical results, but the underlying result files, sample counts
            and dated logs are unavailable in this checkout. Those numbers are
            withheld from published result tables until they can be
            cross-checked.
          </div>
          <div className="two-col result-grid">
            {[
              [
                "A",
                "Offline dataset evaluation",
                "Random Forest, MLP and CNN comparison reported on CIC-IDS2017-derived flows.",
                "Required: source export, split protocol, sample count, class balance and per-class metrics. Offline accuracy is not live IoT detection accuracy.",
              ],
              [
                "B",
                "Quantized-model comparison",
                "Float versus INT8 evaluation awaits matched-subset evidence.",
                "Required: identical subset, sample count and preprocessing. Do not compare a subset INT8 score with a full-test float score as equivalent.",
              ],
              [
                "C",
                "Preliminary device measurements",
                "A historical device snapshot was reported but its dated log was not supplied.",
                "Scoring coverage differs from accuracy. A single model invocation is neither a representative average nor end-to-end detection time.",
              ],
              [
                "D",
                "Target-IoT validation",
                "Controlled labelled testing in the intended environment remains to be performed.",
                "Minority-attack performance, false positives and target-domain generalization require attention.",
              ],
            ].map(([letter, title, body, note]) => (
              <article key={letter} className="panel result">
                <span className="result-letter">{letter}</span>
                <Badge>Requires validation</Badge>
                <h3>{title}</h3>
                <p>{body}</p>
                <Evidence>{note}</Evidence>
              </article>
            ))}
          </div>
          <div className="table-wrap" tabIndex={0}>
            <table>
              <caption>
                Measurements still needed for end-to-end evaluation
              </caption>
              <thead>
                <tr>
                  <th scope="col">Measure</th>
                  <th scope="col">Available result</th>
                  <th scope="col">Interpretation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "IDS-on/off throughput",
                    "Network forwarding under comparable load",
                  ],
                  [
                    "End-to-end detection latency",
                    "Flow formation + queuing + processing",
                  ],
                  [
                    "Mitigation time",
                    "Verified enforcement after classification",
                  ],
                  [
                    "Energy and memory averages",
                    "Representative runtime measurements",
                  ],
                  [
                    "Latency distributions",
                    "Repeated measurements, not one invocation",
                  ],
                ].map(([a, b]) => (
                  <tr key={a}>
                    <th scope="row">{a}</th>
                    <td>Not yet measured</td>
                    <td>{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section id="telemetry">
          <Heading number="06" title="A separate sensor demonstration.">
            Sensor telemetry exercises the network path. It does not prove NIDS
            accuracy.
          </Heading>
          <div className="two-col">
            <div>
              <div className="sensor-list">
                {[
                  ["SE-ENV-01", "DHT11 temperature / humidity"],
                  ["SE-LIGHT-01", "LDR light reading"],
                  ["SE-DOOR-01", "Reed-switch door status"],
                ].map(([id, label]) => (
                  <div key={id}>
                    <code>{id}</code>
                    <span>{label}</span>
                    <Badge>Requires validation</Badge>
                  </div>
                ))}
              </div>
              <p>
                The server and firmware template are reported as implemented.
                Successful physical connection of all three nodes is not
                confirmed.
              </p>
              <a
                className="button"
                href="https://secureedge-sensor-hub-migara.dilrukmigara.chatgpt.site/"
                target="_blank"
                rel="noreferrer"
              >
                Visit existing dashboard address <ArrowUpRight size={16} />
              </a>
              <Evidence>
                External dashboard; availability not verified. Intended custom
                domain: pp1iot.dilrukmigara.me. HTTPS availability could not be
                confirmed during this update, so it is not labelled live.
              </Evidence>
            </div>
            <div className="panel">
              <h3>Implemented cloud functionality</h3>
              <p>
                HTTPS POST ingestion, per-device API keys, persistent recent
                history, sensor charts, last-received status, HTTP request
                duration, ESP32-triggered upload-goodput tests and CSV export.
              </p>
              <details>
                <summary>How to interpret dashboard information</summary>
                <ul>
                  <li>
                    SSID, RSSI, local IP and MAC are reported by the ESP32.
                  </li>
                  <li>RSSI is signal strength, not network speed.</li>
                  <li>
                    Upload goodput measures application transfer from ESP32 to
                    server, not ISP bandwidth.
                  </li>
                  <li>
                    “Stale” means no recent telemetry, not verified Wi-Fi
                    disconnection.
                  </li>
                </ul>
              </details>
              <Evidence>
                HTTP telemetry is the current PP1 approach. MQTT/TLS
                security-event integration remains planned. No private
                management endpoint is connected to this research site.
              </Evidence>
            </div>
          </div>
        </section>
        <section id="feedback">
          <Heading number="07" title="From panel feedback to next actions." />
          <div className="feedback-list">
            {feedback.map(([title, response, next], i) => (
              <article key={title}>
                <span className="step-index">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{response}</p>
                  <p className="muted">
                    <strong>Remaining:</strong> {next}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="roadmap">
          <Heading number="08" title="The next evidence to build.">
            Milestones follow the prototype—not an invented completion
            percentage.
          </Heading>
          <div className="roadmap-summary">
            <Badge>Implemented</Badge>
            <p>
              Reported foundation: routed gateway, local flow monitoring, CNN
              inference and HTTP sensor dashboard.
            </p>
          </div>
          <ol className="roadmap">
            {roadmap.map((item, i) => (
              <li key={item}>
                <span>{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <Badge>{i < 4 ? "In progress" : "Planned"}</Badge>
                  <h3>{item}</h3>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <section id="proposal">
          <Heading number="09" title="Proposal archive.">
            The original research direction, preserved as a proposal—not a
            record of completed work.
          </Heading>
          <div className="two-col">
            <div>
              <h3>Then: an adaptive TinyML pipeline</h3>
              <p>
                The proposal connected offline capture and feature selection to
                ESP32-S3 inference, MQTT communication and a security dashboard.
                Transfer learning and continual learning were research
                objectives.
              </p>
              <h3>Now: a physical gateway prototype</h3>
              <p>
                PP1 specifies a routed Ethernet-to-Wi-Fi gateway, a 16-feature
                CNN, local monitoring and a separate HTTP sensor demonstration.
                MQTT security telemetry, adaptation and verified mitigation
                remain future work.
              </p>
            </div>
            <div className="panel">
              <details>
                <summary>Original seven-stage architecture</summary>
                <Evidence>
                  Archived proposal descriptions below are intended designs, not
                  validated capabilities.
                </Evidence>
                <ol>
                  {proposal.architecture.map(([title, summary]) => (
                    <li key={title}>
                      <strong>{title}</strong>
                      <p>{summary}</p>
                    </li>
                  ))}
                </ol>
              </details>
              <details>
                <summary>Original 18-week roadmap</summary>
                <Evidence>
                  Original proposed schedule only; it does not report actual
                  dates or completion.
                </Evidence>
                <ol>
                  {proposal.roadmap.map((s, i) => (
                    <li key={s}>
                      Week {i * 2 + 1}: {s}
                    </li>
                  ))}
                </ol>
              </details>
              <a
                className="archive-link"
                href="https://github.com/dilrukmigara/dilrukmigara-protfolio/blob/f6e8bbd13c81d0a3a04714189fc435fcac253624/research/src/App.tsx"
                target="_blank"
                rel="noreferrer"
              >
                Original proposal website source ↗
              </a>
            </div>
          </div>
        </section>
        <section id="documents">
          <Heading number="10" title="Research documents & evidence." />
          <div className="two-col">
            <article className="panel">
              <span className="eyebrow">PROPOSAL</span>
              <h3>Original website record</h3>
              <p>
                Architecture, objectives, research questions and proposed
                roadmap are preserved in the archive above.
              </p>
              <a className="button" href="#proposal">
                Read proposal archive <ArrowRight size={16} />
              </a>
              <Evidence>
                Presentation and report downloads are unavailable; no document
                files were supplied.
              </Evidence>
            </article>
            <article className="panel">
              <span className="eyebrow">PP1</span>
              <h3>Evidence pack awaiting files</h3>
              <p>
                Presentation, result exports, firmware documentation, dated
                device logs, screenshots and prototype photographs.
              </p>
              <Badge>Requires validation</Badge>
              <Evidence>
                No placeholder downloads. The update brief is the current source
                for reported implementation status.
              </Evidence>
            </article>
          </div>
        </section>
        <section id="references">
          <Heading number="11" title="References & researcher." />
          <div className="two-col">
            <ol className="references">
              {references.map(([topic, citation]) => (
                <li key={topic}>
                  <strong>{topic}</strong>
                  <p>{citation}</p>
                </li>
              ))}
            </ol>
            <aside className="panel identity">
              <Shield size={32} />
              <h3>{project.researcher}</h3>
              <p>D. M. Wickramarachchi</p>
              <code>{project.studentId}</code>
              <p>{project.programme}</p>
              <a href="https://dilrukmigara.me">View researcher portfolio ↗</a>
              <Evidence>
                References retained from the original proposal website for
                dataset, embedded-inference and planned adaptation context. They
                do not substantiate this prototype’s performance.
              </Evidence>
            </aside>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#overview">
          <Shield size={20} /> SecureEdge
        </a>
        <p>Research in progress. Claims with context.</p>
        <a href="#overview">Back to top ↑</a>
      </footer>
    </>
  );
}
