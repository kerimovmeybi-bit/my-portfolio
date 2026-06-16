function Projects() {
    const projects = [
        {
            title: "Task-Manager-Pro",
            description:
               "Task management application built with React. Users can create, edit and organize tasks.",
            technologies: ["React", "JavaScript", "CSS", "Typescript"], 
               github: "https://github.com/kerimovmeybi-bit/Task-Manager-Pro"
        },
        {
            title: "Portfolio Website",
            description:
                "Personal portfolio website created  with React and styled-components. Showcases my projects and skills.",
            technologies: ["React", "styled-components"],
            github: "https://github.com/kerimovmeybi-bit/my-portfolio"
        },
        {
            title: "Booking App",
            description:
            "Web application for booking services with a user-friendly interface built using React.",
            technologies: ["React", "JavaScript", "CSS", "Typescript"],
            github: "https://github.com/kerimovmeybi-bit/Booking-App"
        },
    ];

    return (
        <section id="projects" className="projects" data-aos="fade-up">
            <h2>Projects</h2>

            <div className="project-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <h3>{project.title}</h3>

                        <p>{project.description}</p>

                        <div className="tech-stack">    
                            {project.technologies.map((tech) => (
                                <span key={tech} className="tech-badge">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-btn"
                        >
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;