import "./about.css"

function About() {
  return (
    <div id="about">
      <div className="quote" data-aos="fade-up" data-aos-offset="200" data-aos-delay="100" data-aos-duration="1000"><q>The best way to predict the future is to invent it.</q>
      <span style={{color:'white',float:'right', fontSize:"1rem"}}>- Alan Kay</span>
      </div>

    <div id="info">

      <div className="about-me-image" data-aos="fade-left" data-aos-offset="200" data-aos-delay="100" data-aos-duration="3000">
        <img src="assets\images\me.png" alt="Me" className="floating-animation" />
      </div>

      <div className="about-text" data-aos="fade-right" data-aos-offset="200" data-aos-delay="100" data-aos-duration="2000">
        <h2>Greetings,</h2>
        <p>I am <em className="keywords">Mirza Aleem Abbas</em>, a recent graduate with a Bachelor's degree in Computer Science and Engineering (2023),
           achieving a noteworthy CGPA of <em className="keywords">7.9/10</em>. Specializing as a <em className="keywords">full-stack web developer</em>, 
           I bring experience in constructing web applications and proficiency in front-end development
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