import About from "../About/About"
import Contact from "../Contact/Contact"
import Home from "../Home/Home"
import Project from "../Project/Project"
import "./navbar.css"

function Navbar() {
  return (
    <>
    <header id="navbar">
            <h2 id="logo">Logo</h2>
            <nav id="nav">
              <ul>
                <a className="nav_link active" href="#home">Home<span></span></a>
                <a className="nav_link" href="#about">About me<span></span></a>
                <a className="nav_link" href="#project">Projects<span></span></a>
                <a className="nav_link" href="#contact">Contact<span></span></a>
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