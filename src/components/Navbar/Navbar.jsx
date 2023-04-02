import "./navbar.css"

function Navbar() {
  return (
    <header id="navbar">
            <h2 id="logo">Logo</h2>
            <nav id="nav">
                <a className="nav_link active" href="#">Homes<span></span></a>
                <a className="nav_link" href="#">About<span></span></a>
                <a className="nav_link" href="#">Projects<span></span></a>
                <a className="nav_link" href="#">Contact<span></span></a>
            </nav>
    </header>
  )
}

export default Navbar