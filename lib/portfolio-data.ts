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

export type ProjectMediaLayout = "app-with-photo" | "mobile-pair" | "stacked";

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  liveUrl?: string;
  liveLabel?: string;
  preview?: ProjectPreviewKind;
  mediaLayout?: ProjectMediaLayout;
  images?: ProjectImage[];
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
    label: "Independent build identity",
    detail: "Building 8Bit Framework as a premium interface and product-driven brand.",
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
      { name: "Python", level: 49 },
      { name: "C Programming", level: 45 },
      { name: "Dart (Basic)", level: 24 },
    ],
  },
  {
    id: "embedded",
    title: "Embedded Systems",
    description: "Prototyping real-world hardware and microcontroller-based solutions.",
    accent: "#8b5cf6",
    skills: [
      { name: "Arduino", level: 48 },
      { name: "ESP32", level: 47 },
      { name: "Sensor Interfacing", level: 44 },
      { name: "Embedded Programming", level: 42 },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Building responsive digital experiences with motion and usability in mind.",
    accent: "#38bdf8",
    skills: [
      { name: "Web Development", level: 46 },
      { name: "Responsive Design", level: 45 },
      { name: "Flutter (Basic)", level: 28 },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Daily workflow tools for shipping, collaboration, and debugging.",
    accent: "#a78bfa",
    skills: [
      { name: "Git", level: 43 },
      { name: "GitHub", level: 44 },
      { name: "Linux", level: 41 },
      { name: "Android Studio", level: 38 },
      { name: "VS Code", level: 49 },
      { name: "MySQL", level: 32 },
    ],
  },
  {
    id: "creative",
    title: "Creative",
    description: "Visual storytelling that supports both products and presentations.",
    accent: "#22d3ee",
    skills: [
      { name: "Video Editing", level: 40 },
      { name: "Poster Design", level: 36 },
      { name: "Photo Editing", level: 38 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "8Bit Framework",
    description:
      "Premium website system and indie build identity focused on cinematic UI, fast interactions, and polished presentation.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/silversoul2k5/8bit-framework",
    liveUrl: "https://8bit-framework.vercel.app",
    preview: "web",
    status: "Indie studio build",
    colors: {
      primary: "#67e8f9",
      secondary: "#3b82f6",
      tertiary: "#a855f7",
    },
  },
  {
    title: "Smart Parking AI",
    description:
      "ESP32-connected parking lot prototype with live slot updates, mobile monitoring, and a guided mini-map experience.",
    tech: ["Java", "ESP32", "Bluetooth"],
    githubUrl:
      "https://github.com/silversoul2k5/SmartPark-ESP32-IoT-Parking-Lot-System-with-Bluetooth-App",
    images: [
      {
        src: "/images/project-smart-parking-app.png",
        alt: "Smart Parking AI app interface",
      },
      {
        src: "/images/project-smart-parking-model.png",
        alt: "Smart parking hardware model prototype",
      },
    ],
    mediaLayout: "app-with-photo",
    status: "IoT parking prototype",
    colors: {
      primary: "#fde047",
      secondary: "#a78bfa",
      tertiary: "#22d3ee",
    },
  },
  {
    title: "High Speed ESP32 Line Follower",
    description:
      "High-speed ESP32 line follower using an 8-IR array, TB6612FNG motor driver, and PD control for tight turns and fast track response.",
    tech: ["ESP32", "C++", "PD Control"],
    githubUrl:
      "https://github.com/silversoul2k5/High_Speed_ESP32_Line_Follower-",
    images: [
      {
        src: "/images/project-line-follower-front.jpg",
        alt: "High speed ESP32 line follower front view",
      },
      {
        src: "/images/project-line-follower-wiring.jpg",
        alt: "High speed ESP32 line follower wiring and sensor array",
      },
      {
        src: "/images/project-line-follower-team.jpg",
        alt: "Line follower testing setup",
      },
    ],
    mediaLayout: "stacked",
    status: "Racing bot prototype",
    colors: {
      primary: "#60a5fa",
      secondary: "#22d3ee",
      tertiary: "#f59e0b",
    },
  },
  {
    title: "8Bit Fitnezz",
    description:
      "Dark fitness app concept focused on workout logging, calorie tracking, and voice-based exercise entry for daily training flow.",
    tech: ["Flutter", "Voice Logging", "Fitness Tracking"],
    githubUrl: "https://github.com/silversoul2k5/EightBit-Fitnezz",
    images: [
      {
        src: "/images/project-fitnezz-voice.png",
        alt: "8Bit Fitnezz voice workout logging screen",
      },
      {
        src: "/images/project-fitnezz-summary.jpg",
        alt: "8Bit Fitnezz fitness tracking summary screen",
      },
    ],
    mediaLayout: "mobile-pair",
    status: "Fitness app concept",
    colors: {
      primary: "#fde047",
      secondary: "#84cc16",
      tertiary: "#f97316",
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
    year: "2024 - Present",
    title: "Founder of 8Bit Framework",
    description:
      "Started shaping 8Bit Framework as an indie build identity focused on premium UI, motion-led interfaces, and clean product presentation.",
    tags: ["Frontend", "Product Build", "Brand Direction"],
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
    title: "Independent Product Builder",
    description:
      "Building 8Bit Framework sharpened product instincts, visual direction, and execution discipline around polished digital experiences.",
    detail: "8Bit Framework",
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
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/arjunc942k5",
    value: "linkedin.com/in/arjunc942k5",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/silversoul2k5",
    value: "@silversoul2k5",
  },
];

export const techOrbit = [
  "Next.js",
  "Framer Motion",
  "ESP32",
  "Arduino",
  "Python",
  "C++",
  "Linux",
  "UI Systems",
];
