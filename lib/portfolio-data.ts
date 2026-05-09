export type NavItem = {
  label: string;
  href: string;
};

export type HeroStat = {
  value: string;
  label: string;
  detail: string;
};

export type AboutHighlight = {
  title: string;
  description: string;
  tags: string[];
};

export type Skill = {
  name: string;
  level: number;
};

export type SkillCategory = {
  id: string;
  title: string;
  description: string;
  accent: string;
  skills: Skill[];
};

export type ProjectPreviewKind =
  | "web"
  | "vision"
  | "assistant"
  | "voice"
  | "emotion"
  | "crypto"
  | "utility";

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  preview: ProjectPreviewKind;
  status: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

export type JourneyItem = {
  year: string;
  title: string;
  description: string;
  tags: string[];
};

export type Achievement = {
  title: string;
  description: string;
  detail: string;
};

export type SocialLink = {
  label: string;
  href: string;
  value: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

export const heroStats: HeroStat[] = [
  {
    value: "07",
    label: "Featured builds",
    detail: "Web, embedded systems, AI, and automation work.",
  },
  {
    value: "04",
    label: "Core domains",
    detail: "Embedded systems, frontend, AI, and Android optimization.",
  },
  {
    value: "01",
    label: "Startup in motion",
    detail: "Founder of Comic Frame with a product-builder mindset.",
  },
];

export const aboutHighlights: AboutHighlight[] = [
  {
    title: "Hardware-first thinking",
    description:
      "I enjoy building practical systems where sensing, control, and interface design all work together as one experience.",
    tags: ["Arduino", "ESP32", "Sensor Interfacing"],
  },
  {
    title: "Modern web execution",
    description:
      "From startup landing pages to animated portfolio interfaces, I like shipping clean, polished frontend work with strong motion and responsive behavior.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "System tinkering",
    description:
      "I constantly experiment with ROMs, kernel-level optimization, custom Android setups, and performance tuning to understand systems deeply.",
    tags: ["Linux", "Android Studio", "Optimization"],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Core languages used across automation, systems, and product builds.",
    accent: "#67e8f9",
    skills: [
      { name: "Python", level: 92 },
      { name: "C Programming", level: 84 },
      { name: "Dart (Basic)", level: 58 },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Prototyping real-world hardware and microcontroller-based solutions.",
    accent: "#8b5cf6",
    skills: [
      { name: "Arduino", level: 90 },
      { name: "ESP32", level: 88 },
      { name: "Sensor Interfacing", level: 83 },
      { name: "Embedded Programming", level: 82 },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Building responsive digital experiences with motion and usability in mind.",
    accent: "#38bdf8",
    skills: [
      { name: "Web Development", level: 87 },
      { name: "Responsive Design", level: 86 },
      { name: "Flutter (Basic)", level: 55 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Daily workflow tools for shipping, collaboration, and debugging.",
    accent: "#a78bfa",
    skills: [
      { name: "Git", level: 84 },
      { name: "GitHub", level: 86 },
      { name: "Linux", level: 81 },
      { name: "Android Studio", level: 73 },
      { name: "VS Code", level: 90 },
      { name: "MySQL", level: 64 },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    description: "Visual storytelling that supports both products and presentations.",
    accent: "#22d3ee",
    skills: [
      { name: "Video Editing", level: 76 },
      { name: "Poster Design", level: 72 },
      { name: "Photo Editing", level: 74 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "8Bit Framework",
    description:
      "Modern startup and portfolio website with premium UI, responsive layouts, and smooth animations.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/silversoul2k5/8bit-framework",
    liveUrl: "https://8bit-framework.vercel.app",
    preview: "web",
    status: "Live launch",
    colors: {
      primary: "#67e8f9",
      secondary: "#3b82f6",
      tertiary: "#a855f7",
    },
  },
  {
    title: "Parkinglot_sys_AI",
    description:
      "AI-powered parking lot management system using computer vision and automation concepts.",
    tech: ["Python", "AI", "OpenCV"],
    githubUrl:
      "https://github.com/silversoul2k5/SmartPark-ESP32-IoT-Parking-Lot-System-with-Bluetooth-App",
    preview: "vision",
    status: "System prototype",
    colors: {
      primary: "#22d3ee",
      secondary: "#0ea5e9",
      tertiary: "#6366f1",
    },
  },
  {
    title: "DAZI-AI",
    description:
      "AI-based assistant project focused on automation and intelligent interactions.",
    tech: ["Python", "AI"],
    githubUrl: "https://github.com/silversoul2k5/DAZI-AI",
    preview: "assistant",
    status: "Conversational build",
    colors: {
      primary: "#7dd3fc",
      secondary: "#38bdf8",
      tertiary: "#8b5cf6",
    },
  },
  {
    title: "Voice Assistant",
    description:
      "Alexa-inspired voice assistant capable of handling voice-based interactions and commands.",
    tech: ["Python", "Speech Recognition"],
    githubUrl: "https://github.com/silversoul2k5/ESP_32_voice_assistant",
    preview: "voice",
    status: "Voice-first utility",
    colors: {
      primary: "#93c5fd",
      secondary: "#60a5fa",
      tertiary: "#c084fc",
    },
  },
  {
    title: "Yolov11-Face-Emotion-Detection",
    description:
      "Emotion detection system using YOLO and computer vision models.",
    tech: ["Python", "YOLO", "OpenCV"],
    githubUrl:
      "https://github.com/search?q=Yolov11-Face-Emotion-Detection+user%3Asilversoul2k5&type=repositories",
    preview: "emotion",
    status: "Computer vision study",
    colors: {
      primary: "#38bdf8",
      secondary: "#818cf8",
      tertiary: "#f472b6",
    },
  },
  {
    title: "BitCharts",
    description:
      "Interactive cryptocurrency and chart visualization platform.",
    tech: ["JavaScript", "Chart.js"],
    githubUrl: "https://github.com/silversoul2k5/BitCharts-Pro",
    liveUrl: "https://bitcharts-pro.vercel.app",
    preview: "crypto",
    status: "Data experience",
    colors: {
      primary: "#22d3ee",
      secondary: "#38bdf8",
      tertiary: "#f59e0b",
    },
  },
  {
    title: "Auto Clicker",
    description:
      "Automation utility tool for simulating automated click interactions.",
    tech: ["Python"],
    githubUrl:
      "https://github.com/search?q=auto+clicker+user%3Asilversoul2k5&type=repositories",
    preview: "utility",
    status: "Automation tool",
    colors: {
      primary: "#a78bfa",
      secondary: "#38bdf8",
      tertiary: "#14b8a6",
    },
  },
];

export const journey: JourneyItem[] = [
  {
    year: "2022 - Present",
    title: "EEE Student at Amrita Vishwa Vidyapeetham",
    description:
      "Built a foundation in electronics, systems thinking, and problem-solving while exploring practical engineering projects beyond the classroom.",
    tags: ["Electronics", "Systems", "Engineering"],
  },
  {
    year: "2023 - Present",
    title: "CEO of Comic Frame startup",
    description:
      "Started shaping brand, product, and execution decisions with a startup mindset focused on creative direction and real delivery.",
    tags: ["Startup", "Leadership", "Creative Direction"],
  },
  {
    year: "2023 - Present",
    title: "Embedded systems experimentation",
    description:
      "Prototyped hands-on solutions using ESP32, Arduino, and sensors to connect software logic with physical behavior.",
    tags: ["ESP32", "Arduino", "IoT"],
  },
  {
    year: "2024 - Present",
    title: "Android ROM development and testing",
    description:
      "Experimented with ROM flashing, optimization, kernel behavior, and system tuning to better understand low-level mobile performance.",
    tags: ["Custom ROMs", "Kernel", "Optimization"],
  },
  {
    year: "2024 - Present",
    title: "Web development projects",
    description:
      "Shifted toward premium frontend experiences with responsive design, animation systems, and polished interaction patterns.",
    tags: ["Next.js", "UI Motion", "Responsive Design"],
  },
];

export const achievements: Achievement[] = [
  {
    title: "GitHub Student Developer Pack Recipient",
    description:
      "Recognized through GitHub's student program and equipped with developer tooling for deeper product work.",
    detail: "Developer ecosystem access",
  },
  {
    title: "Startup Founder",
    description:
      "Leading Comic Frame sharpened product instincts, visual direction, and execution discipline.",
    detail: "Founder mindset",
  },
  {
    title: "Technical Project Development",
    description:
      "Built across AI, embedded systems, automation, and interactive web experiences with a hands-on approach.",
    detail: "Cross-domain execution",
  },
  {
    title: "Quantum Computing Presentation Lead",
    description:
      "Presented technical concepts in a way that balanced clarity, research, and storytelling.",
    detail: "Technical communication",
  },
];

export const socials: SocialLink[] = [
  {
    label: "Email",
    href: "mailto:arjunc2k5@gmail.com",
    value: "arjunc2k5@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/silversoul2k5",
    value: "github.com/silversoul2k5",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/silver.soul7",
    value: "@silver.soul7",
  },
];

export const techOrbit = [
  "Next.js",
  "Framer Motion",
  "ESP32",
  "Arduino",
  "Python",
  "AI",
  "Linux",
  "UI Systems",
];
