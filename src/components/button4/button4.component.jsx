import React from 'react';
import './button4.styles.css';

function handleClick() {
  let container = document.getElementById('container')
  let h1 = document.getElementById('title')
  let h4 = document.getElementById('h4')

  h1.innerHTML = "Fourth"; 
  h4.innerHTML = "4";                  
                  
  container.appendChild(h1); 
  container.appendChild(h4); 

  }

export const Button4 = () => (
    <img className='button4' src='https://i.imgur.com/Py2c1ha.png' onClick={handleClick} alt='draw'/>
);