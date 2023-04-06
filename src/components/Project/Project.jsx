import './project.css';
import {Info} from '../../data.js'

const Project = () => {
  return (
    <div id="project">
        <video src="assets\video\background.mp4" autoPlay muted loop></video>
        <h2 id='project-heading'>Projects  <i className="fas fa-briefcase"></i></h2>
        <section id='projects'>
        {Info.map((val) => {
          return (
            <div className="project-card">
          <div className="project-image">
           <img src={val.image} alt={val.title} />
          </div>
          <div className="project-info">
           <h3 className="project-title">{val.title}</h3>
           <p className="project-description">{val.description}</p>
           <a href={val.url} className="project-link" target="_blank" rel="noopener noreferrer">Visit</a>
          </div>
        </div>
          )
        })}  
        </section>
    </div>
  );
};

export default Project;
