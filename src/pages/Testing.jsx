import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Database, ShieldCheck, Sparkle, FlowArrow, ChartBar, Gauge, Scales, GitFork, CheckSquare,
  Shuffle, Broom, ClockCountdown, WarningDiamond, Brain,
  Warehouse, ChartPieSlice, Waves, Lightning, Cards,
  MagnifyingGlass, CompassTool, Code, GitMerge, ChartLineUp,
  Bank, CurrencyCircleDollar, Umbrella, Factory, ShoppingCart, Heartbeat, HardHat,
  Strategy, Stack, Infinity as InfinityIcon, UsersThree,
  Circuitry, Wall, Snowflake, CloudArrowUp, Cloud, GoogleChromeLogo,
  BracketsCurly, Graph, Plugs, ArrowsMerge, FileCode, Eye,
} from "@phosphor-icons/react";

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const BG = "#01031c", ALT = "#050726", CARD = "#0F1034", ACCENT = "#877BF1", ACCENT2 = "#A9A0F5", GOLD = "#FCCA71";
const TEXT = "#FBFBFF", BODY = "#CACBDB", MUTED = "#8F92B8", FAINT = "#5C5F85";
const BORDER = "rgba(135,123,241,0.18)", BORDER15 = "rgba(135,123,241,0.25)", BORDER2 = "rgba(135,123,241,0.45)", TINT = "rgba(135,123,241,0.06)";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -6% 0px" },
  transition: { duration: 0.55, delay: (i % 4) * 0.05, ease: [0.2, 0.7, 0.2, 1] },
});

const Eyebrow = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
    <span style={{ width: 34, height: 2, background: ACCENT }} />
    <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase" }}>{children}</span>
  </div>
);

const H2 = ({ children, mb = 0 }) => (
  <h2 style={{ fontWeight: 700, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: `0 0 ${mb}px` }}>{children}</h2>
);

const problems = [
  { n: "01", icon: Shuffle, t: "Fragmented Data Sources", d: "Information is spread across ERP, CRM, finance apps, spreadsheets, IoT devices, and third-party tools — no unified view of operations." },
  { n: "02", icon: ChartBar, t: "Inconsistent Reporting", d: "Departments rely on different datasets and methods, leading to conflicting metrics and reduced confidence in decisions." },
  { n: "03", icon: Broom, t: "Manual Data Preparation", d: "Teams spend more time collecting, cleaning, and preparing data than analyzing it to drive business value." },
  { n: "04", icon: ClockCountdown, t: "Limited Real-Time Visibility", d: "Delayed reporting prevents leaders from responding quickly to operational changes, customer demands, and risks." },
  { n: "05", icon: WarningDiamond, t: "Poor Data Quality", d: "Duplicate records, missing information, and inconsistent structures reduce the reliability of analytics and AI." },
  { n: "06", icon: Brain, t: "AI Without Data Readiness", d: "AI depends on high-quality, governed, accessible data. Many AI projects fail without a mature data foundation." },
  { n: "07", icon: Scales, t: "Compliance & Governance Challenges", d: "Managing privacy, security, lineage, and regulatory compliance grows harder as enterprise data grows." },
];

const engineer = [
  { n: "01", icon: Database, t: "Enterprise Data Platforms", d: "Centralized architectures that integrate information from multiple systems into a single source of truth." },
  { n: "02", icon: Warehouse, t: "Data Warehousing", d: "Modern data warehouses optimized for analytics, reporting, and business intelligence." },
  { n: "03", icon: FlowArrow, t: "ETL & ELT Pipelines", d: "Automated pipelines that extract, transform, validate, and load information from enterprise and external sources." },
  { n: "04", icon: ChartPieSlice, t: "Business Intelligence Platforms", d: "Interactive dashboards and reporting with real-time visibility into performance and operational KPIs." },
  { n: "05", icon: Waves, t: "Data Lake & Lakehouse", d: "Scalable storage for structured, semi-structured, and unstructured enterprise data." },
  { n: "06", icon: Lightning, t: "Real-Time Data Processing", d: "Streaming architectures for live operational monitoring, event processing, and near real-time analytics." },
  { n: "07", icon: Scales, t: "Data Governance & Quality", d: "Governance frameworks, quality controls, metadata management, lineage tracking, and access policies." },
  { n: "08", icon: Cards, t: "Master Data Management", d: "Consistent, trusted master records across customers, products, vendors, and enterprise entities." },
  { n: "09", icon: Sparkle, t: "AI-Ready Data Foundations", d: "Data ecosystems prepared for machine learning, Generative AI, predictive analytics, and intelligent automation." },
];

