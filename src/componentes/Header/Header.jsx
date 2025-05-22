import { useNavigate } from "react-router-dom";

import styles from "./Header.module.css";

function Header ({ children }) {
    const navegar = useNavigate();
    return (
        <header className={styles.header}>
            {children}
            <h1 className={styles.titulo}> Mi Portafolio </h1>
            <button className={styles.button} onClick={() => navegar("/")}>Inicio</button>
            <button className={styles.button} onClick={() => navegar("/curriculum")}>Curriculum</button>
            <button className={styles.button} onClick={() => navegar("/proyectos")}>Proyectos</button>
        </header>
    );
}

export default Header;