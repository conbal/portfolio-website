import Nav from "@/components/Nav";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Background from "@/components/sections/Background";

export default function Page() {
  return (
    <>
      <Nav />
      <main className="bg-blue-950">
        <About />
        <Projects />
        <Skills />
        <Background />
        <Contact />
      </main>
    </>
  );
}
