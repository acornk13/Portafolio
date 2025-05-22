import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.texto}>Linkedin</p>
            <p className={styles.texto}>correo@gmail.com</p>
            <p className={styles.texto}>Github</p>
        </footer>
    )
}

export default Footer;