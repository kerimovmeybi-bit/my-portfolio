function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Typescript",
        "React",
        "Git",
        "GitHub",
        "Node.js",
        "Express",
        "MongoDB",
    ];

    return (
        <section id="skills" className="skills" data-aos="fade-up">
            <h2>Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill} className="skill-card">
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;