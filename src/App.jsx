import './App.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Projectdisplay from "../src/components/Projectdisplay";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projectdisplay />} />
      </Routes>
    </>
  );
};

export default App;
