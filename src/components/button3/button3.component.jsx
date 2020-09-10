import React from 'react';
import './button3.styles.css'


function handleClick() {
  let container = document.getElementById('container')
  let h1 = document.getElementById('title')
  let h4 = document.getElementById('h4')

  h1.innerHTML = "Third"; 
  h4.innerHTML = "3";   
                 
  container.appendChild(h1); 
  container.appendChild(h4); 

  }


export const Button3 = (props) => (
    <div className='button3' onClick={handleClick} alt='rectangle tool'/>
);