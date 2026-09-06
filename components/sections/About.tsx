import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 pt-25 py-10 mx-auto max-w-5xl">
      <h2 className="text-center text-4xl pb-4 ">Connor Baldwin</h2>
      <div className="flex justify-center gap-7 bg-blue-900 rounded-4xl shadow-lg py-7">
        <Image
          src="/connor.png"
          width={200}
          height={200}
          alt="Picture of Connor Smiling Outside"
          className="rounded-full shrink-0 shadow-2xl  w-50 h-50 object-cover object-top"
        />
        <p className="text-lg max-w-prose">
          Hey! I&apos;m Connor. I just finished my Software Engineering degree
          at UT Arlington, a degree that took a bit longer than I initially
          expected, mostly because I spent the last 6 years also working at UPS
          and trying to take it easy. Anyway, I enjoy putting a system together
          bit by bit, understanding more as I go until it becomes a finished
          product that I can be proud of and look back on fondly. I want to find
          a role in full-stack development and software engineering that allows
          me to achieve that feeling over and over.
        </p>
      </div>
    </section>
  );
}
