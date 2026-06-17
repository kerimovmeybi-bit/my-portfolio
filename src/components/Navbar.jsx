import logo from '../assets/logo.png';

function Navbar () {
    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                <img src={logo} alt="MK Logo"/>
            </a>

            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;