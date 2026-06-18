import logo from '../assets/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <a href="#home" className="logo">
                <img src={logo} alt="Logo" />
            </a>

            <div
                className="burger"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        Skills
                    </a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>
                        Experience
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        Contact
                    </a>
                </li>
            </ul>
            </nav>
    );
}

export default Navbar;