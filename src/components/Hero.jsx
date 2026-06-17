import { TypeAnimation } from "react-type-animation";
import me from "../assets/me.jpg";

function Hero() {
    return (
        <section id="home" className="hero">
            <span className="hero-greeting">Welcome to my portfolio!</span>

            <img 
                src={me}
                alt="Kerimli Meybi"
                className="hero-img"
            />

            <h1>
                 Hello, I'm <span className="highlight">Kerimli Meybi</span>
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
                I'm learning React and web development.
                I'm looking for my first job in IT and creating interesting projects.
                Passionate about building modern, responsive, and user-friendly web
                applications using React and JavaScript.
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
                    Contact Me
                </a>
                <a
                    href="public/Kerimli_Meybulla.pdf"
                    download
                    className="hero-btn"
                >
                    Download Resume
                </a>

            </div>
        </section>
    );
}

export default Hero;