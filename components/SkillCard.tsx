import { Skill } from "@/lib/skills";

export default function SkillCard({ name, icon }: Skill) {
  const Icon = icon;
  return (
    <div className="flex-col justify-items-center bg-blue-900 rounded-xl w-30 py-3 shadow-lg">
      <div className="pb-3">{Icon && <Icon size={48} />}</div>
      <div>{name}</div>
    </div>
  );
}
