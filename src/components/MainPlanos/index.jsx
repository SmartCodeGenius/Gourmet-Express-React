import styles from './MainPlanos.module.css'
import cereja from './cereja.svg'
import tomate from './tomate.svg'
import caixote from './caixote.svg'

export default function MainPlanos() {
  const planos = [{nome:'Plano Cereja', id:1, preco:35, selecionado:false, icone:cereja },
                  {nome:'Plano Tomate', id:2, preco:70, selecionado:false, icone:tomate }, 
                  {nome:'Plano Caixote', id:3, preco:105, selecionado:false, icone:caixote }];

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>Selecione o plano!</h1>
      <div className={styles.planosContainer}>
        {planos.map(plano => (
            <div className={styles.opcao} onClick={() => alert(plano.id)}>
            <h2>{plano.nome}</h2>
            <h1>R${plano.preco}</h1>
            <h3>por mês</h3>
            <img src={plano.icone} alt="" style={styles.iconeImagem}/>
            </div>
        ))}
      </div>
      <button className={styles.botao}>Confirmar assinatura</button>
    </section>
  )
}
