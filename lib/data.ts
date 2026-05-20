import {
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  Fingerprint,
  Globe2,
  Layers3,
  LockKeyhole,
  Network,
  Rocket,
  ScanSearch,
  ShieldCheck,
  Workflow,
  Zap
} from "lucide-react";

export const company = {
  name: "Technobuzz Systems",
  email: "contact@technobuzzsystems.com",
  phone: "+91 98765 43210",
  address: "Pune, Maharashtra, India",
  offices: ["Pune", "Bengaluru", "Dubai", "London", "New York"]
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" }
];

export const serviceGroups = [
  {
    category: "Software Development",
    icon: Code2,
    summary: "Secure product engineering for enterprise platforms, SaaS, and mission-critical applications.",
    services: [
      "Custom Software Development",
      "Enterprise Applications",
      "SaaS Product Development",
      "Web Application Development",
      "Mobile App Development",
      "API Development",
      "Microservices Architecture",
      "Legacy System Modernization"
    ],
    stack: ["React", "Next.js", "Node.js", ".NET", "Java", "PostgreSQL", "GraphQL", "Kubernetes"]
  },
  {
    category: "Cybersecurity Services",
    icon: ShieldCheck,
    summary: "Managed security, threat response, and compliance programs for resilient digital operations.",
    services: [
      "SOC Monitoring",
      "SIEM Solutions",
      "Threat Detection & Response",
      "Vulnerability Assessment",
      "Penetration Testing",
      "Cloud Security",
      "Network Security",
      "Endpoint Security",
      "Identity & Access Management",
      "Zero Trust Architecture",
      "Security Audits",
      "Compliance Management",
      "Incident Response",
      "Digital Forensics",
      "Managed Security Services",
      "Email Security",
      "Firewall Management",
      "Data Loss Prevention",
      "Security Awareness Training",
      "Ransomware Protection"
    ],
    stack: ["Splunk", "Microsoft Sentinel", "CrowdStrike", "Wazuh", "Nessus", "Burp Suite", "Okta", "Palo Alto"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    summary: "Cloud-native infrastructure, migration, automation, and DevSecOps delivery systems.",
    services: [
      "AWS Solutions",
      "Azure Solutions",
      "Google Cloud",
      "Kubernetes",
      "Docker",
      "CI/CD Pipelines",
      "Infrastructure Automation",
      "DevSecOps",
      "Cloud Migration",
      "Serverless Architecture"
    ],
    stack: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Argo CD"]
  },
  {
    category: "AI & Data Solutions",
    icon: BrainCircuit,
    summary: "Enterprise AI, data engineering, analytics, and intelligent automation built with governance.",
    services: [
      "AI Chatbots",
      "Machine Learning",
      "Data Engineering",
      "Data Analytics",
      "Business Intelligence",
      "Generative AI Solutions",
      "NLP Solutions",
      "Predictive Analytics"
    ],
    stack: ["Python", "PyTorch", "TensorFlow", "LangChain", "Spark", "Snowflake", "Power BI", "Vector DBs"]
  },
  {
    category: "IT Consulting",
    icon: BriefcaseBusiness,
    summary: "Strategy, architecture, and managed technology advisory for measurable transformation.",
    services: [
      "Digital Transformation",
      "IT Strategy",
      "Technology Consulting",
      "Architecture Consulting",
      "Infrastructure Planning",
      "Managed IT Services"
    ],
    stack: ["TOGAF", "ITIL", "NIST", "ISO 27001", "Agile", "FinOps", "SRE", "COBIT"]
  }
];

export const homeServices = [
  { title: "Secure Software Engineering", icon: Code2, text: "Modern platforms designed for speed, scale, maintainability, and security from day one." },
  { title: "Cyber Defense Operations", icon: ShieldCheck, text: "24/7 monitoring, incident response, hardening, vulnerability management, and compliance." },
  { title: "Cloud Transformation", icon: Cloud, text: "Landing zones, migration, observability, automation, cost controls, and DevSecOps pipelines." },
  { title: "AI & Data Acceleration", icon: BrainCircuit, text: "Production AI, analytics, data platforms, and automation for business-critical decisions." }
];

export const whyChoose = [
  "Security-first engineering culture",
  "Enterprise delivery governance",
  "Cross-functional experts in software, cloud, and cyber",
  "Transparent delivery metrics and executive reporting",
  "Global delivery model with local accountability",
  "Reusable accelerators for faster time to value"
];

export const industries = [
  "Banking & FinTech",
  "Healthcare",
  "SaaS & Technology",
  "Manufacturing",
  "Retail & E-commerce",
  "Education",
  "Government",
  "Logistics"
];

export const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Azure",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Splunk",
  "Sentinel",
  "PostgreSQL",
  "MongoDB",
  "Power BI",
  "OpenAI"
];

