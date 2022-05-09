
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from "./components/Navbar/Navbar";
import Projects from './components/Projects/Projects';

function App() {
  return (
    //Import navbar from components
    <div>
    <Navbar />
     <Hero />
     <About />
     <Projects />
     <Contact />
     <Footer />
     </div>
  )
}

export default App;