const method = [
  { n: "1", icon: MagnifyingGlass, t: "Discover", d: "Understand business objectives, workflows, data sources, reporting needs, and governance requirements." },
  { n: "2", icon: CompassTool, t: "Architect", d: "Design scalable data architectures, integration frameworks, storage models, and analytics strategies." },
  { n: "3", icon: Code, t: "Engineer", d: "Build modern data platforms, pipelines, warehouses, and governance using proven engineering practices." },
  { n: "4", icon: GitMerge, t: "Integrate", d: "Connect ERP, CRM, finance, IoT, cloud services, and third-party platforms into a unified ecosystem." },
  { n: "5", icon: ChartLineUp, t: "Optimize", d: "Continuously improve quality, performance, governance, scalability, and analytics as needs evolve." },
];

const techCats = [
  { cat: "Data Platforms", items: [["Microsoft Fabric", Circuitry], ["Databricks", Wall], ["Snowflake", Snowflake], ["Azure Synapse", CloudArrowUp]] },
  { cat: "Databases", items: [["PostgreSQL", Database], ["SQL Server", Database], ["MySQL", Database], ["MariaDB", Database], ["MongoDB", Database]] },
  { cat: "Big Data & Processing", items: [["Apache Spark", Lightning], ["Apache Kafka", Waves], ["Apache Airflow", FlowArrow], ["Hadoop", Stack]] },
  { cat: "Business Intelligence", items: [["Power BI", ChartBar], ["Tableau", ChartLineUp], ["Looker", Eye], ["Apache Superset", ChartPieSlice]] },
  { cat: "Cloud Platforms", items: [["Microsoft Azure", CloudArrowUp], ["AWS", Cloud], ["Google Cloud", GoogleChromeLogo]] },
  { cat: "Data Integration", items: [["REST APIs", BracketsCurly], ["GraphQL", Graph], ["Azure Data Factory", Factory], ["Talend", Plugs], ["Fivetran", ArrowsMerge]] },
  { cat: "Programming", items: [["Python", FileCode], ["SQL", Database], ["PySpark", Lightning]] },
];

const industries = [
  { icon: Bank, t: "Government & Public Sector", d: "Citizen services, public administration, infrastructure monitoring, governance analytics, and policy decision support." },
  { icon: CurrencyCircleDollar, t: "Banking & Financial Services", d: "Enterprise reporting, regulatory analytics, customer intelligence, operational dashboards, and risk management." },
  { icon: Umbrella, t: "Insurance", d: "Claims analytics, underwriting intelligence, customer reporting, fraud analysis, and operational visibility." },
  { icon: Factory, t: "Manufacturing", d: "Production analytics, supply chain intelligence, inventory optimization, quality reporting, and performance monitoring." },
  { icon: ShoppingCart, t: "Retail, D2C & Commerce", d: "Sales analytics, customer behavior insights, inventory intelligence, fulfillment analytics, and performance dashboards." },
  { icon: Heartbeat, t: "Healthcare", d: "Clinical reporting, operational analytics, patient data integration, compliance reporting, and healthcare intelligence." },
  { icon: HardHat, t: "Infrastructure & EPC", d: "Project analytics, milestone tracking, financial reporting, procurement dashboards, and asset intelligence." },
];

const why = [
  { n: "01", icon: Strategy, t: "Business-Driven Data Engineering", d: "Data platforms designed around business objectives, operational workflows, and decision-making — not just technology." },
  { n: "02", icon: Stack, t: "Enterprise-Scale Architecture", d: "Every platform is engineered for scalability, governance, performance, and long-term maintainability." },
  { n: "03", icon: Sparkle, t: "AI-Ready by Design", d: "Architectures that prepare you for machine learning, Generative AI, predictive analytics, and future innovation." },
  { n: "04", icon: Scales, t: "Trusted Data Governance", d: "Reliable, secure, compliant data ecosystems that stakeholders can trust." },
  { n: "05", icon: InfinityIcon, t: "Long-Term Data Evolution", d: "Your data platform evolves with you — new sources, analytics, AI capabilities, and operational requirements." },
  { n: "06", icon: UsersThree, t: "Self-Service Data Access", d: "Governed platforms that let business teams explore, analyze, and act on data without engineering bottlenecks." },
];