export const testimonials = [
  {
    quote: "Technobuzz Systems helped us modernize our core platform while raising our security baseline across cloud and application layers.",
    name: "Aarav Mehta",
    role: "CTO, FinEdge Global"
  },
  {
    quote: "Their SOC and cloud teams brought structure, speed, and clarity to a complex security transformation program.",
    name: "Nina Rodriguez",
    role: "CISO, HealthBridge"
  },
  {
    quote: "The team delivered a scalable SaaS architecture with the governance our enterprise customers expect.",
    name: "Oliver Grant",
    role: "VP Product, Northstar Labs"
  }
];

export const stats = [
  { value: "150+", label: "Enterprise Projects" },
  { value: "24/7", label: "Security Monitoring" },
  { value: "40%", label: "Average Delivery Acceleration" },
  { value: "99.9%", label: "Cloud Reliability Targets" }
];

export const process = [
  { title: "Discover", icon: ScanSearch, text: "Assess goals, risk, systems, users, and measurable business outcomes." },
  { title: "Architect", icon: Layers3, text: "Design secure, scalable foundations across product, cloud, and operations." },
  { title: "Build", icon: Code2, text: "Deliver in agile increments with automation, QA, and security validation." },
  { title: "Secure", icon: LockKeyhole, text: "Harden environments, monitor threats, and embed compliance controls." },
  { title: "Optimize", icon: Zap, text: "Improve performance, cost, reliability, and user adoption continuously." }
];

export const compliance = ["ISO 27001 aligned", "SOC 2 readiness", "GDPR controls", "HIPAA safeguards", "PCI DSS advisory", "NIST CSF"];

export const caseStudies = [
  {
    title: "Enterprise Application Modernization",
    category: "Software",
    problem: "A global services company relied on fragmented legacy workflows that slowed operations and increased support costs.",
    solution: "Technobuzz Systems rebuilt the platform as a modular cloud-ready application with role-based workflows and analytics.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Azure", "Docker"],
    results: ["37% faster operations", "55% fewer support tickets", "99.95% application availability"],
    metrics: "6-month modernization roadmap delivered in 4 agile releases."
  },
  {
    title: "Security Operations Transformation",
    category: "Cybersecurity",
    problem: "A healthcare network lacked centralized monitoring, alert triage, and incident response playbooks.",
    solution: "We deployed SIEM integrations, SOC workflows, threat detection rules, and executive risk reporting.",
    technologies: ["Microsoft Sentinel", "Defender", "Wazuh", "MITRE ATT&CK", "Azure"],
    results: ["72% lower mean time to detect", "48-hour incident playbook launch", "Continuous compliance reporting"],
    metrics: "1.8M events normalized monthly with prioritized alerting."
  },
  {
    title: "Cloud Migration For FinTech Scale",
    category: "Cloud",
    problem: "A FinTech product needed high availability, auditability, and lower release risk before regional expansion.",
    solution: "We created cloud landing zones, IaC modules, Kubernetes workloads, CI/CD gates, and observability dashboards.",
    technologies: ["AWS", "EKS", "Terraform", "GitHub Actions", "Prometheus"],
    results: ["30% lower infrastructure cost", "Blue-green deployments", "RTO reduced to under 30 minutes"],
    metrics: "12 production services migrated with zero critical downtime."
  },
  {
    title: "AI Knowledge Assistant",
    category: "AI",
    problem: "A large operations team spent thousands of hours searching policy, support, and training documents.",
    solution: "We implemented a governed generative AI assistant with retrieval, audit trails, and human feedback loops.",
    technologies: ["Python", "Vector DB", "LLMs", "FastAPI", "Power BI"],
    results: ["42% faster ticket resolution", "Role-aware knowledge access", "Measurable adoption analytics"],
    metrics: "80,000 documents indexed with scoped access controls."
  }
];

