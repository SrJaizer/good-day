import styles from './page.module.css';
import React from 'react';

const Page = () => {
    const messages = [
        { name: "Josué", text: "Eu corri em frente ao parque central durante 30 minutos e melhorei meu tempo" },
        { name: "Ingrid", text: "Primeiro dia de dieta e exercícios" },
        { name: "Ortência", text: "A aula de hidroginástica foi contagiante 🏊‍♀️😍" },
        { name: "Alfredo", text: "O de hoje tá pago!!!" }
    ];

    return (
        <main className={styles.feedContainer}>
            <img src="/location-icon.svg" alt="Icone de localização" />
            <ul className={styles.messagesList}>
                {messages.map((message, index) => (
                    <li key={index} className={styles.messageCard}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnj2TWYskM8Or0ykoHKfKbf8YulsCWgTptlp1XdTjexw&s" alt="Imagem de perfil" className={styles.profileImage}/>
                        <div className={styles.messageSender}>
                            <h2>{message.name}</h2>
                            <div className={styles.messageText}>{message.text}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </main>
    );
};

export default Page;
