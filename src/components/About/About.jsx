import "./about.css"

function About() {
  return (
    <div id="about">
        <div className="about-text">
        <h2>Greetings,</h2>
        <p>My name is Mirza Aleem Abbas, and I am currently in the final semester of my B.Tech in Computer Science program.
           As an aspiring web developer and UI/UX developer, I have gained valuable knowledge in the field.
           I have a keen interest in creating visually appealing and user-friendly websites and applications, 
           and have honed my skills in front-end development. Throughout my academic journey, 
           I have actively sought out opportunities to expand my knowledge and skills, including participating 
           in various coding challenges and hackathons.
        </p>
        </div>
        <div className="about-me-image">
        <img src="assets\images\me.png" alt="Me" className="floating-animation" />
      </div>
    </div>
  )
}

export default About