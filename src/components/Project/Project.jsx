import "./project.css";
import { Info } from "../../data.js";

const Project = () => {
  return (
    <div id="project">
      <h2
        id="project-heading"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        Projects <i className="fas fa-briefcase"></i>
      </h2>
      <section
        id="projects"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="100"
        data-aos-duration="2000"
      >
        {Info.map((val) => {
          return (
            <a key={val.id} href={val.url} className="project-link">
              <div className="project-card">
                <h3 className="project-title">{val.title}</h3>
                <div className="project-image">
                  <img src={val.image} alt={val.title} />
                </div>
                <div className="project-info">
                  <p className="project-description">{val.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </section>
      <div className="quote2">"Dare to Dream, Dare to Build"</div>
    </div>
  );
};

export default Project;
