'use client'
import { useState } from 'react';
import styles from "./Calendar.module.css";
import Link from "next/link";
import { getDaysInCalendar } from "@/app/utils/getDaysInCalendar.js";

// Componente do cliente marcado com 'use client'
export default function Calendar() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const formatedMonth = today.toLocaleString("pt-BR", { month: "long" });

  const { prevMonthDays, monthDays, nextMonthDays } = getDaysInCalendar(currentYear, currentMonth);
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  const [address, setAddress] = useState('');

  const locateCurrentAddress = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18`);
        const data = await response.json();
        setAddress(`Endereço atual: ${data.display_name}`);
      }, (error) => {
        console.error("Erro ao obter a localização: ", error);
      });
    } else {
      console.error('Geolocalização não é suportada neste navegador.');
    }
  };

  return (
    <div className={styles.calendar}>
      <h1>
        {formatedMonth} de {currentYear}
      </h1>
      <button onClick={locateCurrentAddress}>Localizar meu Endereço Atual</button>
      <div>{address}</div>

      <div className={styles.weekdays}>
        {weekdays.map((weekday, index) => (
          <div key={index} className={styles.weekday}>{weekday}</div>
        ))}
      </div>

      <div className={styles.month}>
        {prevMonthDays.map((day, index) => (
          <div key={`prev-${index}`} className={styles.prevMonthDay}>{day.getDate()}</div>
        ))}
        {monthDays.map((day, index) => (
          day.getDate() === today.getDate() ? (
            <Link href="/bem-estar-estudantil" key={index} className={`${styles.monthDay} ${styles.today}`}>
              {day.getDate()}
            </Link>
          ) : (
            <div key={index} className={styles.monthDay}>{day.getDate()}</div>
          )
        ))}
        {nextMonthDays.map((day, index) => (
          <div key={`next-${index}`} className={styles.nextMonthDay}>{day.getDate()}</div>
        ))}
      </div>
    </div>
  );
}
