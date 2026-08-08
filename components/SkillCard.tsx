import { Skill } from "@/lib/skills";

export default function SkillCard({ name, icon }: Skill) {
  const Icon = icon;
  return (
    <div>
      <div> {name} </div>
      <div> {Icon && <Icon />}</div>
    </div>
  );
}
