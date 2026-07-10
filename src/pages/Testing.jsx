import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  UsersThree, FlowArrow, SquaresFour, PlugsConnected,
  Database, Stack, Cube, AddressBook, BracketsCurly,
  PuzzlePiece, ClipboardText, HourglassMedium, Plugs, UserCircleMinus, ArrowsOut,
  Buildings, ArrowsClockwise, DoorOpen, Recycle, DeviceMobile,
  MagnifyingGlass, CompassTool, Code, GitMerge, ChartLineUp,
  Bank, CurrencyCircleDollar, ShoppingCart, Factory, Heartbeat, HardHat,
  Strategy, ShieldCheck, Handshake, Infinity as InfinityIcon,
  Gear, Users, AppWindow, LockSimple, XCircle, ShareNetwork, Heart, UserCircle, Eye, CheckCircle,
  FileCode, TerminalWindow, Key, Fingerprint, WebhooksLogo, Cloud, CloudArrowUp, Package, GitBranch, Coffee,
} from "@phosphor-icons/react";

const MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace";
const BG = "#01031c", ALT = "#050726", PANEL = "#0A0B28", ACCENT = "#877BF1", ACCENT2 = "#A9A0F5", GOLD = "#FCCA71";
const TEXT = "#FBFBFF", BODY = "#CACBDB", MUTED = "#8F92B8", FAINT = "#5C5F85", CHIP = "#E7E8F4";
const BORDER = "rgba(135,123,241,0.18)", BORDER15 = "rgba(135,123,241,0.25)", BORDER2 = "rgba(135,123,241,0.45)", TINT = "rgba(135,123,241,0.06)";

const reveal = (i = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "0px 0px -6% 0px" },
  transition: { duration: 0.55, delay: (i % 4) * 0.05, ease: [0.2, 0.7, 0.2, 1] },
});

const Eyebrow = ({ children }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
    <span style={{ width: 34, height: 1, background: ACCENT }} />
    <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase" }}>{children}</span>
  </div>
);

