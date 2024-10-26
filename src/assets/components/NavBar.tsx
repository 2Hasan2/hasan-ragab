const Navbar = () => {
  return (
    <nav className="p-4 shadow-md z-50 bg-theme1-dark text-theme1-light flex items-center justify-between">
      <h1 className="text-xl font-semibold text-theme1-primary">Hasan Ragab</h1>

      <div className="flex space-x-8">
        <a
          href="#home"
          className="text-theme1-light hover:text-theme1-primary transition-colors duration-300"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-theme1-light hover:text-theme1-primary transition-colors duration-300"
        >
          About
        </a>
        <a
          href="#projects"
          className="text-theme1-light hover:text-theme1-primary transition-colors duration-300"
        >
          Projects
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
