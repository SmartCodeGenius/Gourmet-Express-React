import NavBarLink from '../NavBarLink';
import logo from './logo.png';
import styles from './Navbar.module.css';

export default function Navbar() {
  const opcoes = [
    {nome: 'Início', url: '/'},
    {nome: 'Planos', url: 'planos'},
    {nome: 'Quem somos', url: 'quemsomos'},
    {nome: 'Suporte', url: 'suporte'},
  ];

  return (
    <nav className={styles.navbar}>
        <img src={logo} className={styles.logo} alt="Logo da Gourmet Express"/>
        <ul className={styles.containerNavbar}>

        {opcoes.map((opcao) => (
          <NavBarLink link={opcao} estiloLink={styles.link} estiloBarra={styles.barraNavbar}/>
        ))}
            <a className={styles.entrar} href="https://github.com/SmartCodeGenius">Entrar</a>
        </ul>
    </nav>
  );
}