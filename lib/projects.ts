export type Project = {
  title: string;
  desc: string;
  techStack: string[];
  screenshot?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    title: "ADHD Food App",
    desc: "A mobile application that helps users manage food inventory and reduce food waste through expiration tracking, barcode scanning, and personalized meal recommendations. Designed and implemented secure user authentication, cloud-based data management, automated reminder notifications, and external API integrations to deliver a responsive, user-focused experience.",
    techStack: [
      "Flutter/Dart",
      "Firebase (Authentication, Cloud Functions, Cloud Messaging)",
      "Flutter SDK",
      "Git",
    ],
    screenshot: "pic",
    githubUrl: "link",
  },
];
