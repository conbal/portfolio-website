import { timeline } from "@/lib/background";
import TimelineItem from "@/components/TimelineItem";

export default function Background() {
  return (
    <section id="background" className="scroll-mt-20 pb-10">
      <h2 className="text-center text-4xl pb-4 ">Background</h2>
      <div className="flex flex-col max-w-sm mx-auto">
        {timeline.map((event) => (
          <TimelineItem {...event} key={event.title} />
        ))}
      </div>
    </section>
  );
}
