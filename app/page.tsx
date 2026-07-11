"use client";

import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Page() {
  return (
    <div
      className="flex space-x-3 justify-center items-center h-screen"
      suppressHydrationWarning
    >
      <Nav />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
