import {FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import { useTranslation } from "react-i18next";

function Contact() {
    const { t, i18n } = useTranslation();

    return (
        <section id="contact" className="contact" data-aos="fade-up">
            <h2>{t("contactTitle")}</h2>

            <p>
                {t("contactText")}
            </p>

            <div className="contact-links">
                <a 
                    href="https://github.com/kerimovmeybi-bit"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub/>
                    GitHub
                </a>
                <a 
                    href="https://www.linkedin.com/in/meybi-kerimli-4287983a2/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin/>
                    LinkedIn
                </a>
                <a 
                    href="mailto:kerimovmeybi@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaEnvelope/>
                    {t("email")}
                </a>
            </div>
        </section>
    );
}

export default Contact;