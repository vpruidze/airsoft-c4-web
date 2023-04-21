import React, { useContext } from 'react';
import { TimerContext } from '../context/TimerProvider';
import timerBomb from '../images/timer-bomb.webp';
import style from '../styles/Bomb.module.css';

export default function Bomb() {
  const { display } = useContext(TimerContext);

  return (
    <section className={style.bomb}>
      <img
        src={timerBomb}
        alt="Dynamite with timer."
      />
      <div className={style.reflex} />
      <div className={style.sevenSeg}>
        <p>{display}</p>
      </div>
    </section>
  );
}
