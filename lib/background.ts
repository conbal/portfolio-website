export type TimelineEvent = {
  date: string;
  title: string;
  desc?: string;
};

export const timeline: TimelineEvent[] = [
  {
    date: "2019-2022",
    title: "Tarrant County Community College",
    desc: "Completed an Associate of Arts",
  },
  {
    date: "2019-Present",
    title: "UPS",
    desc: "Working at a UPS warehouse",
  },
  {
    date: "2022-2025",
    title: "UT Arlington",
    desc: "Completed a Bachelors in Software Engineering",
  },
  { date: "Present", title: "Job Search" },
];
