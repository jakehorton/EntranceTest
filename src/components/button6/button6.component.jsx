import React from 'react';
import './button6.styles.css';

function handleClick() {
  let container = document.getElementById('container')
  let h1 = document.getElementById('title')
  let h4 = document.getElementById('h4')

  h1.innerHTML = "Sixth"; 
  h4.innerHTML = "6";                  
                  
  container.appendChild(h1); 
  container.appendChild(h4); 

  }

export const Button6 = () => (
    <img className='button6' src='https://i.imgur.com/kcJAdc7.png' onClick={handleClick} alt='layout'/>

);