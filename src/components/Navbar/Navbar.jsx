import About from "../About/About"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Project from "../Project/Project"
import "./navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Navbar() {

  return (
    <>
    <header id="navbar">
      <h2 id="logo">
        <img src="assets\images\Logo.svg" alt="" />
      </h2>
      <nav id="nav">
        <ul>
          <a className="nav_link active" href="#home">
            Home<span></span>
          </a>
          <a className="nav_link" href="#about">
            About<span></span>
          </a>
          <a className="nav_link" href="#project">
            Projects<span></span>
          </a>
          <a className="nav_link" href="#contact">
            Contact<span></span>
          </a>
        </ul>
      </nav>
    </header>
    <Home id="home"/>
    <About id="about"/>
    <Project id="project"/>
    <Contact id='contact'/>
    </>
  )
}

export default Navbar