const relatedSolutions = ["Document Intelligence Systems", "Commerce Operations Systems", "Public Infrastructure Operations Systems", "AI Surveillance Systems", "Customer Interaction Systems", "Simulation & Digital Twin Systems"];

const faqs = [
  { q: "What is Data Engineering?", a: "Designing, building, and maintaining systems that collect, integrate, transform, and prepare data for analytics, reporting, and AI." },
  { q: "What is the difference between Data Engineering and Data Analytics?", a: "Data Engineering builds the infrastructure and pipelines that make data available; Data Analytics interprets that data to generate business insights." },
  { q: "Can you integrate data from multiple enterprise systems?", a: "Yes. We integrate ERP, CRM, HRMS, finance, IoT, cloud platforms, and third-party systems into unified enterprise data platforms." },
  { q: "Which analytics platforms do you support?", a: "Power BI, Tableau, Looker, Apache Superset, and custom analytics platforms." },
  { q: "Do you build AI-ready data platforms?", a: "Yes. We design architectures that support machine learning, Generative AI, predictive analytics, and enterprise AI initiatives." },
  { q: "How do you ensure data quality?", a: "Governance frameworks, validation rules, master data management, metadata, lineage tracking, and automated quality checks." },
];

const bars = [
  ["rgba(135,123,241,0.25)", "44%", 0], ["rgba(135,123,241,0.4)", "62%", 0.2], ["rgba(135,123,241,0.55)", "52%", 0.4],
  ["rgba(135,123,241,0.75)", "78%", 0.6], ["#877BF1", "100%", 0.8], ["rgba(135,123,241,0.7)", "70%", 1], ["#FCCA71", "86%", 1.2],
];

