import React from 'react';
import './button5.styles.css';

function handleClick() {
  let container = document.getElementById('container')
  let h1 = document.getElementById('title')
  let h4 = document.getElementById('h4')

  h1.innerHTML = "Fifth"; 
  h4.innerHTML = "5";                  
                  
  container.appendChild(h1); 
  container.appendChild(h4); 

  }

export const Button5 = () => (
    <img className='button5' src='https://i.imgur.com/mPgnzpF.png' onClick={handleClick} alt='insert image'/>
);