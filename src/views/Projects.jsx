import { ProjectList } from '../components/ProjectList'; 
import github from '../assets/githubLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div className="flex flex-col gap-24 p-8 text-white font-source">
      <h1 className="text-6xl text-center">Projects</h1>
      {ProjectList.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-8 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
        >
          {/* Video Section */}
          <div className="w-full">
            {project.video ? (
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-lg shadow-lg"
              ></video>
            ) : (
              <img
                src={project.image} // Make sure project.image exists in your data
                alt={`${project.name} thumbnail`}
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>

          {/* Project Details */}
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p> {/* Slightly lighter text */}
            
            {/* Frontend Link */}
            {project.gitHublink.front && (
              <a
                href={project.gitHublink.front}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 hover:underline"
              >
                <img src={github} alt="Frontend GitHub" className="w-[30px]" />
                <span>Frontend</span>
              </a>
            )}

            {/* Backend Link */}
            {project.gitHublink.back && (
              <a
                href={project.gitHublink.back}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 hover:underline"
              >
                <img src={github} alt="Backend GitHub" className="w-[30px]" />
                <span>Backend</span>
              </a>
            )}

            {/* Live Website Link */}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-yellow-600 hover:underline"
              >
                <FontAwesomeIcon icon={faGlobe} className="w-[30px]" />
                <span>Live Website</span>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
