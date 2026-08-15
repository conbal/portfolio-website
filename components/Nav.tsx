export default function Nav() {
  return (
    <nav className="flex justify-center gap-9 py-6 z-50 fixed top-0 left-0 w-full h-20 text-2xl bg-blue-900 shadow-2xl">
      <a href="#about" className="hover:text-sky-500">
        About
      </a>
      <a href="#projects" className="hover:text-sky-500">
        Projects
      </a>
      <a href="#skills" className="hover:text-sky-500">
        Skills
      </a>
      <a href="#background" className="hover:text-sky-500">
        Background
      </a>
      <a href="#contact" className="hover:text-sky-500">
        Contact
      </a>
    </nav>
  );
}
