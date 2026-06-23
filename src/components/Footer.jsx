import { useTranslation } from "react-i18next";

function Footer() {
    const { t, i18n } = useTranslation();

    return (
        <footer className="footer">
            <h3>Kerimli Meybi</h3>

            <p>{t("footerRole")}</p>

            <p>{t("footerBuilt")}</p>

            <small>
                © 2026 Kerimli Meybi. {t("footerRights")}
            </small>
        </footer>
    );
}

export default Footer;