const SrcChip = ({ children, icon: Icon, iconColor }) => (
  <span style={{ border: `1px solid ${BORDER15}`, padding: "6px 10px", fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.06em", textTransform: "uppercase", color: BODY, background: "#0A0B28", display: "inline-flex", alignItems: "center", gap: 6 }}>
    {Icon && <Icon size={12} color={iconColor || ACCENT2} />}{children}
  </span>
);

const DataEngineeringIntelligence = () => {
  const navigate = useNavigate();
  const goConnect = () => navigate("/connect", { state: { category: "Services/Solution", service: "Data Engineering & Intelligence" } });
  const [open, setOpen] = useState(0);

  return (
    <main className="font-sans" style={{ background: BG, color: TEXT, overflowX: "hidden", position: "relative", WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @keyframes deiFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes deiBar { 0%,100% { transform: scaleY(0.4); } 50% { transform: scaleY(1); } }
        @keyframes deiTermIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: none; } }
        .dei-grid2 { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(0,0.98fr); gap: clamp(32px,5vw,72px); align-items: center; max-width: 1280px; margin: 0 auto; }
        .dei-grid-do { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap: clamp(36px,5vw,80px); align-items: center; }
        @media (max-width: 900px) { .dei-grid2, .dei-grid-do { grid-template-columns: minmax(0,1fr); } }
        .dei-btn-primary { background: #877BF1; transition: background .3s; } .dei-btn-primary:hover { background: #9D93F6; }
        .dei-btn-ghost { border: 1px solid rgba(135,123,241,0.45); transition: border-color .3s, background .3s; }
        .dei-btn-ghost:hover { border-color: #877BF1; background: rgba(135,123,241,0.08); }
        .dei-card-h { transition: border-color .3s, box-shadow .3s; }
        .dei-card-h:hover { border-color: #877BF1 !important; box-shadow: 0 14px 36px rgba(135,123,241,0.14); }
        .dei-row-h { transition: background .3s; } .dei-row-h:hover { background: rgba(135,123,241,0.05); }
        .dei-why-h { transition: background .3s; } .dei-why-h:hover { background: #0F1034 !important; }
        .dei-link-h { transition: color .3s; } .dei-link-h:hover { color: #A9A0F5 !important; }
        .dei-faq-btn { transition: color .3s; } .dei-faq-btn:hover { color: #A9A0F5 !important; }
      `}</style>

      {/* Graph-paper grid */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(135,123,241,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(135,123,241,0.07) 1px, transparent 1px)", backgroundSize: "56px 56px", maskImage: "radial-gradient(ellipse 120% 70% at 50% 0%, #000 25%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse 120% 70% at 50% 0%, #000 25%, transparent 80%)" }} />

      {/* HERO: ANALYTICS CONSOLE */}
      <header style={{ position: "relative", zIndex: 1, padding: "clamp(120px,11vw,170px) clamp(20px,6vw,88px) clamp(56px,7vw,90px)" }}>
        <div className="dei-grid2">
          <Motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
              <span style={{ width: 34, height: 2, background: ACCENT }} />
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.18em", color: ACCENT2, textTransform: "uppercase" }}>Data Engineering &amp; Intelligence</span>
            </div>
            <h1 style={{ fontWeight: 800, fontSize: "clamp(38px,5.2vw,68px)", lineHeight: 1.03, letterSpacing: "-0.03em", margin: "0 0 26px" }}>
              Enterprise data, transformed into{" "}
              <span style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>operational intelligence</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,1.3vw,18.5px)", lineHeight: 1.65, color: BODY, maxWidth: 560, margin: "0 0 20px" }}>
              Data becomes valuable only when it is trusted, connected, and actionable.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: MUTED, maxWidth: 540, margin: "0 0 36px" }}>
              RevoSolve engineers modern data platforms that unify enterprise data, enable real-time visibility, and power analytics, BI, AI, and operational decision-making.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 40 }}>
              <button onClick={goConnect} className="dei-btn-primary" style={{ cursor: "pointer", border: "none", fontFamily: MONO, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", color: BG, padding: "15px 26px", fontWeight: 700 }}>Build Your Data Platform</button>
              <button onClick={goConnect} className="dei-btn-ghost" style={{ cursor: "pointer", background: "transparent", fontFamily: MONO, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", color: TEXT, padding: "15px 26px" }}>Talk to a Data Engineering Expert</button>
            </div>
            <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", color: FAINT, textTransform: "uppercase", display: "flex", gap: 24, flexWrap: "wrap" }}>
              <span><span style={{ color: ACCENT }}>●</span> Single source of truth</span><span>Real-time</span><span>AI-ready</span>
            </div>
          </Motion.div>

          {/* analytics console */}
          <Motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }} style={{ border: `1px solid ${BORDER15}`, background: CARD, boxShadow: "0 24px 60px rgba(0,0,0,0.4)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase" }}>ops_intelligence.board</span>
              <span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", color: ACCENT2, textTransform: "uppercase" }}>● live sync</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: BORDER, borderBottom: `1px solid ${BORDER}` }}>
              {[["46", "Pipelines active", null, 0.2], ["98.4", "Data quality", "%", 0.4], ["<5", "Freshness", "min", 0.6]].map(([v, l, suffix, d]) => (
                <div key={l} style={{ background: CARD, padding: "16px 18px", animation: `deiTermIn .5s ease both ${d}s` }}>
                  <div style={{ fontWeight: 700, fontSize: 22 }}>{v}{suffix && <span style={{ fontSize: 13, color: ACCENT2 }}>{suffix}</span>}</div>
                  <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: 20 }}>
              <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.12em", color: FAINT, textTransform: "uppercase", marginBottom: 12 }}>Orders processed / hour</div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 88 }}>
                {bars.map(([c, h, d], i) => (
                  <div key={i} style={{ flex: 1, background: c, height: h, transformOrigin: "bottom", animation: "deiBar 2.4s ease-in-out infinite", animationDelay: `${d}s` }} />
                ))}
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", padding: "13px 20px", borderTop: `1px solid ${BORDER}`, fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Database size={13} color={ACCENT2} />Warehouse ok</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><ShieldCheck size={13} color={ACCENT2} />Governed</span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}><Sparkle size={13} color={GOLD} />AI-ready</span>
            </div>
          </Motion.div>
        </div>
      </header>

      {/* WHAT WE DO */}
      <section id="do" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div className="dei-grid-do">
          <Motion.div {...reveal()}>
            <Eyebrow>What We Do</Eyebrow>
            <H2 mb={24}>Engineering data foundations that drive better decisions</H2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: BODY, margin: "0 0 18px" }}>
              Organizations generate data across every business function — yet much of it remains fragmented, inconsistent, and underutilized.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: MUTED, margin: 0 }}>
              Rather than building isolated dashboards, we create scalable data ecosystems that consolidate, govern, and transform enterprise data into a trusted foundation for reporting, analytics, AI, and operational intelligence.
            </p>
          </Motion.div>
          {/* data flow */}
          <Motion.div {...reveal(1)} style={{ border: `1px solid ${BORDER15}`, background: CARD, boxShadow: "0 18px 48px rgba(0,0,0,0.35)", padding: "clamp(24px,3vw,40px)" }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: FAINT, textTransform: "uppercase", marginBottom: 26, display: "flex", justifyContent: "space-between" }}>
              <span>data_ecosystem.flow</span><span style={{ color: ACCENT2 }}>● unified</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 4 }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                  <SrcChip>ERP</SrcChip><SrcChip>CRM</SrcChip><SrcChip>IoT</SrcChip>
                </div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase", marginTop: 10 }}>Sources</div>
              </div>
              <div style={{ position: "relative", flex: 0.5, height: 1, background: BORDER15 }}>
                <span style={{ position: "absolute", top: -3, width: 6, height: 6, borderRadius: "50%", background: ACCENT, boxShadow: "0 0 6px rgba(135,123,241,0.6)", animation: "deiFlowX 2.2s linear infinite" }} />
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ width: 56, height: 56, margin: "0 auto", border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><FlowArrow size={25} /></div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase", marginTop: 10 }}>Pipelines</div>
              </div>
              <div style={{ position: "relative", flex: 0.5, height: 1, background: BORDER15 }}>
                <span style={{ position: "absolute", top: -3, width: 6, height: 6, borderRadius: "50%", background: ACCENT, boxShadow: "0 0 6px rgba(135,123,241,0.6)", animation: "deiFlowX 2.2s linear infinite", animationDelay: "0.55s" }} />
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ width: 64, height: 64, margin: "0 auto", border: `2px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", color: BG, background: ACCENT }}><Database size={29} /></div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.1em", color: ACCENT2, textTransform: "uppercase", marginTop: 10 }}>Warehouse</div>
              </div>
              <div style={{ position: "relative", flex: 0.5, height: 1, background: BORDER15 }}>
                <span style={{ position: "absolute", top: -3, width: 6, height: 6, borderRadius: "50%", background: GOLD, boxShadow: "0 0 6px rgba(252,202,113,0.6)", animation: "deiFlowX 2.2s linear infinite", animationDelay: "1.1s" }} />
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                  <SrcChip icon={ChartBar}>BI</SrcChip>
                  <SrcChip icon={Sparkle} iconColor={GOLD}>AI</SrcChip>
                  <SrcChip icon={Gauge}>Ops</SrcChip>
                </div>
                <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase", marginTop: 10 }}>Intelligence</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 28, flexWrap: "wrap", borderTop: `1px solid ${BORDER}`, paddingTop: 20, fontFamily: MONO, fontSize: 10, letterSpacing: "0.08em", color: MUTED, textTransform: "uppercase" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}><Scales size={14} color={ACCENT2} />Governance</span>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}><GitFork size={14} color={ACCENT2} />Lineage</span>
              <span style={{ display: "flex", alignItems: "center", gap: 7 }}><CheckSquare size={14} color={ACCENT2} />Quality checks</span>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* PROBLEMS: LEDGER */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Problems We Solve</Eyebrow>
            <H2 mb={20}>Enterprise data is often abundant but not actionable</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Without the right architecture, growth creates data silos, inconsistent reporting, and delayed decision-making.
            </p>
          </div>
          <div style={{ background: CARD, border: `1px solid ${BORDER15}`, boxShadow: "0 18px 48px rgba(0,0,0,0.3)" }}>
            {problems.map((p, i) => (
              <Motion.div key={p.n} className="dei-row-h" {...reveal(i)} style={{ display: "grid", gridTemplateColumns: "auto auto minmax(0,0.8fr) minmax(0,1.2fr)", gap: 22, alignItems: "center", padding: "22px 26px", borderBottom: `1px solid ${BORDER}` }}>
                <span style={{ fontFamily: MONO, fontSize: 11, color: ACCENT2, letterSpacing: "0.08em" }}>{p.n}</span>
                <div style={{ width: 42, height: 42, border: `1px solid ${BORDER15}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><p.icon size={21} /></div>
                <h3 style={{ fontWeight: 600, fontSize: 16.5, margin: 0 }}>{p.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: MUTED, margin: 0 }}>{p.d}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ENGINEER */}
      <section id="engineer" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>What We Engineer</Eyebrow>
            <H2 mb={20}>Data platforms built for operational intelligence</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Modern enterprises need scalable data ecosystems that connect operational systems, automate data movement, and provide trusted insights.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16 }}>
            {engineer.map((e, i) => (
              <Motion.div key={e.n} className="dei-card-h" {...reveal(i)} style={{ border: `1px solid ${BORDER}`, background: CARD, padding: "28px 26px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 46, height: 46, border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><e.icon size={22} /></div>
                  <span style={{ fontFamily: MONO, fontSize: 11, color: FAINT, letterSpacing: "0.1em" }}>{e.n}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 17.5, lineHeight: 1.25, margin: "0 0 10px" }}>{e.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: MUTED, margin: 0 }}>{e.d}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 760, marginBottom: "clamp(44px,5vw,72px)" }}>
            <Eyebrow>The RevoSolve Engineering Method™</Eyebrow>
            <H2>Engineering data ecosystems that scale with your business</H2>
          </div>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", top: 29, left: "4%", right: "4%", height: 1, background: BORDER15 }}>
              <span style={{ position: "absolute", top: -3, width: 7, height: 7, borderRadius: "50%", background: ACCENT, boxShadow: "0 0 8px rgba(135,123,241,0.6)", animation: "deiFlowX 6s linear infinite" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 18, position: "relative" }}>
              {method.map((m, i) => (
                <Motion.div key={m.t} {...reveal(i)}>
                  <div style={{ width: 58, height: 58, border: `1.5px solid ${ACCENT}`, background: ALT, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, marginBottom: 18, position: "relative" }}><m.icon size={27} /></div>
                  <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: FAINT, textTransform: "uppercase", marginBottom: 8 }}>Stage 0{m.n}</div>
                  <h3 style={{ fontWeight: 600, fontSize: 19, margin: "0 0 10px" }}>{m.t}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, margin: 0 }}>{m.d}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: "clamp(40px,5vw,56px)" }}>
            <Eyebrow>Technology Stack</Eyebrow>
            <H2>The modern data toolchain</H2>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER15}` }}>
            {techCats.map((t, i) => (
              <Motion.div key={t.cat} className="dei-row-h" {...reveal(i)} style={{ display: "grid", gridTemplateColumns: "minmax(0,0.5fr) minmax(0,1.5fr)", gap: 24, alignItems: "center", padding: "20px 6px", borderBottom: `1px solid ${BORDER}` }}>
                <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.12em", color: ACCENT2, textTransform: "uppercase" }}>// {t.cat}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {t.items.map(([name, Icon]) => (
                    <span key={name} style={{ border: `1px solid ${BORDER15}`, padding: "9px 14px", fontFamily: MONO, fontSize: 12.5, color: "#E7E8F4", background: CARD, display: "inline-flex", alignItems: "center", gap: 9 }}>
                      <Icon size={18} color={ACCENT2} />{name}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Industries We Serve</Eyebrow>
            <H2>Trusted data foundations across complex sectors</H2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 16 }}>
            {industries.map((ind, i) => (
              <Motion.div key={ind.t} className="dei-card-h" {...reveal(i)} style={{ border: `1px solid ${BORDER}`, background: CARD, padding: "26px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
                <div style={{ width: 44, height: 44, flex: "none", border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><ind.icon size={21} /></div>
                <div>
                  <h3 style={{ fontWeight: 600, fontSize: 16.5, lineHeight: 1.25, margin: "0 0 8px" }}>{ind.t}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.6, color: MUTED, margin: 0 }}>{ind.d}</p>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 740, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Why RevoSolve</Eyebrow>
            <H2 mb={20}>Data platforms that support better decisions</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Data initiatives often fail because they focus on reporting rather than building a sustainable foundation. We engineer data ecosystems that become a strategic asset.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 1, background: "rgba(135,123,241,0.3)", border: "1px solid rgba(135,123,241,0.3)" }}>
            {why.map((w, i) => (
              <Motion.div key={w.n} className="dei-why-h" {...reveal(i)} style={{ background: BG, padding: "30px 28px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <w.icon size={28} color={ACCENT} />
                  <span style={{ fontFamily: MONO, fontSize: 11, color: FAINT, letterSpacing: "0.1em" }}>{w.n}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 18, lineHeight: 1.25, margin: "0 0 10px" }}>{w.t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6, color: MUTED, margin: 0 }}>{w.d}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(64px,7vw,100px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase", marginBottom: 24 }}>// Related Solutions</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {relatedSolutions.map((r) => (
              <a key={r} href="#" className="dei-link-h" style={{ textDecoration: "none", color: "#E7E8F4", fontWeight: 500, fontSize: 16.5, padding: "16px 0", borderTop: `1px solid ${BORDER}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span>{r}</span><span style={{ fontFamily: MONO, color: ACCENT }}>→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <H2>Data engineering, answered</H2>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="dei-faq-btn" style={{ cursor: "pointer", width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "24px 0", display: "flex", alignItems: "center", gap: 20, fontWeight: 600, fontSize: "clamp(16px,1.6vw,19px)", color: TEXT, fontFamily: "inherit" }}>
                    <span style={{ fontFamily: MONO, fontSize: 11, color: FAINT, flex: "none" }}>{`0${i + 1}`}</span>
                    <span style={{ flex: 1 }}>{f.q}</span>
                    <span style={{ flex: "none", width: 22, height: 22, position: "relative", color: isOpen ? ACCENT : FAINT }}>
                      <span style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 2, background: "currentColor", transform: "translateY(-50%)" }} />
                      {!isOpen && <span style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 2, background: "currentColor", transform: "translateX(-50%)" }} />}
                    </span>
                  </button>
                  {isOpen && (
                    <Motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ fontSize: 15.5, lineHeight: 1.7, color: BODY, margin: 0, padding: "0 0 26px 43px", maxWidth: 760 }}>
                      {f.a}
                    </Motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA: DARK BAND */}
      <section id="contact" style={{ position: "relative", zIndex: 1, padding: "clamp(80px,9vw,140px) clamp(20px,6vw,88px)", background: "#0A0B28", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -120, left: "50%", transform: "translateX(-50%)", width: 640, height: 400, background: "radial-gradient(ellipse, rgba(135,123,241,0.3), transparent 68%)", filter: "blur(20px)", pointerEvents: "none" }} />
        <Motion.div {...reveal()} style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative", color: TEXT }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: GOLD, boxShadow: `0 0 9px ${GOLD}` }} /> Start Building
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
            Transform enterprise data into{" "}
            <span style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>actionable intelligence</span>
          </h2>
          <p style={{ fontSize: "clamp(16px,1.3vw,18.5px)", lineHeight: 1.65, color: BODY, maxWidth: 640, margin: "0 auto 40px" }}>
            Building a modern data platform, implementing BI, preparing for AI, or modernizing reporting — we engineer trusted data ecosystems that power better decisions.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={goConnect} className="dei-btn-primary" style={{ cursor: "pointer", border: "none", fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.05em", textTransform: "uppercase", color: BG, padding: "17px 32px", fontWeight: 700 }}>Talk to a Data Engineering Expert</button>
            <button onClick={goConnect} className="dei-btn-ghost" style={{ cursor: "pointer", background: "transparent", fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.05em", textTransform: "uppercase", color: TEXT, padding: "17px 32px" }}>Build Your Enterprise Data Platform</button>
          </div>
        </Motion.div>
      </section>
    </main>
  );
};

export default DataEngineeringIntelligence;
