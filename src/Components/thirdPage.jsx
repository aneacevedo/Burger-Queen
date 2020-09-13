import React from 'react';
import '../index.css';
import Table from './table';
import BurgerToggle from './burgerToggle';
import { withRouter } from 'react-router'
import bqtrans from '../media/BQ-circulo.png';
import {useUser} from 'reactfire';



function ThirdPage (props) {
        const user =useUser();
    return (    
    <div className = "thirdPageBackground">
            <BurgerToggle/>
        <div className='thirdPageContent'>
        <img src={bqtrans} className="imgLogo2" alt="logo"/>  
    {user && <h1 className='title'>Hola {user.email}</h1>}
            <Table/>
        </div>   
    </div>

    
   
    );
    }


export default withRouter(ThirdPage);