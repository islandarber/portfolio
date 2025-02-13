import github from '../assets/githubLogo.png';
import linkedin from '../assets/linkedIn.png';
import arrow from '../assets/arrowDown.png';  

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-white py-8 text-center font-source">
      <a href="#home"><img src={arrow} alt="arrow" className="w-10 h-10 bg-gray-600 rounded-md absolute -top-5 left-1/2 transform -translate-x-1/2 transition-transform duration-300 hover:scale-110" /></a>
       <div className="container mx-auto">
        <div className="flex justify-center space-x-4 mb-2">
          <a href="https://github.com/islandarber" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </a>
          <a href="https://www.linkedin.com/in/christina-vekri/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="w-8 h-8 transition-transform duration-300 hover:scale-110" />
          </a>
        </div>
          <p className="text-xs">&copy; {new Date().getFullYear()} Christina Vekri</p>
      </div>
    </footer>
  );
};

export default Footer;