const H2 = ({ children, mb = 0 }) => (
  <h2 style={{ fontWeight: 700, fontSize: "clamp(28px,3.4vw,44px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: `0 0 ${mb}px` }}>{children}</h2>
);

const problems = [
  { n: "01", icon: PuzzlePiece, t: "Fragmented Business Applications", d: "Disconnected systems create duplicate work, inconsistent information, and limited operational visibility across departments." },
  { n: "02", icon: ClipboardText, t: "Manual Operational Workflows", d: "Business-critical activities often depend on spreadsheets, emails, and repetitive manual processes that reduce efficiency and increase operational risk." },
  { n: "03", icon: HourglassMedium, t: "Legacy Applications Limiting Growth", d: "Older applications become difficult to maintain, expensive to operate, and unable to support evolving business requirements." },
  { n: "04", icon: Plugs, t: "Lack of System Integration", d: "Departments operate using different software platforms that do not communicate effectively, leading to information silos and delayed decision-making." },
  { n: "05", icon: UserCircleMinus, t: "Poor User Adoption", d: "Applications designed without understanding user workflows often become difficult to use, resulting in low adoption and reduced business value." },
  { n: "06", icon: ArrowsOut, t: "Limited Scalability", d: "Technology designed for today’s operations often struggles to support tomorrow’s growth, expansion, and increasing transaction volumes." },
];

const engineer = [
  { n: "01", icon: Buildings, t: "Enterprise Business Applications", d: "Scalable applications that support core business operations, internal workflows, and enterprise-wide collaboration." },
  { n: "02", icon: ArrowsClockwise, t: "Business Process Automation", d: "Applications that automate repetitive processes, improve operational consistency, and reduce manual effort across departments." },
  { n: "03", icon: DoorOpen, t: "Customer & Partner Portals", d: "Secure web portals that improve collaboration with customers, partners, vendors, and external stakeholders." },
  { n: "04", icon: FlowArrow, t: "Workflow & Approval Systems", d: "Digitize approvals, document routing, task management, and operational governance through configurable workflow engines." },
  { n: "05", icon: PlugsConnected, t: "API & System Integration", d: "Integrate ERP, CRM, HRMS, finance, and third-party systems into a unified operational ecosystem." },
  { n: "06", icon: Cube, t: "Product Engineering", d: "Design, build, and evolve scalable digital products from concept through deployment and long-term growth." },
  { n: "07", icon: Recycle, t: "Legacy Modernization", d: "Transform aging enterprise applications into modern, cloud-ready systems without disrupting operations." },
  { n: "08", icon: DeviceMobile, t: "Enterprise Mobility", d: "Mobile applications that extend enterprise workflows to field teams, operational staff, and remote workforces." },
];

const method = [
  { n: "1", icon: MagnifyingGlass, t: "Discover", d: "We work closely with stakeholders, operational teams, and end users to understand existing workflows, business objectives, and operational challenges.", a: "We don’t begin with technology. We begin with understanding how your organization works." },
  { n: "2", icon: CompassTool, t: "Architect", d: "We design scalable system architectures, application landscapes, integration strategies, security models, and data flows that support long-term operational growth.", a: "" },
  { n: "3", icon: Code, t: "Engineer", d: "Using modern engineering practices, we develop secure, scalable, and maintainable applications that align with business workflows and enterprise standards.", a: "" },
  { n: "4", icon: GitMerge, t: "Integrate", d: "We connect applications with ERP platforms, CRM systems, payment gateways, identity providers, and analytics into a connected operational ecosystem.", a: "Enterprise systems rarely operate in isolation." },
  { n: "5", icon: ChartLineUp, t: "Operate & Evolve", d: "We continuously optimize, enhance, and expand enterprise systems to support changing business priorities and future growth.", a: "Technology should evolve alongside your organization." },
];

const techData = [
  { cat: "Backend Engineering", items: [["Microsoft .NET", Code], ["Java", Coffee], ["Python", TerminalWindow], ["Node.js", FileCode]], purpose: "Build secure, scalable, high-performance enterprise applications capable of handling mission-critical workloads." },
  { cat: "Frontend Engineering", items: [["React", AppWindow], ["Angular", AppWindow], ["Vue.js", AppWindow], ["Next.js", AppWindow]], purpose: "Create intuitive, responsive, user-centric interfaces that improve adoption and operational efficiency." },
  { cat: "Mobile Development", items: [["Flutter", DeviceMobile], ["React Native", DeviceMobile], ["Native Android", DeviceMobile], ["Native iOS", DeviceMobile]], purpose: "Extend enterprise workflows to field teams, operational staff, and mobile-first environments." },
  { cat: "Database Technologies", items: [["PostgreSQL", Database], ["SQL Server", Database], ["MariaDB", Database], ["MongoDB", Database], ["Redis", Database]], purpose: "Store, process, and manage enterprise data securely while supporting high transaction volumes." },
  { cat: "Cloud Platforms", items: [["Microsoft Azure", CloudArrowUp], ["AWS", Cloud], ["Google Cloud", Cloud]], purpose: "Deliver scalable, resilient, and cloud-native enterprise systems." },
  { cat: "API & Integration", items: [["REST APIs", BracketsCurly], ["GraphQL", ShareNetwork], ["OAuth", Key], ["OpenID Connect", Fingerprint], ["Webhooks", WebhooksLogo]], purpose: "Connect applications with ERP, CRM, HRMS, payment gateways, identity providers, and third-party platforms." },
  { cat: "DevOps & Delivery", items: [["Docker", Package], ["Kubernetes", Cube], ["GitHub Actions", GitBranch], ["Jenkins", Gear], ["Terraform", Stack]], purpose: "Accelerate software delivery while maintaining consistency, security, and reliability." },
];

const industries = [
  { icon: Bank, t: "Government & Public Sector", d: "Digitizing governance, citizen services, field operations, document processing, project monitoring, and public infrastructure workflows." },
  { icon: CurrencyCircleDollar, t: "Banking & Financial Institutions", d: "Customer onboarding, KYC/KYB, workflow automation, business rules, compliance, and operational efficiency." },
  { icon: ShoppingCart, t: "Retail, D2C & Commerce", d: "Commerce operations, inventory management, order orchestration, warehouse operations, fulfillment, and customer communication." },
  { icon: Factory, t: "Manufacturing", d: "Production workflows, procurement, quality management, asset management, inventory visibility, and operational reporting." },
  { icon: Heartbeat, t: "Healthcare & Life Sciences", d: "Healthcare operations, workflow automation, compliance, patient management, and secure data-driven platforms." },
  { icon: HardHat, t: "Infrastructure, EPC & Engineering", d: "Project lifecycle management, tender operations, workforce management, field execution, asset tracking, and billing." },
];

const why = [
  { n: "01", icon: Stack, t: "Systems-First Engineering", d: "We don’t develop isolated applications. We engineer integrated systems that become part of an organization’s operational backbone." },
  { n: "02", icon: Strategy, t: "Operations Before Development", d: "We understand workflows, stakeholders, and decision-making before writing code. Technology follows operations — not the other way around." },
  { n: "03", icon: UsersThree, t: "Built Around Real Users", d: "Every application is designed around the people who use it daily — from field teams to leadership. Better adoption starts with better understanding." },
  { n: "04", icon: ShieldCheck, t: "Enterprise-Ready Architecture", d: "Every solution is engineered for scalability, security, integration, maintainability, and long-term operational growth." },
  { n: "05", icon: Handshake, t: "Transparent Delivery", d: "Trust is built through realistic planning and clear communication. We commit to what we can deliver — and deliver what we commit." },
  { n: "06", icon: InfinityIcon, t: "Long-Term Partnership", d: "Deployment is the beginning, not the end. We evolve systems as organizations grow, processes change, and technology advances." },
];

const compare = [
  { dim: "Starting Point", trad: "Starts with technology and feature lists", revo: "Starts with operational workflows and users" },
  { dim: "System Design", trad: "Isolated, standalone applications", revo: "Integrated operational systems" },
  { dim: "User Focus", trad: "Built strictly to specification", revo: "Built around real users and adoption" },
  { dim: "Architecture", trad: "Optimized for initial launch", revo: "Engineered for scale and maintainability" },
  { dim: "Delivery", trad: "Rigid scope, fixed assumptions", revo: "Transparent, realistic, consistent execution" },
  { dim: "After Launch", trad: "Engagement ends at deployment", revo: "Long-term evolution partnership" },
];

const faqs = [
  { q: "What is Enterprise Application Development?", a: "The process of designing, building, integrating, and maintaining software systems that support core business operations across departments, users, and enterprise workflows." },
  { q: "When should an organization build a custom enterprise application?", a: "When existing software cannot support operational workflows, integration requirements, scalability, or business-specific processes." },
  { q: "What is the difference between Business and Enterprise Applications?", a: "Business applications typically address a specific business function, while enterprise applications connect multiple departments, workflows, and systems into a unified operational ecosystem." },
  { q: "Can RevoSolve modernize existing enterprise applications?", a: "Yes. We modernize legacy applications, improve architecture, migrate workloads, enhance performance, and integrate existing systems while minimizing business disruption." },
  { q: "Do you integrate with ERP, CRM, HRMS, and third-party platforms?", a: "Yes. We design integration architectures that connect enterprise applications with ERP, CRM, HRMS, payment gateways, identity providers, analytics platforms, and external services." },
  { q: "Which industries do you serve?", a: "Government, financial institutions, infrastructure companies, healthcare, manufacturing, retail, and broader enterprise organizations." },
  { q: "How do you ensure enterprise security?", a: "Applications are designed with secure architecture, role-based access control, encryption, identity management, audit trails, and enterprise security best practices." },
  { q: "Can applications scale as our business grows?", a: "Yes. Every system uses scalable architectures that support increasing users, transactions, integrations, and operational complexity." },
  { q: "What technologies do you use?", a: "Modern enterprise technologies including .NET, Java, Python, Node.js, React, Angular, PostgreSQL, AWS, Azure, Kubernetes, Docker, and API-first architectures." },
  { q: "Why choose RevoSolve?", a: "Because we don’t simply develop software — we engineer technology systems that align with operational workflows, integrate with enterprise ecosystems, and support long-term growth." },
];

const PipeNode = ({ icon: Icon, label, sub, hot }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
    <div style={{ width: 46, height: 46, flex: "none", border: `1px solid ${hot ? ACCENT : BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: hot ? "#fff" : ACCENT2, background: hot ? "rgba(135,123,241,0.18)" : TINT }}><Icon size={23} /></div>
    <div>
      <div style={{ fontWeight: 600, fontSize: 16 }}>{label}</div>
      <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.1em", color: FAINT, textTransform: "uppercase", marginTop: 3 }}>{sub}</div>
    </div>
  </div>
);

const PipeLink = ({ delay = 0 }) => (
  <div style={{ position: "relative", height: 34, margin: "4px 0 4px 22px", borderLeft: `1px dashed ${BORDER2}` }}>
    <span style={{ position: "absolute", left: -4, width: 7, height: 7, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 9px ${ACCENT}`, animation: "rseFlowY 2.4s linear infinite", animationDelay: `${delay}s` }} />
  </div>
);

const EcoChip = ({ icon: Icon, label, tint }) => (
  <div style={{ flex: 1, textAlign: "center", border: `1px solid ${BORDER2}`, padding: "14px 8px", fontFamily: MONO, fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: CHIP, background: tint ? TINT : "transparent", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
    <Icon size={22} color={ACCENT2} />{label}
  </div>
);

const CmpVisualTrad = ({ idx }) => {
  const c = "#5C5F85";
  switch (idx) {
    case 0: return <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.5, color: c }}><Gear size={30} /><span style={{ width: 22, borderTop: `1px dashed ${c}` }} /><Users size={23} /></div>;
    case 1: return <div style={{ display: "flex", alignItems: "center", gap: 18, opacity: 0.5, color: c }}><AppWindow size={26} /><AppWindow size={26} /><AppWindow size={26} /></div>;
    case 2: return <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: 0.5, color: c }}><ClipboardText size={30} /><div style={{ display: "flex", flexDirection: "column", gap: 5 }}><span style={{ width: 58, height: 3, background: c }} /><span style={{ width: 42, height: 3, background: c }} /><span style={{ width: 50, height: 3, background: c }} /></div></div>;
    case 3: return <div style={{ display: "flex", alignItems: "center", gap: 12, opacity: 0.5 }}><div style={{ width: 50, height: 50, border: `1px solid ${c}`, background: "repeating-linear-gradient(45deg, #191b33 0 6px, #14162c 6px 12px)" }} /><span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", color: c, textTransform: "uppercase" }}>Monolith</span></div>;
    case 4: return <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: 0.5, color: c }}><LockSimple size={28} /><div style={{ display: "flex", gap: 6 }}><span style={{ width: 26, height: 11, background: c }} /><span style={{ width: 26, height: 11, background: c }} /><span style={{ width: 26, height: 11, background: c }} /></div></div>;
    default: return <div style={{ display: "flex", alignItems: "center", gap: 8, opacity: 0.55, color: c }}><span style={{ width: 64, height: 2, background: c }} /><XCircle size={24} color={GOLD} /></div>;
  }
};