export const jobs = [
  {
    title: "Software Engineer",
    department: "Engineering",
    location: "Hybrid",
    requirements: ["React", "Node.js", "TypeScript", "REST APIs", "Git", "Problem-solving"],
    responsibilities: ["Build scalable applications", "Collaborate with teams", "Optimize performance"]
  },
  {
    title: "Cybersecurity Analyst",
    department: "Cybersecurity",
    location: "Remote",
    requirements: ["SIEM", "SOC operations", "Threat monitoring", "Incident response", "Networking fundamentals"],
    responsibilities: ["Monitor security alerts", "Investigate incidents", "Improve security posture"]
  },
  {
    title: "DevOps Engineer",
    department: "Cloud",
    location: "Hybrid",
    requirements: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    responsibilities: ["Maintain infrastructure", "Automate deployments", "Improve reliability"]
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    requirements: ["Figma", "Design systems", "User research", "Prototyping"],
    responsibilities: ["Design modern interfaces", "Improve user experience", "Create responsive layouts"]
  },
  {
    title: "AI/ML Engineer",
    department: "AI & Data",
    location: "Hybrid",
    requirements: ["Python", "TensorFlow/PyTorch", "NLP", "LLMs", "Data pipelines"],
    responsibilities: ["Build AI solutions", "Train ML models", "Deploy AI systems"]
  }
];

export const articles = [
  { title: "How Zero Trust Changes Enterprise Architecture", category: "Cybersecurity", read: "7 min", featured: true },
  { title: "Cloud Cost Governance Without Slowing Teams", category: "Cloud", read: "5 min", featured: true },
  { title: "Production AI Needs Security, Evaluation, And Observability", category: "AI", read: "8 min", featured: true },
  { title: "Modern SaaS Platforms Need Secure SDLC By Default", category: "Tech Trends", read: "6 min", featured: false },
  { title: "SOC Metrics That Executives Actually Need", category: "Cybersecurity", read: "4 min", featured: false },
  { title: "Kubernetes Reliability Patterns For Regulated Teams", category: "Cloud", read: "6 min", featured: false }
];

export const values = [
  { title: "Trust", icon: ShieldCheck, text: "We protect client confidence with clear governance, secure delivery, and honest reporting." },
  { title: "Engineering Depth", icon: Workflow, text: "We solve hard problems with architecture discipline and implementation ownership." },
  { title: "Outcome Focus", icon: Rocket, text: "We connect technical decisions to business metrics, risk reduction, and user adoption." },
  { title: "Global Mindset", icon: Globe2, text: "We build for distributed teams, international users, and enterprise expectations." }
];

export const aboutTimeline = [
  ["2019", "Founded as a software engineering partner for growing digital businesses."],
  ["2021", "Expanded into cybersecurity consulting and cloud infrastructure programs."],
  ["2023", "Launched managed security and DevSecOps delivery practices."],
  ["2026", "Serving global clients across software, cyber, cloud, AI, and consulting."]
];

export const leadership = [
  { name: "Rohan Deshmukh", role: "Chief Executive Officer", focus: "Enterprise transformation and strategic partnerships" },
  { name: "Ananya Rao", role: "Chief Technology Officer", focus: "Cloud-native platforms and product engineering" },
  { name: "Kabir Shah", role: "Chief Security Officer", focus: "SOC operations, compliance, and cyber resilience" }
];

export const trustSignals = [
  { icon: Fingerprint, label: "Identity-first access controls" },
  { icon: Network, label: "Defense-in-depth architecture" },
  { icon: Database, label: "Data privacy and governance" },
  { icon: Building2, label: "Enterprise delivery maturity" },
  { icon: CheckCircle2, label: "Transparent compliance reporting" }
];
