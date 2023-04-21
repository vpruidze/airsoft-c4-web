import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TimerProvider from './context/TimerProvider';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TimerProvider>
      <App />
    </TimerProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
