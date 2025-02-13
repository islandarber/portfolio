import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
