import React from 'react';
import './toolbar.styles.css'
import {Button1} from '../button1/button1.component';
import {Button2} from '../button2/button2.component';
import {Button3} from '../button3/button3.component';
import {Button4} from '../button4/button4.component';
import {Button5} from '../button5/button5.component';
import {Button6} from '../button6/button6.component';

export const Toolbar = (props) => (
    <div className='toolbar'>
        <div className='innerDiv'>
            <Button1/>
            <Button2/>
            <Button3/>
            <Button4/>
            <Button5/>
            <Button6/>
        </div>
    </div>
);