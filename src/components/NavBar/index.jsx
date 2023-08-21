import logo from './logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  
  const opcoes = ["Início", "Planos", "Quem somos", "Suporte"];
  
  return (
    <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Logo da Gourmet Express"/>
        <ul className={styles.containerNavbar}>
            {opcoes.map(opcao => (
                <>
                    <a href="https://github.com/SmartCodeGenius" key={opcao.indexOf()} className={styles.link}>{opcao}</a>
                    <div className={styles.barraNavbar}></div>
                </>
            ))}
            <a className={styles.entrar}>Entrar</a>
        </ul>
    </nav>
  );
}