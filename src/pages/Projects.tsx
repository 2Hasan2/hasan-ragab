import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Chat Application",
    category: "Web",
    description: "A real-time chat app using React and Redis.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web",
    description: "A personal portfolio site built with React and Tailwind CSS.",
  },
  {
    id: 3,
    title: "Design System",
    category: "UI",
    description: "A comprehensive UI design system with components and styles.",
  },
  {
    id: 4,
    title: "E-commerce Store",
    category: "Web",
    description: "A fully functional e-commerce application using MERN stack.",
  },
  {
    id: 5,
    title: "Landing Page",
    category: "UI",
    description: "A responsive landing page designed for a product launch.",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="h-screen flex flex-col items-center justify-center"
    >
      <h2 className="text-6xl font-bold text-theme1-light mb-6">Projects</h2>

      <div className="flex space-x-4 mb-6">
        {["All", "Web", "UI"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded ${
              activeCategory === category
                ? "bg-theme1-primary text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
