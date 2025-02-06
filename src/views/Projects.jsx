import Navbar from '../components/Navbar';
import { ProjectList } from '../components/ProjectList';

const Projects = () => {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen gap-2 text-white font-source" style={{ position: "relative", zIndex: 1 }}>
            <Navbar />
            <div className="flex flex-col justify-center items-center gap-2">
                {ProjectList.map((project, index) => (
                    <div key={index} className="flex flex-col justify-center items-center gap-2">
                        <h1 className="text-5xl">{project.title}</h1>
                        <p>{project.description}</p>
                        <img src={project.image} alt={project.title} className="w-96 rounded-lg" />
                        <video src={project.video} controls className="w-96 rounded-lg"></video>
                        <a href={project.gitHublink.front} target="_blank" rel="noreferrer" className="text-blue-400">Frontend GitHub</a>
                        <a href={project.gitHublink.back} target="_blank" rel="noreferrer" className="text-blue-400">Backend GitHub</a>
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="text-blue-400">Live Link</a>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Projects;