const FlowDotX = ({ w = 26, delay = 0 }) => (
  <div style={{ position: "relative", width: w, height: 1, background: BORDER2 }}>
    <span style={{ position: "absolute", top: -3, width: 6, height: 6, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, animation: "rseFlowX 2s linear infinite", animationDelay: `${delay}s` }} />
  </div>
);

const CmpVisualRevo = ({ idx }) => {
  switch (idx) {
    case 0: return <div style={{ display: "flex", alignItems: "center", gap: 10 }}><UsersThree size={28} color={ACCENT} /><FlowDotX /><FlowArrow size={23} color={ACCENT2} /><FlowDotX delay={0.6} /><Gear size={23} color={ACCENT2} /></div>;
    case 1: return <div style={{ display: "flex", alignItems: "center", gap: 8 }}><AppWindow size={24} color={ACCENT2} /><FlowDotX w={22} /><ShareNetwork size={32} color={ACCENT} /><FlowDotX w={22} delay={0.6} /><AppWindow size={24} color={ACCENT2} /></div>;
    case 2: return <div style={{ display: "flex", alignItems: "center", gap: 14 }}><Heart size={27} color={ACCENT} style={{ animation: "rsePulse 1.6s ease-in-out infinite" }} /><div style={{ display: "flex", gap: 10 }}><UserCircle size={24} color={ACCENT2} style={{ animation: "rsePulse 1.9s ease-in-out infinite" }} /><UserCircle size={24} color={ACCENT2} style={{ animation: "rsePulse 1.9s ease-in-out infinite .35s" }} /><UserCircle size={24} color={ACCENT} style={{ animation: "rsePulse 1.9s ease-in-out infinite .7s" }} /></div></div>;
    case 3: return <div style={{ display: "flex", alignItems: "center", gap: 14 }}><div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "center" }}><span style={{ width: 76, height: 11, background: ACCENT, boxShadow: "0 0 10px rgba(135,123,241,0.5)", animation: "rseLayer 3.2s ease-in-out infinite" }} /><span style={{ width: 76, height: 11, background: ACCENT2 }} /><span style={{ width: 76, height: 11, background: ACCENT2 }} /><span style={{ width: 76, height: 11, background: "rgba(135,123,241,0.35)" }} /></div><span style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", color: ACCENT2, textTransform: "uppercase" }}>Modular</span></div>;
    case 4: return <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Eye size={24} color={ACCENT} /><div style={{ position: "relative", width: 96, height: 9, background: PANEL, overflow: "hidden", border: `1px solid ${BORDER2}` }}><span style={{ position: "absolute", top: 0, bottom: 0, width: 36, background: "linear-gradient(90deg, transparent, rgba(135,123,241,0.85), transparent)", animation: "rseFlowX 1.8s linear infinite" }} /></div><CheckCircle size={22} color={ACCENT2} /></div>;
    default: return <div style={{ display: "flex", alignItems: "center", gap: 12 }}><InfinityIcon size={36} color={ACCENT} /><FlowDotX w={52} /><ChartLineUp size={24} color={ACCENT2} /></div>;
  }
};

