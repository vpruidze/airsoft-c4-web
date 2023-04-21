/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import './App.css';
import Bomb from './components/Bomb';
import BombButtons from './components/BombButtons';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header />
      <main className="App" id="main">
        <Bomb />
        <BombButtons />
      </main>
    </>
  );
}
