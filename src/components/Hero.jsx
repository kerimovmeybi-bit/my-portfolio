function Hero() {
    return (
        <section id="home" className="hero">
            <h1> Hello, I'm Kerimli Meybi!</h1>

            <h2> Junior Frontend Developer</h2>

            <p>
                I'm learning React and web development.
                I'm looking for my first job in IT and creating interesting projects.
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
            </div>
        </section>
    );
}

export default Hero;