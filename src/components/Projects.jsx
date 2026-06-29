import bookingImg from "../assets/Booking-app.png";
import taskManagerImg from "../assets/Task-manager.png";
import hiLegalImg from "../assets/HiLegal.png";
import ecommerceImg from "../assets/ecommerce-store.png"
import { useTranslation } from "react-i18next";

function Projects() {
    const { t, i18n } = useTranslation();

    const projects = [
        {
            title: "E-Commerce Store",
            image: ecommerceImg,
            description: t("ecommerceDesc"),
            technologies: ["React","TypeScript","Redux Toolkit","React Router","MUI","Vite"],
            github: "https://github.com/kerimovmeybi-bit/ecommerce-store",
            demo: "https://ecommerce-store-k3sk.vercel.app"
        },
        {
            title: "Task Manager Pro",
            image: taskManagerImg,
            description: t("taskManagerDesc"),
            technologies: ["React", "JavaScript", "CSS", "Typescript", "Vite"], 
               github: "https://github.com/kerimovmeybi-bit/Task-Manager-Pro",
               demo: "https://task-manager-pro-ng4j.vercel.app/"
        },
        {
            title: "Booking App",
            image: bookingImg,
            description: t("bookingDesc"),
            technologies: ["React", "JavaScript", "CSS", "Typescript", "Vite"],
            github: "https://github.com/kerimovmeybi-bit/Booking-App",
            demo: "https://booking-app-seven-bice-79.vercel.app/"
        },
        {
            title: "HiLegal website",
            image: hiLegalImg,
            description: t("hiLegalDesc"),
            technologies: ["HTML", "CSS", "SCSS", "JavaScript"],
            github: "https://github.com/kerimovmeybi-bit/HiLegal",
            demo: "https://hi-legal.vercel.app/"
        },
    ];

    return (
        <section id="projects" className="projects" data-aos="fade-up">
            <h2>{t("projectsTitle")}</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">

                        <img 
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />

                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-stack">    
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-btn"
                            >
                                {t("githubBtn")}
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn"
                                >
                                    {t("demoBtn")}
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;