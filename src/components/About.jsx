import { useTranslation } from "react-i18next";

function About() {
    const { t, i18n} = useTranslation();

    return (
        <section id="about" className="about" data-aos="fade-up">
            <h2>{t("aboutTitle")}</h2>

            <p>
                {t("aboutText1")}
            </p>
            <p>
                {t("aboutText2")}
            </p>

            <p>
                {t("aboutText3")}
            </p>
        </section>
    );
}

export default About;