import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const DATA = {
    name: "Hey, I'm Shamsher",
    subtext: "Full Stack Web Developer, based in Kolkata, INDIA",
    jobStatus: "Transformed @ Masai School",
    twitterURL: 'https://twitter.com/syedshamsher12',
    githubURL: 'https://github.com/syedshamsher',
    linkedinURL: 'https://www.linkedin.com/in/syed-shamsher-ali-hussain-5b6302158',
    resumeURL: 'https://drive.google.com/drive/folders/1pMVXTPHCV_4BER5-dKAxB3rbdMn2aMM-?usp=sharing'
  }
ReactDOM.render(
      <App profileData = {DATA} />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
