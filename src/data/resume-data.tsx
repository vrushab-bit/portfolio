import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Vrushab Ghodke",
  initials: "VG",
  location: "Bangalore, Karnataka, India",
  locationLink: "https://maps.app.goo.gl/maps/BangaloreKarnatakaIndia",
  about: "Lead AI Platform Engineer, Full Stack Developer, Generative AI Enthusiast",
  summary:
    "As a Lead AI Platform Engineer with expertise in agentic AI, LLMs, and cloud infrastructure, I architect and build enterprise-grade AI systems. With a Master's degree in Computer Applications from Vellore Institute of Technology, I specialize in multi-agent ecosystems, RAG architectures, and scalable microservices. My experience includes building agentic AI systems with Microsoft AutoGen, re-engineering RAG pipelines with RAGFlow, and orchestrating cloud migrations. I am passionate about open source contributions and continuously pushing the boundaries of AI technology.",
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
      title: "Lead AI Platform Engineer",
      start: "Dec 2024",
      end: "Present",
      location: "Bangalore, Karnataka",
      description: `
      - Agentic AI Architecture: Architected a multi-agent ecosystem using Microsoft AutoGen, enabling specialized agents to autonomously collaborate on complex tasks such as policy comparison and claims eligibility.<br/>
      - Dynamic MCP Gateway: Developed a Model Context Protocol (MCP) gateway using FastMCP to interface with the AutoGen multi-agent cluster, implementing dynamic configuration fetching from the database to ensure real-time agent adaptability.<br/>
      - Enterprise Vertex AI Integration: Engineered specialized AutoGen classes to integrate Google Gemini models via Vertex AI, creating a fully OpenAPI-compliant, enterprise-grade agent system capable of secure, scalable deployment.<br/>
      - Advanced RAG Architecture: Re-engineered the retrieval pipeline using RAGFlow to leverage deep document understanding for superior similarity and vector search. Extended the open-source codebase to support Google Cloud Vertex AI and Gemini embedding models.<br/>
      - Temporal Workflow Orchestration: Re-architected critical business flows (KYC, Payments) using Temporal, compressing product integration timelines from 3 months to 3 weeks.<br/>
      - Go Ecosystem Acceleration: Engineered a standardized Go/gRPC boilerplate, slashing microservice development cycles by 50% and reducing developer onboarding time by 30%.<br/>
      - Cloud Migration & Cost Optimization: Orchestrated the infrastructure migration from AWS to GCP using Terraform/Terragrunt, resulting in a 30% reduction in cloud costs and a 40% improvement in scalability.<br/>
      - GKE Orchestration: Managed the containerization and deployment of 10+ microservices on Google Kubernetes Engine (GKE), optimizing resource allocation by 25% while maintaining 99.99% system uptime.<br/>
      - Dynamic API Gateway: Integrated Lua scripting for dynamic parameter injection and payload transformation, significantly enhancing system adaptability without requiring backend code changes.<br/>
      `,
    },
    {
      company: "SwaLay",
      link: "https://www.swalay.talantoncore.in/",
      badges: ["Intern"],
      title: "Software Engineering Intern",
      start: "Feb 2024",
      end: "Jul 2024",
      location: "Pune, Maharashtra",
      description: `
      - API & Database Design: Designed scalable Node.js APIs for third-party integrations and architected the comprehensive database infrastructure to support the music distribution platform.<br/>
      - CI/CD Implementation: Built and maintained CI/CD pipelines using GitHub Actions, automating testing and deployment workflows to reduce manual release overhead.<br/>
      `,
    },
  ],
  skills: [
    "Go",
    "Python",
    "Java",
    "JavaScript (ES6+)",
    "SQL",
    "Lua",
    "HTML/CSS",
    "Node.js",
    "React",
    "Next.js",
    "Express",
    "Flask",
    "FastAPI",
    "Gin",
    "LlamaIndex",
    "Microsoft AutoGen",
    "Langchain",
    "RAGFlow",
    "Vertex AI",
    "Agentic AI",
    "Embeddings",
    "GCP (GKE, Artifact Registry)",
    "AWS (Lambda, API Gateway, Route 53, S3, EC2, EKS)",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Terragrunt",
    "Jenkins",
    "GitHub Actions",
    "Linux (Ubuntu)",
    "Prometheus",
    "Grafana",
    "Loki",
    "AWS IAM",
    "JWT",
    "RBAC",
    "OAuth",
    "MongoDB",
    "PostgreSQL",
    "OpenSearch (Vector)",
    "Redis",
    "MinIO",
    "Microservices",
    "Serverless",
    "Event-Driven Architecture",
  ],
  openSource: [
    {
      organization: "LlamaIndex",
      role: "Contributor",
      description:
        "Developed & contributed a Mongo Chat Store, enhancing LlamaIndex's capabilities for persistent chat history management. Added functionality to Postgres Chat Store to support different schemas.",
      prLink: "https://github.com/run-llama/llama_index/pull/17979",
    },
  ],
  achievements: [
    {
      title: "Bolt 2.0 Hackathon (2024)",
      role: "Competitor",
      date: "2024",
      location: "Vellore Institute of Technology",
      description:
        "Developed an AI-powered learning assistant with personalized video context; focused on EdTech accessibility.",
    },
    {
      title: "HackBattle (2023)",
      role: "Competitor",
      date: "2023",
      location: "Vellore Institute of Technology",
      description:
        "Built a patient data management platform for healthcare organizations (IEEE CS Club).",
    },
  ],
} as const;
