import Navbar from "./assets/components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Footer from "./assets/components/Footer";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <div className="bg-theme1-dark">
      <Helmet>
        <title>hasan ragab</title>
        <meta name="description" content="hasan ragab web dev" />
        <meta name="keywords" content="developer, hasan, ragab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hasan-ragab.vercel.app/" />
      </Helmet>
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
