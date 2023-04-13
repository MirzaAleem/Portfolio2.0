import "./about.css"

function About() {
  return (
    <div id="about">
      <div className="quote" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"><q>Death is the ultimate reminder that each moment of life is a precious gift,
         and it is up to us to make the most of it.</q>
      </div>

    <div id="info">

      <div className="about-me-image" data-aos="fade-left" data-aos-offset="200" data-aos-delay="100" data-aos-duration="3000">
        <img src="assets\images\me.png" alt="Me" className="floating-animation" />
      </div>

      <div className="about-text" data-aos="fade-right" data-aos-offset="200" data-aos-delay="100" data-aos-duration="2000">
        <h2>Greetings,</h2>
        <p>My name is <em className="keywords">Mirza Aleem Abbas</em>, and I am currently in the final semester of my B.Tech in Computer Science program.
           As an aspiring web developer and UI/UX developer, I have gained valuable knowledge in the field.
        </p>
      </div>

    </div>

    <section className="techStack" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000">
  <h2>Tech Stack &lt;/&gt;</h2>
  <ul className="techList">
    <li>
      <i className="fab fa-html5"></i>
      <span>HTML</span>
    </li>
    <li>
      <i className="fab fa-css3-alt"></i>
      <span>CSS</span>
    </li>
    <li>
      <i className="fab fa-bootstrap"></i>
      <span>Bootstrap</span>
    </li>
    <li>
      <i className="fab fa-js-square"></i>
      <span>JavaScript</span>
    </li>
    <li>
      <i className="fab fa-react"></i>
      <span>React</span>
    </li>
    <li>
      <i className="fas fa-layer-group"></i>
      <span>Material UI</span>
    </li>
    <li>
      <i className="fab fa-node"></i>
      <span>Node.js</span>
    </li>
    <li>
      <i className="fas fa-exchange-alt"></i>
      <span>Express.js</span>
    </li><li>
      <i className="fab fa-git"></i>
      <span>Git</span>
    </li>
    <li>
      <i className="fas fa-question"></i>
      <span>Coming Soon</span>
    </li>
  </ul>
</section>


    </div>
  )
}

export default About