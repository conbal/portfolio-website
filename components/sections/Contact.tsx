import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-blue-900 shadow-lg">
      <h2 className="text-center text-4xl pt-4 ">Contact</h2>
      <p className="text-center text-lg p-1">
        If you would like to get in touch with me, feel free to reach out! Here
        are my GitHub and LinkedIn.
      </p>
      <div className="flex justify-center gap-4 pb-4">
        <a
          href="https://github.com/conbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub size={40} />
        </a>
        <a
          href="https://linkedin.com/in/conbal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
    </section>
  );
}
