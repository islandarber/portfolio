import './App.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projects from './views/Projects';

const App = () => {
  return (
    <>
      <Home />
      <Navbar /> {/* Navbar appears after Home */}
      <Projects />
    </>
  );
};

export default App;
