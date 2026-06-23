import { useTranslation } from "react-i18next";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Git",
        "GitHub",
        "Node.js",
        "Express",
        "MongoDB",
    ];

    const { t, i18n } = useTranslation();
    
    return (
        <section id="skills" className="skills" data-aos="fade-up">
            <h2>{t("skillsTitle")}</h2>

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