const RevoSolveEnterprise = () => {
  const navigate = useNavigate();
  const goConnect = () => navigate("/connect", { state: { category: "Services/Solution", service: "Enterprise Applications & System Engineering" } });
  const [open, setOpen] = useState(0);
  const [tech, setTech] = useState(0);
  const [cmpIdx, setCmpIdx] = useState(0);
  const [cmpProg, setCmpProg] = useState(0);
  const [cmpFade, setCmpFade] = useState(false);
  const paused = useRef(false);
  const fadeT = useRef(null);
  const stateRef = useRef({ idx: 0, prog: 0, fade: false });
  stateRef.current = { idx: cmpIdx, prog: cmpProg, fade: cmpFade };

  const goCmp = (i) => {
    if (i === stateRef.current.idx) { setCmpProg(0); return; }
    clearTimeout(fadeT.current);
    setCmpFade(true);
    fadeT.current = setTimeout(() => { setCmpIdx(i); setCmpProg(0); setCmpFade(false); }, 280);
  };

  useEffect(() => {
    const dur = 4800;
    const t = setInterval(() => {
      if (paused.current || stateRef.current.fade) return;
      const p = stateRef.current.prog + 95 / dur;
      if (p >= 1) goCmp((stateRef.current.idx + 1) % compare.length);
      else setCmpProg(p);
    }, 95);
    return () => { clearInterval(t); clearTimeout(fadeT.current); };
  }, []);

  const fadeStyle = { display: "block", opacity: cmpFade ? 0 : 1, transform: cmpFade ? "translateY(9px)" : "translateY(0)", transition: "opacity .28s ease, transform .28s cubic-bezier(.2,.7,.2,1)" };
  const activeTech = techData[tech];

  return (
    <main className="font-sans" style={{ background: BG, color: TEXT, overflowX: "hidden", position: "relative", WebkitFontSmoothing: "antialiased" }}>
      <style>{`
        @keyframes rseFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        @keyframes rseFlowY { 0% { top: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { top: 112%; opacity: 0; } }
        @keyframes rseFlowX { 0% { left: -12%; opacity: 0; } 12% { opacity: 1; } 88% { opacity: 1; } 100% { left: 112%; opacity: 0; } }
        @keyframes rsePulse { 0%,100% { opacity: 0.35; } 50% { opacity: 1; } }
        @keyframes rseDrift { 0%,100% { transform: translate(0,0); } 33% { transform: translate(30px,-24px); } 66% { transform: translate(-22px,18px); } }
        @keyframes rseRing { 0% { transform: translate(-50%,-50%) scale(1); opacity: 0.55; } 100% { transform: translate(-50%,-50%) scale(2.1); opacity: 0; } }
        @keyframes rseLayer { 0% { opacity: 0; transform: translateY(10px); } 24% { opacity: 1; transform: translateY(0); } 86% { opacity: 1; transform: translateY(0); } 100% { opacity: 0; transform: translateY(10px); } }
        .rse-grid-hero { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,0.95fr); gap: clamp(32px,5vw,72px); align-items: center; max-width: 1280px; margin: 0 auto; }
        .rse-grid-do { max-width: 1240px; margin: 0 auto; display: grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap: clamp(36px,5vw,80px); align-items: center; }
        .rse-grid-stack { display: grid; grid-template-columns: minmax(0,0.9fr) minmax(0,1.1fr); gap: clamp(24px,3vw,48px); align-items: start; }
        .rse-grid-cmp { display: grid; grid-template-columns: minmax(0,300px) minmax(0,1fr); gap: clamp(20px,3vw,44px); align-items: stretch; }
        @media (max-width: 900px) { .rse-grid-hero, .rse-grid-do, .rse-grid-stack, .rse-grid-cmp { grid-template-columns: minmax(0,1fr); } }
        .rse-btn-primary { background: #877BF1; transition: background .3s; } .rse-btn-primary:hover { background: #9D93F6; }
        .rse-btn-ghost { border: 1px solid rgba(135,123,241,0.45); transition: border-color .3s, background .3s; }
        .rse-btn-ghost:hover { border-color: #877BF1; background: rgba(135,123,241,0.08); }
        .rse-card-h { transition: background .3s, border-color .3s; }
        .rse-card-h:hover { border-color: #877BF1 !important; background: rgba(135,123,241,0.06); }
        .rse-cell-h { transition: background .3s; } .rse-cell-h:hover { background: #0F1034 !important; }
        .rse-row-h { transition: background .3s; } .rse-row-h:hover { background: linear-gradient(90deg, rgba(135,123,241,0.05), transparent); }
        .rse-faq-btn { transition: color .3s; } .rse-faq-btn:hover { color: #A9A0F5 !important; }
        .rse-tabbtn { cursor: pointer; transition: background .3s; } .rse-tabbtn:hover { background: rgba(135,123,241,0.05); }
      `}</style>

      {/* Blueprint grid overlay */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.5, backgroundImage: "linear-gradient(rgba(135,123,241,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(135,123,241,0.05) 1px, transparent 1px)", backgroundSize: "46px 46px", maskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)", WebkitMaskImage: "radial-gradient(ellipse 120% 80% at 50% 0%, #000 30%, transparent 85%)" }} />

      {/* HERO: SPLIT PIPELINE */}
      <header style={{ position: "relative", zIndex: 1, padding: "clamp(120px,11vw,170px) clamp(20px,6vw,88px) clamp(60px,7vw,96px)" }}>
        <div style={{ position: "absolute", top: -60, right: "8%", width: 420, height: 420, background: "radial-gradient(circle, rgba(135,123,241,0.22), transparent 68%)", filter: "blur(20px)", animation: "rseDrift 18s ease-in-out infinite", pointerEvents: "none" }} />
        <div className="rse-grid-hero">
          <Motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
              <span style={{ width: 34, height: 1, background: ACCENT }} />
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.18em", color: ACCENT2, textTransform: "uppercase" }}>Enterprise Applications &amp; System Engineering</span>
            </div>
            <h1 style={{ fontWeight: 700, fontSize: "clamp(38px,5vw,66px)", lineHeight: 1.04, letterSpacing: "-0.025em", margin: "0 0 26px" }}>
              Building business-critical systems that power{" "}
              <span style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>enterprise operations</span>
            </h1>
            <p style={{ fontSize: "clamp(16px,1.3vw,18.5px)", lineHeight: 1.65, color: BODY, maxWidth: 560, margin: "0 0 20px" }}>
              RevoSolve designs, engineers, modernizes, and integrates enterprise applications that connect people, processes, and data into scalable, secure, business-critical systems.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.6, color: MUTED, maxWidth: 540, margin: "0 0 36px" }}>
              Across government, financial institutions, and enterprise organizations — systems that align with real operational workflows, not just technical requirements.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <button onClick={goConnect} className="rse-btn-primary" style={{ cursor: "pointer", border: "none", fontFamily: MONO, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", color: BG, padding: "15px 26px", fontWeight: 700 }}>Build Your Enterprise System</button>
              <button onClick={goConnect} className="rse-btn-ghost" style={{ cursor: "pointer", background: "transparent", fontFamily: MONO, fontSize: 13, letterSpacing: "0.05em", textTransform: "uppercase", color: TEXT, padding: "15px 26px" }}>Talk to Our Engineering Team</button>
            </div>
          </Motion.div>

          {/* vertical pipeline */}
          <Motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }} style={{ position: "relative", border: `1px solid ${BORDER15}`, background: "linear-gradient(180deg, rgba(18,20,62,0.9), rgba(10,11,40,0.9))", padding: "clamp(24px,3vw,38px)", animation: "rseFloat 8s ease-in-out infinite" }}>
            <div style={{ position: "absolute", top: 12, left: 12, width: 14, height: 14, borderTop: `1.5px solid ${ACCENT}`, borderLeft: `1.5px solid ${ACCENT}` }} />
            <div style={{ position: "absolute", top: 12, right: 12, width: 14, height: 14, borderTop: `1.5px solid ${ACCENT}`, borderRight: `1.5px solid ${ACCENT}` }} />
            <div style={{ position: "absolute", bottom: 12, left: 12, width: 14, height: 14, borderBottom: `1.5px solid ${ACCENT}`, borderLeft: `1.5px solid ${ACCENT}` }} />
            <div style={{ position: "absolute", bottom: 12, right: 12, width: 14, height: 14, borderBottom: `1.5px solid ${ACCENT}`, borderRight: `1.5px solid ${ACCENT}` }} />
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.16em", color: FAINT, textTransform: "uppercase", marginBottom: 22, display: "flex", justifyContent: "space-between" }}>
              <span>system_architecture.map</span><span style={{ color: ACCENT2 }}>● live</span>
            </div>
            <PipeNode icon={UsersThree} label="Users & Teams" sub="Role-based access" />
            <PipeLink />
            <PipeNode icon={FlowArrow} label="Workflows" sub="Automation & approvals" />
            <PipeLink delay={0.6} />
            <PipeNode icon={SquaresFour} label="Applications" sub="Core business logic" hot />
            <PipeLink delay={1.2} />
            <PipeNode icon={PlugsConnected} label="Integrations" sub="ERP · CRM · APIs" />
          </Motion.div>
        </div>
      </header>

      {/* WHAT WE DO */}
      <section id="do" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div className="rse-grid-do">
          <Motion.div {...reveal()}>
            <Eyebrow>What We Do</Eyebrow>
            <H2 mb={24}>Engineering enterprise systems that drive operational excellence</H2>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: BODY, margin: "0 0 18px" }}>
              As businesses grow, applications become fragmented, workflows disconnect, and operational complexity increases. We engineer applications that simplify operations, improve visibility, and enable organizations to run on integrated, scalable, future-ready systems.
            </p>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: MUTED, margin: 0 }}>
              Whether building a new application, modernizing legacy software, or integrating enterprise platforms, our approach aligns with real operational workflows — not just technical requirements.
            </p>
          </Motion.div>
          {/* architecture illustration */}
          <Motion.div {...reveal(1)} style={{ border: `1px solid ${BORDER15}`, background: "linear-gradient(160deg, rgba(18,20,62,0.7), rgba(10,11,40,0.7))", padding: "clamp(24px,3vw,40px)" }}>
            <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: FAINT, textTransform: "uppercase", marginBottom: 26, display: "flex", justifyContent: "space-between" }}>
              <span>operational_ecosystem</span><span style={{ color: ACCENT2 }}>● flowing</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <EcoChip icon={UsersThree} label="People" tint />
                <EcoChip icon={FlowArrow} label="Process" tint />
                <EcoChip icon={Database} label="Data" tint />
              </div>
              <div style={{ position: "relative", height: 44, display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: 1, background: BORDER2, height: "100%" }}>
                  <span style={{ position: "absolute", left: -4, width: 8, height: 8, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 10px ${ACCENT}`, animation: "rseFlowY 2.2s linear infinite" }} />
                </div>
              </div>
              <div style={{ textAlign: "center", border: `1px solid ${ACCENT}`, padding: 20, background: "rgba(135,123,241,0.16)", fontWeight: 600, fontSize: 16, color: "#fff", display: "flex", flexDirection: "column", alignItems: "center", gap: 9 }}>
                <Stack size={27} color={ACCENT2} />Enterprise Applications
                <div style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.1em", color: ACCENT2, textTransform: "uppercase", marginTop: 5, fontWeight: 400 }}>unified operational core</div>
              </div>
              <div style={{ position: "relative", height: 44, display: "flex", justifyContent: "center" }}>
                <div style={{ position: "relative", width: 1, background: BORDER2, height: "100%" }}>
                  <span style={{ position: "absolute", left: -4, width: 8, height: 8, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 10px ${ACCENT}`, animation: "rseFlowY 2.2s linear infinite", animationDelay: "0.9s" }} />
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                <EcoChip icon={Cube} label="ERP" />
                <EcoChip icon={AddressBook} label="CRM" />
                <EcoChip icon={BracketsCurly} label="APIs" />
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Problems We Solve</Eyebrow>
            <H2 mb={20}>Modern enterprises need systems that scale with their operations</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Multiple applications, manual processes, disconnected data, and aging systems create inefficiencies that impact productivity, decisions, and growth.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 1, background: "rgba(135,123,241,0.3)", border: "1px solid rgba(135,123,241,0.3)" }}>
            {problems.map((p, i) => (
              <Motion.div key={p.n} className="rse-cell-h" {...reveal(i)} style={{ background: ALT, padding: "32px 30px" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 46, height: 46, border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><p.icon size={23} /></div>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: ACCENT, letterSpacing: "0.1em" }}>{p.n}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.25, margin: "0 0 12px" }}>{p.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: MUTED, margin: 0 }}>{p.d}</p>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE ENGINEER */}
      <section id="engineer" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>What We Engineer</Eyebrow>
            <H2 mb={20}>Applications designed around business operations</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Instead of generic software, we engineer applications that reflect how your organization operates, collaborates, and makes decisions.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
            {engineer.map((e, i) => (
              <Motion.div key={e.n} className="rse-card-h" {...reveal(i)} style={{ border: `1px solid ${BORDER15}`, padding: "28px 26px", background: "linear-gradient(160deg, rgba(18,20,62,0.5), transparent)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
                  <div style={{ width: 44, height: 44, border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><e.icon size={23} /></div>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: ACCENT, letterSpacing: "0.1em" }}>{e.n}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 17.5, lineHeight: 1.25, margin: "0 0 11px" }}>{e.t}</h3>
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
            <H2 mb={20}>Technology built around operations, not assumptions</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Operational discovery, system architecture, modern engineering, and continuous evolution — delivering systems organizations depend on every day.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {method.map((m, i) => (
              <Motion.div key={m.n} className="rse-row-h" {...reveal(i)} style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "clamp(24px,4vw,56px)", padding: "30px 0", borderTop: `1px solid ${BORDER}` }}>
                <div style={{ width: 66, height: 66, flex: "none", border: `1px solid ${ACCENT}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: "rgba(135,123,241,0.08)" }}><m.icon size={32} /></div>
                <div style={{ maxWidth: 760 }}>
                  <h3 style={{ fontWeight: 600, fontSize: "clamp(21px,2.4vw,28px)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>{m.t}</h3>
                  <p style={{ fontSize: 15.5, lineHeight: 1.7, color: BODY, margin: 0 }}>{m.d}</p>
                  {m.a && (
                    <p style={{ fontSize: 16, fontWeight: 500, lineHeight: 1.55, color: ACCENT2, margin: "16px 0 0", paddingLeft: 18, borderLeft: `2px solid ${ACCENT}` }}>{m.a}</p>
                  )}
                </div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="stack" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: "clamp(40px,5vw,56px)" }}>
            <Eyebrow>Technology Stack</Eyebrow>
            <H2 mb={20}>Modern technologies. Enterprise-grade engineering.</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              We select technologies based on scalability, security, maintainability, and operational fit — so every application evolves alongside your business.
            </p>
          </div>
          <div className="rse-grid-stack">
            <div style={{ display: "flex", flexDirection: "column", border: `1px solid ${BORDER15}` }}>
              {techData.map((t, i) => (
                <button key={t.cat} onClick={() => setTech(i)} className="rse-tabbtn" style={{ textAlign: "left", background: "transparent", border: "none", borderBottom: `1px solid ${BORDER}`, padding: "18px 22px", display: "flex", alignItems: "center", justifyContent: "space-between", fontWeight: 600, fontSize: 15.5, color: CHIP, fontFamily: "inherit" }}>
                  <span>{t.cat}</span>
                  {i === tech && <span style={{ fontFamily: MONO, fontSize: 10, color: ACCENT2, letterSpacing: "0.1em" }}>● ACTIVE</span>}
                </button>
              ))}
            </div>
            <div style={{ border: `1px solid ${BORDER15}`, background: "linear-gradient(160deg, rgba(18,20,62,0.7), rgba(10,11,40,0.7))", padding: "clamp(28px,3vw,44px)", minHeight: 280 }}>
              <div style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em", color: FAINT, textTransform: "uppercase", marginBottom: 24 }}>// {activeTech.cat}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}>
                {activeTech.items.map(([name, Icon]) => (
                  <span key={name} style={{ border: `1px solid ${BORDER2}`, padding: "11px 16px", fontFamily: MONO, fontSize: 13, color: CHIP, background: TINT, display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <Icon size={20} color={ACCENT2} />{name}
                  </span>
                ))}
              </div>
              <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 22 }}>
                <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: ACCENT2, textTransform: "uppercase", marginBottom: 10 }}>Purpose</div>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: CHIP, margin: 0 }}>{activeTech.purpose}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Industries We Serve</Eyebrow>
            <H2 mb={20}>Enterprise systems across complex industries</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              We engineer applications around operational workflows — rather than forcing businesses to adapt to generic software.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))", gap: 16 }}>
            {industries.map((ind, i) => (
              <Motion.div key={ind.t} className="rse-card-h" {...reveal(i)} style={{ border: `1px solid ${BORDER15}`, background: PANEL, padding: "26px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}>
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

      {/* WHY + COMPARISON */}
      <section style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div style={{ maxWidth: 720, marginBottom: "clamp(40px,5vw,64px)" }}>
            <Eyebrow>Why RevoSolve</Eyebrow>
            <H2 mb={20}>Systems that organizations depend on</H2>
            <p style={{ fontSize: 16, lineHeight: 1.7, color: BODY, margin: 0 }}>
              Engineering expertise combined with operational understanding — systems that keep creating value long after deployment.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 16, marginBottom: "clamp(48px,6vw,80px)" }}>
            {why.map((w, i) => (
              <Motion.div key={w.n} {...reveal(i)} style={{ borderTop: `1px solid ${BORDER2}`, padding: "26px 0 0" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                  <div style={{ width: 46, height: 46, border: `1px solid ${BORDER2}`, display: "flex", alignItems: "center", justifyContent: "center", color: ACCENT2, background: TINT }}><w.icon size={23} /></div>
                  <span style={{ fontFamily: MONO, fontSize: 12, color: ACCENT, letterSpacing: "0.1em" }}>{w.n}</span>
                </div>
                <h3 style={{ fontWeight: 600, fontSize: 19, lineHeight: 1.25, margin: "0 0 12px" }}>{w.t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.65, color: MUTED, margin: 0 }}>{w.d}</p>
              </Motion.div>
            ))}
          </div>

          {/* comparison stage */}
          <Motion.div {...reveal()}>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 26 }}>
              <span style={{ width: 34, height: 1, background: ACCENT }} />
              <span style={{ fontFamily: MONO, fontSize: 12, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase" }}>Traditional Development vs RevoSolve Engineering</span>
            </div>
            <div className="rse-grid-cmp" onMouseEnter={() => { paused.current = true; }} onMouseLeave={() => { paused.current = false; }}>
              {/* dimension rail */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                {compare.map((c, i) => (
                  <button key={c.dim} onClick={() => goCmp(i)} style={{ cursor: "pointer", textAlign: "left", background: "transparent", border: "none", borderTop: `1px solid ${BORDER}`, padding: "15px 0", display: "flex", flexDirection: "column", gap: 11, fontFamily: "inherit" }}>
                    <span style={{ fontWeight: 600, fontSize: 15, color: i === cmpIdx ? TEXT : FAINT, transition: "color .3s ease" }}>{c.dim}</span>
                    <div style={{ height: 2, background: PANEL, position: "relative", overflow: "hidden" }}>
                      <div style={{ position: "absolute", left: 0, top: 0, height: "100%", background: ACCENT, boxShadow: `0 0 8px ${ACCENT}`, width: `${i === cmpIdx ? Math.round(cmpProg * 100) : 0}%`, transition: "width .1s linear" }} />
                    </div>
                  </button>
                ))}
              </div>

              {/* stage */}
              <div style={{ border: `1px solid ${BORDER15}`, display: "flex", flexDirection: "column", minHeight: 360, overflow: "hidden", background: PANEL }}>
                <div style={{ textAlign: "center", padding: "20px 16px", borderBottom: `1px solid ${BORDER15}`, background: PANEL }}>
                  <div style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.2em", color: FAINT, textTransform: "uppercase", marginBottom: 8 }}>Dimension</div>
                  <div style={fadeStyle}><span style={{ fontWeight: 700, fontSize: "clamp(20px,2.4vw,28px)", letterSpacing: "-0.01em", color: TEXT }}>{compare[cmpIdx].dim}</span></div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", flex: 1, position: "relative" }}>
                  {/* traditional */}
                  <div style={{ position: "relative", padding: "clamp(24px,3vw,38px)", overflow: "hidden", borderRight: `1px solid ${BORDER15}` }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.6, pointerEvents: "none", backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 5px)" }} />
                    <div style={{ position: "relative" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 28 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#6b5a4d" }} />
                        <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: FAINT, textTransform: "uppercase" }}>Traditional</span>
                      </div>
                      <div style={{ minHeight: 58, marginBottom: 28, display: "flex", alignItems: "center" }}>
                        <CmpVisualTrad idx={cmpIdx} />
                      </div>
                      <div style={{ fontSize: "clamp(15px,1.5vw,17.5px)", lineHeight: 1.5, color: MUTED, minHeight: 56 }}><div style={fadeStyle}>{compare[cmpIdx].trad}</div></div>
                    </div>
                  </div>

                  {/* revosolve */}
                  <div style={{ position: "relative", padding: "clamp(24px,3vw,38px)", paddingLeft: "clamp(38px,4vw,58px)", overflow: "hidden", background: "linear-gradient(180deg, rgba(18,20,62,0.55), rgba(10,11,40,0.35))" }}>
                    <div style={{ position: "absolute", top: -40, right: -30, width: 180, height: 180, background: "radial-gradient(circle, rgba(135,123,241,0.22), transparent 68%)", filter: "blur(10px)", animation: "rseDrift 14s ease-in-out infinite", pointerEvents: "none" }} />
                    <div style={{ position: "relative" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 28 }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 9px ${ACCENT}` }} />
                        <span style={{ fontFamily: MONO, fontSize: 10.5, letterSpacing: "0.14em", color: ACCENT2, textTransform: "uppercase" }}>RevoSolve</span>
                      </div>
                      <div style={{ minHeight: 58, marginBottom: 28, display: "flex", alignItems: "center" }}>
                        <CmpVisualRevo idx={cmpIdx} />
                      </div>
                      <div style={{ fontWeight: 500, fontSize: "clamp(15px,1.5vw,17.5px)", lineHeight: 1.5, color: "#EFF0FF", minHeight: 56 }}><div style={fadeStyle}>{compare[cmpIdx].revo}</div></div>
                    </div>
                  </div>

                  {/* center seam + VS */}
                  <div style={{ position: "absolute", top: 0, bottom: 0, left: "50%", transform: "translateX(-50%)", width: 1, background: `linear-gradient(180deg, transparent, ${ACCENT}, transparent)`, opacity: 0.6, zIndex: 2, pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: 48, height: 48, transform: "translate(-50%,-50%)", zIndex: 3, pointerEvents: "none" }}>
                    <span style={{ position: "absolute", top: "50%", left: "50%", width: 48, height: 48, border: `1px solid ${ACCENT}`, borderRadius: "50%", animation: "rseRing 2.6s ease-out infinite" }} />
                    <span style={{ position: "absolute", inset: 0, transform: "rotate(45deg)", border: `1px solid ${ACCENT}`, background: PANEL }} />
                    <span style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", fontFamily: MONO, fontSize: 12, fontWeight: 700, letterSpacing: "0.05em", color: ACCENT2 }}>VS</span>
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ position: "relative", zIndex: 1, padding: "clamp(72px,8vw,120px) clamp(20px,6vw,88px)", background: ALT, borderTop: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 920, margin: "0 auto" }}>
          <div style={{ marginBottom: "clamp(40px,5vw,56px)" }}>
            <Eyebrow>Frequently Asked Questions</Eyebrow>
            <H2>Enterprise application development, answered</H2>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}` }}>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} style={{ borderBottom: `1px solid ${BORDER}` }}>
                  <button onClick={() => setOpen(isOpen ? -1 : i)} className="rse-faq-btn" style={{ cursor: "pointer", width: "100%", textAlign: "left", background: "transparent", border: "none", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24, fontWeight: 600, fontSize: "clamp(16px,1.6vw,19px)", color: TEXT, fontFamily: "inherit" }}>
                    <span>{f.q}</span>
                    <span style={{ flex: "none", width: 22, height: 22, position: "relative", color: isOpen ? ACCENT : FAINT }}>
                      <span style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: 2, background: "currentColor", transform: "translateY(-50%)" }} />
                      {!isOpen && <span style={{ position: "absolute", left: "50%", top: 0, height: "100%", width: 2, background: "currentColor", transform: "translateX(-50%)" }} />}
                    </span>
                  </button>
                  {isOpen && (
                    <Motion.p initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} style={{ fontSize: 15.5, lineHeight: 1.7, color: BODY, margin: 0, padding: "0 0 26px", maxWidth: 760 }}>
                      {f.a}
                    </Motion.p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" style={{ position: "relative", zIndex: 1, padding: "clamp(80px,9vw,140px) clamp(20px,6vw,88px)", borderTop: `1px solid ${BORDER}`, overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: -120, left: "50%", transform: "translateX(-50%)", width: 640, height: 400, background: "radial-gradient(ellipse, rgba(135,123,241,0.22), transparent 68%)", filter: "blur(20px)", pointerEvents: "none" }} />
        <Motion.div {...reveal()} style={{ maxWidth: 900, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28, fontFamily: MONO, fontSize: 11.5, letterSpacing: "0.16em", color: ACCENT2, textTransform: "uppercase" }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: ACCENT, boxShadow: `0 0 9px ${ACCENT}` }} /> Start Building
          </div>
          <h2 style={{ fontWeight: 800, fontSize: "clamp(32px,4.6vw,60px)", lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
            Build enterprise systems that{" "}
            <span style={{ background: `linear-gradient(90deg, ${ACCENT}, ${GOLD})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>scale with your business</span>
          </h2>
          <p style={{ fontSize: "clamp(16px,1.3vw,18.5px)", lineHeight: 1.65, color: BODY, maxWidth: 640, margin: "0 auto 40px" }}>
            Modernizing legacy applications, developing new platforms, or integrating complex workflows — we help organizations engineer secure, scalable, business-critical systems built for long-term success.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={goConnect} className="rse-btn-primary" style={{ cursor: "pointer", border: "none", fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.05em", textTransform: "uppercase", color: BG, padding: "17px 32px", fontWeight: 700 }}>Build Your Enterprise System</button>
            <button onClick={goConnect} className="rse-btn-ghost" style={{ cursor: "pointer", background: "transparent", fontFamily: MONO, fontSize: 13.5, letterSpacing: "0.05em", textTransform: "uppercase", color: TEXT, padding: "17px 32px" }}>Talk to an Enterprise Solutions Expert</button>
          </div>
        </Motion.div>
      </section>
    </main>
  );
};

export default RevoSolveEnterprise;
