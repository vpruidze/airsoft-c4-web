/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import './App.css';
import Bomb from './components/Bomb';
import BombButtons from './components/BombButtons';
import Header from './components/Header';
import Defuse from './components/Defuse'

export default function App() {
  const [bombStarted, setBombStarted] = useState(false);

  function handleOnBombStarted(event) {
    setBombStarted(event);
  }

  return (
    <>
      <Header />
      <main className="App" id="main">
        <Bomb />
        <BombButtons onBombStarted = {handleOnBombStarted}/>
      </main>
      { bombStarted && <Defuse/>}
    </>
  );
}
