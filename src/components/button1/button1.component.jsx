import React from 'react';
import './button1.styles.css'


function handleClick() {
    let container = document.getElementById('container')
    let h1 = document.getElementById('title')
    let h4 = document.getElementById('h4')

    h1.innerHTML = "First";   
    h4.innerHTML = "1";                   // Insert text
                    // Insert text
    container.appendChild(h1); 
    container.appendChild(h4); 

  }

export const Button1 = () => (
    <img className='button1' src='https://i.imgur.com/zHXXlE3.png' onClick={handleClick} alt='sticky note'/>
);