import { TypeAnimation } from "react-type-animation";
import me from "../assets/me.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
    const { t, i18n } = useTranslation();

    return (
        <section id="home" className="hero">
            <span className="hero-greeting">{t("heroGreeting")}</span>

            <img 
                src={me}
                alt="Kerimli Meybi"
                className="hero-img"
            />

            <h1>
                 {t("heroTitle")} <span className="highlight">Kerimli Meybi</span>
            </h1>

            <h2>
                <TypeAnimation
                    sequence={[
                        "Junior Frontend Developer",
                        2000,
                        "React Enthusiast",
                        2000,
                        "Future Full-Stack Developer",
                        2000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="typing-text"
                />  
            </h2>

            <p>
                {t("heroDescription")}
            </p>

            <div className="hero-buttons">
                <a
                    href= "https://github.com/kerimovmeybi-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero-btn"
                >
                    GitHub
                </a>
                <a href="#contact" className="hero-btn">
                    {t("contactMe")}
                </a>
                <a
                    href="public/Kerimli_Meybulla.pdf"
                    download
                    className="hero-btn"
                >
                    {t("downloadResume")}
                </a>

            </div>
        </section>
    );
}

export default Hero;