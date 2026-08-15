import { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiC,
  SiHtml5,
  SiNodedotjs,
  SiCss,
  SiGithub,
  SiPostgresql,
  SiFirebase,
  SiJunit5,
  SiLinux,
  SiVercel,
} from "react-icons/si";
import { FaJava, FaPython } from "react-icons/fa";
import { TbSql, TbApi } from "react-icons/tb";
import { PiFileCpp } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";

export type Skill = {
  name: string;
  icon?: IconType;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const langs: SkillCategory = {
  title: "Languages",
  skills: [
    { name: "Java", icon: FaJava },
    { name: "Python", icon: FaPython },
    { name: "TypeScript", icon: SiTypescript },
    { name: "SQL", icon: TbSql },
    { name: "C++", icon: PiFileCpp },
    { name: "C", icon: SiC },
    { name: "HTML/CSS", icon: SiHtml5 },
  ],
};

export const frameworks: SkillCategory = {
  title: "Frameworks & Libraries",
  skills: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "CSS Modules", icon: SiCss },
  ],
};

export const tools: SkillCategory = {
  title: "Tools & Platforms",
  skills: [
    { name: "Git", icon: SiGithub },
    { name: "REST APIs", icon: TbApi },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Firestore", icon: SiFirebase },
    { name: "JUnit", icon: SiJunit5 },
    { name: "Linux", icon: SiLinux },
    { name: "Vercel", icon: SiVercel },
  ],
};
