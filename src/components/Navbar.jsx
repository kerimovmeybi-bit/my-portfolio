import logo from '../assets/logo.png';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

function Navbar () {

    const [menuOpen, setMenuOpen] = useState(false);

    const { t, i18n } = useTranslation();

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
                        {t("home")}
                    </a>
                </li>
                <li>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        {t("about")}
                    </a>
                </li>
                <li>
                    <a href="#skills" onClick={() => setMenuOpen(false)}>
                        {t("skills")}
                    </a>
                </li>
                <li>
                    <a href="#experience" onClick={() => setMenuOpen(false)}>
                        {t("experience")}
                    </a>
                </li>
                <li>
                    <a href="#projects" onClick={() => setMenuOpen(false)}>
                        {t("projects")}
                    </a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        {t("contact")}
                    </a>
                </li>
            </ul>

            <div className="lang-switcher">
                <button onClick={() => i18n.changeLanguage("en")}
                >
                    EN
                </button>
                <button onClick={() => i18n.changeLanguage("ua")}
                >
                    UA
                </button>
            </div>
        </nav>
    );
}

export default Navbar;