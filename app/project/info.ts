export const projects = [
  {
    title: "Beast CRM",
    category: "Full-stack CRM Platform",
    description:
      "A CRM system designed to manage leads, customer data, follow-ups, and sales workflows through a clean and practical dashboard experience.",
    points: [
      "Built lead and customer management modules with structured backend APIs.",
      "Designed dashboard-focused interfaces for tracking business data and actions.",
      "Created scalable database models for managing CRM entities efficiently.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    image: "/crmss.png",
    github: "#",
    live: "#",
  },
  {
    title: "Todo App",
    category: "Full-stack Productivity App",
    description:
      "A production-style todo application focused on task management, authentication, Docker setup, and deployment-oriented workflows.",
    points: [
      "Developed complete task CRUD functionality with a clean full-stack structure.",
      "Dockerized the application for consistent local and deployment environments.",
      "Configured CI/CD workflow using GitHub Actions with cloud deployment concepts.",
    ],
    tech: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "AWS",
    ],
    image: "/projects/todo-app.png",
    github: "#",
    live: "#",
  },
  {
    title: "Nucleus",
    category: "AI Chat Application",
    description:
      "A ChatGPT-style application using Gemini API for context-aware AI responses with a modern conversational interface.",
    points: [
      "Integrated Gemini API to generate AI-powered responses from user prompts.",
      "Built a clean chat interface with reusable frontend components.",
      "Handled backend API flow for prompt processing and response delivery.",
    ],
    tech: ["React", "Node.js", "Express", "Gemini API", "Material UI"],
    image: "/projects/nucleus.png",
    github: "#",
    live: "#",
  },
];
