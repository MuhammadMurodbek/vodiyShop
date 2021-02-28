import React from 'react';
import ReactDOM from 'react-dom';
import './Sass/style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <div className="fon-wrapper">
      <div className="back-fon top-max-fon"></div>
      <div className="back-fon top-min-fon"></div>
    </div>
    <App />
    <div className="fon-wrapper">
      <div className="back-fon bottom-max-fon"></div>
      <div className="back-fon bottom-min-fon"></div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
