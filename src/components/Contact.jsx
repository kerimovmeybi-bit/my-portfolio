function Contact() {
    return (
        <section id="contact" className="contact" data-aos="fade-up">
            <h2>Contact Me</h2>

            <p>
                Feel free to contact me through the links below.
            </p>

            <div className="contact-links">
                <a 
                    href="https://github.com/kerimovmeybi-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/meybi-kerimli-4287983a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a 
                    href="mailto:kerimovmeybi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Email
                </a>
            </div>
        </section>
    );
}

export default Contact;