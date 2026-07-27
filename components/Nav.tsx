export default function Nav() {
  return (
    <nav className="flex justify-center gap-9 py-6 z-50 fixed top-0 left-0 w-full h-20 text-2xl bg-blue-900 shadow-xl">
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  );
}
