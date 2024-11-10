import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Vrushab Ghodke",
  initials: "VG",
  location: "Pune, Maharashtra, India",
  locationLink: "https://maps.app.goo.gl/VLVgeJ4AnJFiE5ur8",
  about: "Software Engineer, Full Stack Developer, Genrative AI Enthusiast",
  summary:
    "As an experienced Full Stack Web Developer proficient in Python, Javascript, and ReactJS, I am dedicated to delivering innovative solutions and exceeding expectations. With a Master's degree in Computer Applications from Vellore Institute of Technology and hands-on experience in developing web applications and APIs, I constantly seek to expand my technical expertise. My proactive risk mindset, commitment to continuous learning, and excellent communication skills enable me to navigate challenges and collaborate effectively in fast-paced, dynamic environments. Looking ahead, I aspire to enhance my skills, transition into a leadership role, and make a significant contribution to any organization I work with.",
  avatarUrl: "https://i.ibb.co/F6J79PY/avatar.jpg",
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
      degree: "Masters In Computer Applications",
      start: "2023",
      end: "2025",
    },
    {
      school: "Pune University",
      degree: "Bachelors In Computer Applications",
      start: "2019",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Freelancing Projects",
      link: "#",
      badges: ["Freelancer"],
      title: "Software Engineer",
      start: "Feb 2023",
      end: "Present",
      description: `
      - Project name: Ace Packaging - A minimalist CRM platform for Ace Packaging to manage their business workflows <br/>
          <div class="ml-5">
            • Developed a Customer Relationship Management (CRM) application to enhance client management and streamline workflow processes at Ace Packaging<br/>
            • Leveraged Next.js and Server Actions to optimize backend operations and improve data handling, resulting in a more efficient system.<br/>
            • Automated key business functions, including lead management, order tracking, and customer interactions, reducing manual workloads and increasing operational efficiency.<br/>
            • Created a modular architecture for the CRM application, allowing for easy scalability and adaptability as business requirements evolve.<br/>
            • Integrated a real-time notification system using Knock to enhance user engagement and provide instant updates within the CRM application.</br>
          </div>
    
      - Technologies: <br/>
          <div class="ml-5">
            • Nextjs 14 <br/>
            • Prisma ORM<br/>
            • TypeScript<br/>
            • React-hooks, React-Hook-Form </br>
            • REST API, Knockjs<br/>
            • Cloud: Postgres, AWS RDS, AWS EC2, AWS S3 Buckets <br/>
          </div>
      - Tools control: Git, Github, Git Actions, Prometheus, Grafana, Loki, Docker
      <br/>
      <br/>
      - Project name: GetMeDesign : A platform for designers to create portfolios.<br/>
      - Team size: 8<br/>
      - Responsibilities:<br/>
          <div class="ml-5">
            • Developed a comprehensive platform for Designing professionals. <br/>
            • Implementd JWT authentication to securely manage user sessions and implemented role-based authorization to provide fine-grained control over access to different features of the application, ensuring data security and flexibility. <br/>
            • Developed reusable react components for the platform.<br/>
          </div><br/>
      - Technologies:<br/>
          <div class="ml-5">
            • TypeScript<br/>
            • React, Vite, mongodb<br/>
            • Express, JWT, socket.io <br/>
            • Tools control: Git, Github<br/>
          </div>
      `,
    },

    {
      company: "Swalay",
      link: "https://www.swalay.talantoncore.in/",
      badges: ["Intern"],
      title: "Software Engineer",
      start: "May 2022",
      end: "Nov 2022",
      description: `
      - Responsibilities:<br/>
          <div class="ml-5">
            • Designed and developed APIs using Nodejs for integrating SwaLay’s platform with various third-party applications and services.<br/> 
            • Collaborated with team members to design and implement a comprehensive database infrastructure for SwaLay.<br/>
            • Develop and fix the application’s defect base on requirements<br/>
            • Contributed to the implementation of a CI/CD pipeline using GitHub Actions for the SwaLay music platform.<br/>
          </div>
          <br/>
      - Technologies: <br/>
          <div class="ml-5">
            • JavaScript, React, MERN Stack <br/>
            • Docker, Devops<br/>
          </div>
      - Tools control: Git
      <br/>
      `,
    },
  ],
  skills: [
    "Python",
    "Javascript",
    "React/Next.js",
    "MERN Stack",
    "Postgres",
    "MongoDB",
    "Langchain",
    "Django",
    "Flask",
    "FastAPI",
    "AWS",
    "Azure",
    "Git",
    "Docker",
    "Kubernetes",
  ],
} as const;
