import styles from "./page.module.css";
import Link from "next/link";
import Calendar from "./components/Calendar/Calendar";

export default function Home() {
  return (
    <main>
      <Link href="/perfil" className={styles.userProfileButton}>
        Perfil de Usuário
      </Link>
      <Calendar />
      <Link href="/mensagem" className={styles.dailyMessageButton}>
        Mensagem Diária
      </Link>
    </main>
  );
}
