import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Vrushab Ghodke",
  initials: "VG",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://maps.app.goo.gl/maps/BangaloreKarnatakaIndia",
  about: "Software Engineer, Full Stack Developer, Generative AI Enthusiast",
  summary:
    "As an experienced Software Engineer proficient in Python, Go, JavaScript, and cloud technologies, I am dedicated to delivering innovative solutions and exceeding expectations. With a Master's degree in Computer Applications from Vellore Institute of Technology and hands-on experience in developing microservices, cloud migrations, and AI-powered applications, I constantly seek to expand my technical expertise. My experience includes migrating infrastructure to GCP, deploying microservices on Kubernetes, and developing RAG engines. I am passionate about open source contributions and continuously learning new technologies to solve complex problems.",
  avatarUrl: "/avatar/avatar.jpeg",
  contact: {
    email: "vrushab.ghodke@gmail.com",
    tel: "+919850214244",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/vrushab-bit",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://linkedin.com/in/vrushab-bit/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Vellore Institute of Technology",
      degree: "Master's in Computer Applications",
      start: "Aug 2023",
      end: "March 2025",
      location: "Vellore, Tamil Nadu",
    },
    {
      school: "Pune University",
      degree: "Bachelor's in Computer Applications",
      start: "Aug 2019",
      end: "March 2022",
      location: "Pune, Maharashtra",
    },
  ],
  work: [
    {
      company: "OneAssure",
      link: "#",
      badges: [],
      title: "Software Engineer",
      start: "Dec 2024",
      end: "Present",
      location: "Bangalore, Karnataka",
      description: `
      - Migrated AWS to GCP (Terraform/Terragrunt), improving scalability by 40% and reducing cloud costs by 30%.<br/>
      - Deployed 10+ microservices on GKE, optimizing resources by 25% and achieving 99.99% uptime.<br/>
      - Developed Go boilerplate (gRPC/HTTP), cutting microservice development by 50% and developer onboarding by 30%.<br/>
      - Reduced product integration time from 3 months to 3 weeks via workflow re-architecture and automation.<br/>
      - Automated KYC, payments, and insurer integrations using Go and Temporal workflows.<br/>
      - Implemented Lua Scripting to dynamically inject parameters and transformed request/response bodies for insurer endpoints using Lua scripts, enhancing system adaptability.<br/>
      - Developed Retrieval Augmented Generation (RAG) engine prototype (LlamaIndex, MongoDB) for enhanced data retrieval.<br/>
      `,
    },
    {
      company: "Freelancing Projects",
      link: "#",
      badges: ["Freelancer"],
      title: "Full Stack Web Developer",
      start: "Feb 2024",
      end: "Jul 2024",
      location: "Pune, Maharashtra",
      description: `
      - Developed web applications: sales system transformation (Excel to web-based) and a platform for design professionals.<br/>
      - Implemented secure user authentication (JWT) and role-based access control.<br/>
      - Deployed applications on AWS (Route 53, EC2) using Docker and monitored via Prometheus/Grafana.<br/>
      `,
    },
    {
      company: "SwaLay",
      link: "https://www.swalay.talantoncore.in/",
      badges: ["Intern"],
      title: "Software Engineering Intern",
      start: "Aug 2023",
      end: "Jan 2024",
      location: "Pune, Maharashtra",
      description: `
      - Designed and developed APIs using Nodejs for integrating SwaLay's platform with various third-party applications and services.<br/> 
      - Collaborated with team members to design and implement a comprehensive database infrastructure for SwaLay.<br/>
      - Contributed to the implementation of a CI/CD pipeline using GitHub Actions for the SwaLay music platform.<br/>
      `,
    },
  ],
  skills: [
    "Python",
    "Go",
    "JavaScript (ES6+)",
    "HTML/CSS",
    "SQL",
    "Lua",
    "React",
    "Next.js",
    "Express",
    "Flask",
    "FastAPI",
    "Node.js",
    "gRPC",
    "Temporal",
    "LlamaIndex",
    "MongoDB",
    "Postgres",
    "GCP (GKE)",
    "AWS (EC2, S3, Lambda, API Gateway)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Terragrunt",
    "Jenkins",
    "GitHub",
    "Prometheus",
    "Grafana",
    "Loki",
    "Linux",
  ],
  openSource: [
    {
      organization: "LlamaIndex",
      role: "Contributor",
      description:
        "Developed and contributed a Mongo Chat Store, enhancing LlamaIndex's capabilities for persistent chat history management and retrieval with MongoDB.",
      prLink: "https://github.com/run-llama/llama_index/pull/17979",
    },
    {
      organization: "LlamaIndex",
      role: "Contributor",
      description:
        "Added functionality to Postgres Chat Store to support different schemas.",
      prLink: "https://github.com/run-llama/llama_index/pull/19741",
    },
  ],
  achievements: [
    {
      title: "Bolt 2.0 (Organized by ic-ETITE 24)",
      role: "Competitor",
      date: "February 2024",
      location: "Vellore Institute of Technology",
      description:
        "Participated in a 28-hour hackathon focused on improving accessibility and solving problems in existing Ed Tech platforms. Collaborated in a team of four to develop an AI-powered learning assistant that leverages personalized video context. Awarded a Participation Certificate for actively contributing to the event.",
    },
    {
      title: "HackBattle (Organized by IEEE CS Club)",
      role: "Competitor",
      date: "November 2023",
      location: "Vellore Institute of Technology",
      description:
        "Participated in a 36-hour hackathon focused on tackling challenges in the healthcare industry. Collaborated with a team to develop a patient data management platform for healthcare organizations. Awarded a Participation Certificate for actively contributing to the event.",
    },
  ],
} as const;
