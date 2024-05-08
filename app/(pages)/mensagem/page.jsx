import styles from "./page.module.css";

const motivationalMessages = [
  "Supere seus limites hoje!",
  "Cada passo conta, continue!",
  "Vamos lá, você consegue mais um!",
  "Mantenha o foco e siga em frente!",
  "A determinação de hoje é o sucesso de amanhã!",
  "Não pare até se sentir orgulhoso!",
  "Lembre-se: persistência é a chave!",
  "Faça do exercício seu hábito!",
  "Força, foco e fé para mover montanhas!"
];

export default function Message() {
  const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
  const message = motivationalMessages[randomIndex];

  return <main className={styles.main}><p className={styles.message}>{message}</p></main>;
}