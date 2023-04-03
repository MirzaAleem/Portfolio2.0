import About from "../About/About"
import Home from "../Home/Home"
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
                <a className="nav_link" href="#">Projects<span></span></a>
                <a className="nav_link" href="#">Contact<span></span></a>
              </ul>
            </nav>
    </header>
    <Home id="home"/>
    <About id="about"/>
    </>
  )
}

export default Navbar