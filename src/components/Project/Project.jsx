import './project.css';
import {Info} from '../../data.js'

const Project = () => {
  return (
    <div id="project">
        <h2 id='project-heading'>Projects  <i className="fas fa-briefcase"></i></h2>
        <section id='projects'>
        {Info.map((val) => {
          return (
            <a href={val.url} className="project-link">
              <div className="project-card">
                <div className="project-image">
                  <img src={val.image} alt={val.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{val.title}</h3>
                  <p className="project-description">{val.description}</p>
                </div>
              </div>
            </a>
          )
        })}  
        </section>
    </div>
  );
};

export default Project;
