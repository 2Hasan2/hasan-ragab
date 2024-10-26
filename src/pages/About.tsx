import { useState } from "react";
import sleep from "@/assets/svg/sleep.svg";
import doodle_items from "@/assets/svg/doodle-items.svg";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="about" className="h-screen flex items-center justify-center">
      <div className="p-6 max-w-md w-full">
        <p className="text-6xl gap-4 flex font-bold text-theme1-light">
          <p>About</p>
          <p className="text-theme1-primary">me</p>
        </p>
        <p className="text-lg gap-4 text-theme1-light opacity-75">
          I'm Hasan Mohamed Hasan, a student in Communications and Computer
          Engineering at El Shorouk Academy. I have experience in C, Python,
          JavaScript, TypeScript, and React, and I'm currently learning C++.
          {isExpanded && (
            <>
              {" "}
              I'm developing a chat application using Redis and
              PostgreSQL/Cassandra, with a frontend built using React, Vite,
              TypeScript, Zustand, Tailwind CSS, and Vitest. I'm also working on
              a portfolio website themed in red and black with Tailwind CSS.
            </>
          )}
        </p>
        <button
          onClick={handleToggle}
          className="text-theme1-primary underline mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      <div className="relative">
        <img src={doodle_items} alt="doodle items" />
        <img className="absolute top-0" src={sleep} alt="sleep" />
      </div>
    </section>
  );
};

export default About;
