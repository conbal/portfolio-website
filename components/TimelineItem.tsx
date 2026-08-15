import { TimelineEvent } from "@/lib/background";
export default function TimelineItem({ date, title, desc }: TimelineEvent) {
  return (
    <div>
      <div>{date}</div>
      <h3>{title}</h3>
      {desc && <div>{desc}</div>}
    </div>
  );
}
