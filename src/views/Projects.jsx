import { ProjectList } from '../components/ProjectList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col gap-16 px-4 md:px-8 py-12 pt-16 text-white font-source">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
        <hr className="w-3/4 md:w-1/2 border-0 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent" />
      </div>

      <div className="flex flex-col gap-16">
        {ProjectList.map((project, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Media Section */}
            <div className="w-full lg:w-1/2">
              {project.video ? (
                <video src={project.video} autoPlay loop muted playsInline className="w-full rounded-lg shadow-lg"></video>
              ) : project.image ? (
                <img src={project.image} alt={`${project.name} thumbnail`} className="w-full rounded-lg shadow-lg" />
              ) : null}
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
              <p className="text-gray-300 text-sm md:text-base">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                {/* Frontend Link */}
                {project.gitHublink.front && (
                  <a href={project.gitHublink.front} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:underline">
                    <img src="/githubLogo.png" alt="GitHub Logo" className="w-6" />
                    <span>Frontend</span>
                  </a>
                )}

                {/* Backend Link */}
                {project.gitHublink.back && (
                  <a href={project.gitHublink.back} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-500 hover:underline">
                    <img src="/githubLogo.png" alt="GitHub Logo" className="w-6" />
                    <span>Backend</span>
                  </a>
                )}

                {/* Live Website Link */}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-yellow-500 hover:underline">
                    <FontAwesomeIcon icon={faGlobe} className="w-5" />
                    <span>Live Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
