import { TimelineEvent } from "@/lib/background";
export default function TimelineItem({ date, title, desc }: TimelineEvent) {
  return (
    <div className="relative border-l-5 border-blue-500 pl-4 py-5">
      <div className="absolute -left-2.5 top-6.5 rounded-full w-4 h-4 bg-blue-500"></div>
      <div className="text-xl font-bold">{date}</div>
      <h3>{title}</h3>
      {desc && <div>{desc}</div>}
    </div>
  );
}
