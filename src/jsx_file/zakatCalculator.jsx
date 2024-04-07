import React, { useState,useEffect } from 'react';
import { useLocation } from "react-router-dom";


import MenuBar from './menuBar';

function ZakatCalculator() {

  const location = useLocation();
  const {userName} = location.state || {userName :"111"};



  // Left Div Part
  const [text, setText] = useState('');
  const messages = [
    "\"And establish prayer and give Zakah, and whatever good you put forward for yourselves - you will find it with Allah. Indeed, Allah of what you do, is Seeing.\" - Quran (2:110)",
    "\"Indeed, those who believe and do righteous deeds and establish prayer and give Zakah will have their reward with their Lord, and there will be no fear concerning them, nor will they grieve.\" - Quran (2:277)", 
    "\"Take, [O, Muhammad], from their wealth a charity by which you purify them and cause them increase, and invoke [ Allah's blessings] upon them. Indeed, your invocations are reassurance for them. And Allah is Hearing and Knowing.\" - Quran (9:103)"
  ];
  const intervalTime = 50; // Adjust speed of animation by changing interval time
  const transitionTime = 10000; // Time to wait before transitioning to the next message

  useEffect(() => {
    let messageIndex = 0;
    let currentIndex = 0;
    let timeout;

    const animateText = () => {
      if (currentIndex <= messages[messageIndex].length) {
        setText(messages[messageIndex].substring(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(animateText, intervalTime);
      } else {
        clearTimeout(timeout);
        setTimeout(() => {
          currentIndex = 0;
          messageIndex = (messageIndex + 1) % messages.length; // Loop back to the first message if it's the last one
          animateText();
        }, transitionTime);
      }
    };

    const initialTimeout = setTimeout(() => {
      animateText();
    }, 0);

    // Clear timeouts when component unmounts
    return () => {
      clearTimeout(initialTimeout);
      clearTimeout(timeout);
    };
  }, []);




  // Right Div Part
  const [zaakat , setZakat] = useState(0);

  const calculateJakat = () => {
    let input = "";
    let money = 0;
    let zakat = 0;
    input = document.getElementById("money").value;
    money = input===""?0:parseInt(input);
    if(money >= 55000)zakat += money/40;

    input = document.getElementById("caret").value;
    const caret  = parseInt(input);
    input = document.getElementById("gold").value;
    money = (input===""?0:parseFloat(input))*11.6638*caret*8000/24;
    if(money >= 698000)zakat += money/40;

    input = document.getElementById("silver").value;
    money = (input===""?0:parseFloat(input))*11.6638*90;
    if(money >= 55000)zakat += money/40;

    input = document.getElementById("crops").value;
    money = (input===""?0:parseInt(input));
    zakat += money/20;

    setZakat(Math.ceil(zakat));    
  }

  return (<>
    <MenuBar userName = {userName}/>
    <div className="main-container">
      <div className="left-grid">
        <h1 style={{color:'lightgreen'}}>Allah Says.....</h1>
        <p>{text}</p>
      </div>
      <div className="right-grid">
        <h1 style={{color:'lightblue'}}>Calculate Your Jakat</h1>
        <h3 style={{color:'lightgreen'}}>Give Infrormation About Your Property</h3>

        <span>Money In BDT</span><br />
        <input type="number" className="user-input" id="money"/>
        <br /><br />


        <span>Gold In Vori</span><br />
        <input type="number" className="user-input" id="gold"/>
        <br /><br />

        <span>Your Gold Caret ( 1 to 24 )</span><br />
        <input type="number" className="user-input" id="caret"/>
        <br /><br />
        
        <span>Silver In Vori</span><br />
        <input type="number" className="user-input" id="silver"/>
        <br /><br />

        <span>Crops In Money</span><br />
        <input type="number" className="user-input" id="crops"/>
        <br /><br />

        <p>
          <button className="jakat-button" onClick={calculateJakat}>
            Calculate Jakat
          </button>
        </p>
        <br /><br />
        <h1>Your Jakat : {zaakat} BDT</h1>

      </div>

    </div>
  </>);
}

export default ZakatCalculator;
