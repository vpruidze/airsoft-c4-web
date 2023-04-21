import React from 'react';
import ghLogo from '../images/githubLogo.webp';
import pic from '../images/my-pic.webp';
import style from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <img src={pic} alt="Jovane no elevador con óculos escuro." width="65" />
      <div>
        <p>Jovane de Castro, Turma 19 - Tribo A</p>
        <a href="https://www.linkedin.com/in/jovanecastro/" target="_blank" rel="noreferrer">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="25" />
        </a>
        <a href="https://github.com/Cadavanaugh" target="_blank" rel="noreferrer">
          <img src={ghLogo} alt="Github" width="25" />
        </a>
      </div>
    </footer>
  );
}
