import React from 'react';
import './button2.styles.css'


function handleClick() {
  let container = document.getElementById('container')
  let h1 = document.getElementById('title')
  let h4 = document.getElementById('h4')

  h1.innerHTML = "Second"; 
  h4.innerHTML = "2";                  
                  
  container.appendChild(h1); 
  container.appendChild(h4); 

  }

  
export const Button2 = () => (
    <img className='button2' src='https://i.imgur.com/5ZetMnG.png' onClick={handleClick} alt='text'>
    </img>
);