import { useTranslation } from "react-i18next";

function Experience() {
    const { t, i18n } = useTranslation();

    return (
        <section id="experience" className="experience" data-aos="fade-up">
            <h2>{t("experienceTitle")}</h2>

            <div className="experience-card">
                <div className="experience-header">
                    <h3>{t("experienceRole")}</h3>
                    <span>{t("experiencePeriod")}</span>
                </div>

                <p className="experience-subtitle">
                    {t("experienceSubtitle")}
                </p>

                <ul>
                    <li>{t("exp1")}</li>
                    <li>{t("exp2")}</li>
                    <li>{t("exp3")}</li>
                    <li>{t("exp4")}</li>
                    <li>{t("exp5")}</li>
                </ul>
            </div>
        </section>
    );
}

export default Experience;