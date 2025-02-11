import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projects from './views/Projects';
import About from './views/About';
import Contact from './views/Contact';

const App = () => {
  return (
    <>
      <Home />
      <Navbar /> {/* Navbar appears after Home */}
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default App;
