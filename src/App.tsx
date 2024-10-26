import Navbar from "./assets/components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./assets/components/Footer";

const App = () => {
  return (
    <div className="bg-theme1-dark">
      <Navbar />
      <div>
        <Home />
        <About />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default App;
