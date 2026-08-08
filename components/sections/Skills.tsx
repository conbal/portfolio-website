import { langs, frameworks, tools } from "@/lib/skills";
import SkillCard from "@/components/SkillCard";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <h2 className="text-center text-4xl pb-4 ">Skills</h2>
      {/*languages section*/}
      <h3 className="text-center text-2xl">{langs.title}</h3>
      <div>
        {langs.skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
      {/*frameworks section*/}
      <h3 className="text-center text-2xl">{frameworks.title}</h3>
      <div>
        {frameworks.skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
      {/*tools section*/}
      <h3 className="text-center text-2xl">{tools.title}</h3>
      <div>
        {tools.skills.map((skill) => (
          <SkillCard key={skill.name} {...skill} />
        ))}
      </div>
    </section>
  );
}
