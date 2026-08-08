export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export type Skill = {
  name: string;
  icon: string;
};

export const lang: SkillCategory = {
  title: "Langauges",
  skills: [
    { name: "Java", icon: "..." },
    { name: "Python", icon: "..." },
    { name: "TypeScript", icon: "..." },
    { name: "SQL", icon: "..." },
    { name: "C++", icon: "..." },
    { name: "C", icon: "..." },
    { name: "HTML/CSS", icon: "..." },
  ],
};

export const frameworks: SkillCategory = {
  title: "Frameworks & Libraries",
  skills: [
    { name: "React", icon: "..." },
    { name: "Next.js", icon: "..." },
    { name: "Node.js", icon: "..." },
    { name: "Tailwind CSS", icon: "..." },
    { name: "CSS Modules", icon: "..." },
  ],
};

export const tools: SkillCategory = {
  title: "Tools & Platforms",
  skills: [
    { name: "Git", icon: "..." },
    { name: "REST APIs", icon: "..." },
    { name: "PostgreSQL", icon: "..." },
    { name: "Firestore", icon: "..." },
    { name: "JUnit", icon: "..." },
    { name: "Linux", icon: "..." },
    { name: "Vercel", icon: "..." },
  ],
};
