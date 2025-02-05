import {Projects} from '../components/Projects';

const Projectdisplay = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {Projects.map((project, index) => (
        <div key={index} className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-montserrat font-bold text-gray-900">{project.title}</h1>
          <p className="text-lg font-montserrat text-gray-900">{project.description}</p>
          <img src={project.image} alt={project.title} className="h-96 w-96" />
          <video 
          src={project.video} 
          controls
          autoPlay
          className="h-96 w-96" />
          <a href={project.gitHublink.front} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500 transition-all duration-300">Frontend GitHub</a>
          <a href={project.gitHublink.back} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500 transition-all duration-300">Backend GitHub</a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-500 transition-all duration-300">Live Link</a>
        </div>
      ))}
    </div>
  );
};

export default Projectdisplay;