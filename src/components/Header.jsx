/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import { AiFillSound } from 'react-icons/ai';
import { MdDoNotDisturb } from 'react-icons/md';
import { TimerContext } from '../context/TimerProvider';
import style from '../styles/Header.module.css';

export default function Header() {
  const { opac, setOpac } = useContext(TimerContext);

  const handleSoundOption = () => {
    if (opac === 100) setOpac(0);
    else setOpac(100);
  };

  return (
    <header className={style.header}>
      <button type="button" onClick={handleSoundOption}>
        <AiFillSound />
        <MdDoNotDisturb style={{ opacity: opac }} />
      </button>
      <h1>
        🧨 Bomb O'Clock ⏱️
      </h1>
    </header>
  );
}
