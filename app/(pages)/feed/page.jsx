import React from 'react';
import styles from './Page.module.css';

const Page = () => {
    const messages = [
        { name: "Josué", text: "Eu corri em frente ao parque central durante 30 minutos e melhorei meu tempo" },
        { name: "Ingrid", text: "Primeiro dia de dieta e exercícios" },
        { name: "Ortência", text: "A aula de hidroginástica foi contagiante 🏊‍♀️😍" },
        { name: "Alfredo", text: "O de hoje tá pago!!!" }
    ];

    return (
        <div className={styles.chatWindow}>
            <div className={styles.header}>Good Day</div>
            <ul className={styles.messagesList}>
                {messages.map((message, index) => (
                    <li key={index} className={styles.message}>
                        <div className={styles.messageSender}>{message.name}</div>
                        <div className={styles.messageText}>{message.text}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Page;
