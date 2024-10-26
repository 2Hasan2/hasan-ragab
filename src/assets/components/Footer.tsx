import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-theme1-secondary text-theme1-light py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4">Contact Me</h2>
        <div className="flex space-x-6 mb-4">
          <a href="mailto:hr145310@gmail.com" className="flex items-center">
            <Mail className="mr-2" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/2Hasan2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Github className="mr-2" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-ragab-3452b927a"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Linkedin className="mr-2" />
            <span>LinkedIn</span>
          </a>
        </div>
        <p className="text-sm opacity-75">
          © {new Date().getFullYear()} Hasan Mohamed Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
