import bookingImg from "../assets/Booking-app.png";
import taskManagerImg from "../assets/Task-manager.png";
import hiLegalImg from "../assets/HiLegal.png";

function Projects() {
    const projects = [
        {
            title: "Task Manager Pro",
            image: taskManagerImg,
            description:
               "Task management application built with React. Users can create, edit and organize tasks.",
            technologies: ["React", "JavaScript", "CSS", "Typescript", "Vite"], 
               github: "https://github.com/kerimovmeybi-bit/Task-Manager-Pro",
               demo: "https://task-manager-pro-ng4j.vercel.app/"
        },
        {
            title: "HiLegal website",
            image: hiLegalImg,
            description:
                "A responsive website for a law firm, showcasing their services and team members.",
            technologies: ["HTML", "CSS", "SCSS", "JavaScript"],
            github: "https://github.com/kerimovmeybi-bit/HiLegal",
            demo: "https://hi-legal.vercel.app/"
        },
        {
            title: "Booking App",
            image: bookingImg,
            description:
            "Web application for booking services with a user-friendly interface built using React.",
            technologies: ["React", "JavaScript", "CSS", "Typescript", "Vite"],
            github: "https://github.com/kerimovmeybi-bit/Booking-App",
            demo: "https://booking-app-seven-bice-79.vercel.app/"
        },
    ];

    return (
        <section id="projects" className="projects" data-aos="fade-up">
            <h2>Projects</h2>

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
                                GitHub
                            </a>

                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-btn"
                                >
                                    Live Demo
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