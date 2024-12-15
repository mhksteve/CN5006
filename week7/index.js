import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Hook_controlledbuttonstate from './Counter';
import reportWebVitals from './reportWebVitals';
import EmojiCounter from './EmojiCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook_controlledbuttonstate />
    <EmojiCounter pic="Love" />
    <EmojiCounter pic="Sad" />
    <EmojiCounter pic="Like" />
    <EmojiCounter pic="Happy" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
