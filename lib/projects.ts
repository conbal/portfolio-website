export type Project = {
  title: string;
  desc: string;
  techStack: string[];
  screenshot?: string;
  githubUrl?: string;
  alt: string;
};

export const projects: Project[] = [
  {
    title: "ADHD Food App",
    desc: "A mobile application that helps users manage food inventory and reduce food waste through expiration tracking, barcode scanning, and personalized meal recommendations. Designed and implemented secure user authentication, cloud-based data management, automated reminder notifications, and external API integrations to deliver a responsive, user-focused experience.",
    techStack: ["Flutter/Dart", "Firebase", "Flutter SDK", "Git"],
    screenshot: "/adhdcoversquare.png",
    alt: "Splash Screen of ADHD Food App",
  },
];

// {
//     title: "test name1",
//     desc: "test description",
//     techStack: ["java", "python", "githubb"],
//     screenshot: "/placeholder.png",
//     alt: "test alt",
//   },
//   {
//     title: "test name2",
//     desc: "test description",
//     techStack: ["java", "python", "githubb"],
//     screenshot: "/placeholder.png",
//     alt: "test alt",
//   },
