import { ProjectList } from '../components/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {


  
  return (
    <section id="projects" className="flex flex-col gap-24 p-8 text-white font-source">
      <div className='flex flex-col justify-center items-center gap-2'>
              <h1 className='mt-8 text-8xl text-white text-center'>Projects</h1>
              <hr className="w-1/2 border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
          </div>
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
            ) : project.image ? ( 
              <img
                src={project.image} 
                alt={`${project.name} thumbnail`}
                className="w-full rounded-lg shadow-lg"
              />
            ) : null}
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
                <img src="/githubLogo.png" alt="GitHub Logo" className="w-[30px]" />
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
                <img src="/githubLogo.png" alt="GitHub Logo" className="w-[30px]" />
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
    </section>
  );
};

export default Projects;
