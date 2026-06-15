import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
      <>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </>
    );
}

export default App;