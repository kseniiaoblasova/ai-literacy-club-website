export const SOCIAL_LINKS = {
  discord: "https://discord.gg/mvV9VfRPdk",
  instagram: "https://www.instagram.com/ai.literacy.club",
  tiktok: "https://www.tiktok.com/@ai.literacy.club",
  registration: "https://n8n-production-cf3f.up.railway.app/form/e83be8e8-e0f3-4609-b136-e00c156b7420",
  newsletter: "#" // Replace with actual newsletter link
};

export const TIMELINE_EVENTS = [
  {
    date: "Fall 2025",
    title: "\"AI for Everyone\" Club Founded",
    description: "The club was officially founded to bring AI awareness to students."
  },
  {
    date: "Fall 2025",
    title: "First Club Meeting",
    description: "Our inaugural meeting where we discussed the future of AI."
  },
  {
    date: "Fall 2025",
    title: "Discord Server Launched",
    description: "Our community hub went live for members to connect and share resources."
  },
  {
    date: "Spring 2026",
    title: "Club Renamed",
    description: "\"AI for Everyone\" Club was renamed to \"AI Literacy & Exploration\" Club to better reflect our mission."
  },
  {
    date: "Spring 2026",
    title: "First Meeting of Spring 2026",
    description: "Kicking off the new semester with fresh ideas and projects."
  }
];

export const MEETINGS = [
  {
    id: "spring-2026-2",
    date: "March 9th, 2026",
    time: "2:30 PM - 3:30 PM",
    location: "MS 209",
    title: "AI 101: All the Tools You Must Know + Real‑Time Practice",
    description: "Join us for a hands-on session where we will explore essential AI tools and practice using them in real-time.",
    materials: [],
    isUpcoming: true
  },
  {
    id: "spring-2026-1",
    date: "March 2, 2026",
    title: "AI 101–Intro to Artificial Intelligence: Brief History + What LLMs are",
    description: "An introductory session to Artificial Intelligence, its brief history, and an overview of Large Language Models (LLMs).",
    image: "/meetings/flyers/march-2-2026.png",
    materials: [
      { name: "Meeting Slides", url: "https://drive.google.com/file/d/1ggNLKEX64jOtPZw4xsiG27ul3T97D_Ij/view?usp=sharing" },
      { name: "Resource Guide", url: "/meetings/materials/AI%20101–Intro%20to%20Artificial%20Intelligence_%20Brief%20History+What%20LLMs%20are.pdf" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-6",
    date: "December 4, 2025",
    title: "Effective Exam Preparation with AI Tools",
    description: "A workshop on using AI tools for effective exam preparation.",
    image: "/meetings/flyers/december-4-2025.png",
    materials: [
      { name: "Exam Preparation with AI Tools Guide", url: "/meetings/materials/Exam%20Preparation%20with%20AI%20Tools%20Guide%20(1).pdf" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-5",
    date: "November 20, 2025",
    title: "AI Ethincs in Real Life: The Pitfalls We Can't Ignore",
    description: "A discussion on AI ethics in real life and the pitfalls we cannot ignore.",
    image: "/meetings/flyers/november-20-2025.png",
    materials: [
      { name: "AI Ethics Meeting Recording", url: "https://drive.google.com/file/d/1bcS0ia6VQfhOr_iYuWZDqR47nK7aGtwR/view?usp=sharing" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-4",
    date: "November 6, 2025",
    title: "Prompt Engineering: Get The Most Out of AI",
    description: "Learn how to get the most out of AI through effective prompt engineering.",
    image: "/meetings/flyers/november-6-2025.png",
    materials: [
      { name: "Prompt Engineering Guide", url: "/meetings/materials/Prompt-Engineering-Get-the-Most-Out-of-AI.pdf" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-3",
    date: "October 30, 2025",
    title: "\"Build Your Own AI Agent\" Workshop",
    description: "A workshop on building your own AI agent.",
    image: "/meetings/flyers/october-30-2025.png",
    materials: [],
    isUpcoming: false
  },
  {
    id: "fall-2025-2",
    date: "October 16, 2025",
    title: "AI Agents: What are They?",
    description: "An overview of AI agents and what they are.",
    image: "/meetings/flyers/october-16-2025.png",
    materials: [
      { name: "What Are AI Agents", url: "/meetings/materials/What%20Are%20AI%20Agents.pptx" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-1",
    date: "October 2, 2025",
    title: "How Does Generative AI Work, Really?",
    description: "A deep dive into how generative AI works behind the scenes.",
    image: "/meetings/flyers/october-2-2025.png",
    materials: [
      { name: "How Generative AI Really Works", url: "/meetings/materials/How%20Generative%20AI%20Really%20Works.pptx" }
    ],
    isUpcoming: false
  },
  {
    id: "fall-2025-0",
    date: "September 25, 2025",
    title: "Club Introduction & Mini AI Tools Workshop",
    description: "Our inaugural meeting where we discussed the future of AI and had a mini workshop on essential AI tools.",
    image: "/meetings/flyers/september-25-2025.png",
    materials: [
      { name: "Intro to AI Presentation", url: "/meetings/materials/AI%20for%20Everyone%20Club%20Introduction.pptx" },
      { name: "Mini Workshop Tools", url: "/meetings/materials/MINI%20WORKSHOP%20—%203%20AI%20TOOLS%20YOU%20MUST%20KNOW%20ABOUT.docx" }
    ],
    isUpcoming: false
  }
];

export const TEAM_MEMBERS = [
  {
    id: "president",
    name: "Alex Doe",
    role: "President",
    bio: "Passionate about making AI accessible to everyone and exploring its ethical implications.",
    image: "https://picsum.photos/seed/alex/400/400",
    email: "president@ailiteracy.club"
  },
  {
    id: "vp",
    name: "Sam Smith",
    role: "Vice President",
    bio: "Focuses on organizing workshops and hands-on AI projects for club members.",
    image: "https://picsum.photos/seed/sam/400/400",
    email: "vp@ailiteracy.club"
  },
  {
    id: "secretary",
    name: "Jordan Lee",
    role: "Secretary",
    bio: "Keeps the club organized and manages our communications and newsletters.",
    image: "https://picsum.photos/seed/jordan/400/400",
    email: "secretary@ailiteracy.club"
  },
  {
    id: "treasurer",
    name: "Casey Jones",
    role: "Treasurer",
    bio: "Manages club finances and funding for our events and projects.",
    image: "https://picsum.photos/seed/casey/400/400",
    email: "treasurer@ailiteracy.club"
  }
];
