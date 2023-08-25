import logo from './logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Logo da Gourmet Express"/>
        <ul className={styles.containerNavbar}>
            <a href="https://github.com/ArthurOReis" className={styles.link}>Início</a>
            <div className={styles.barraNavbar}></div>
            <a href="https://github.com/NicolasSNichnig" className={styles.link}>Planos</a>
            <div className={styles.barraNavbar}></div>
            <a href="https://github.com/PenRoseRubix" className={styles.link}>Quem somos</a>
            <div className={styles.barraNavbar}></div>
            <a href="https://github.com/HeitorWestphal" className={styles.link}>Suporte</a>
            <div className={styles.barraNavbar}></div>
            <a className={styles.entrar} href="https://github.com/SmartCodeGenius">Entrar</a>
        </ul>
    </nav>
  );
}