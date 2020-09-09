import React from 'react';
import '../index.css';
import Table from './table';
import BurgerToggle from './burgerToggle';
import { withRouter } from 'react-router'
import bqtrans from '../media/BQ-circulo.png';




class ThirdPage extends React.Component {


    render(){

    return ( 

           
    <div className = "thirdPageBackground">
            <BurgerToggle/>
        <div className='thirdPageContent'>
        <img src={bqtrans} className="imgLogo2" alt="logo"/>  
    <h1 className='title'>HI</h1>
            <Table/>
        </div>   
    </div>

    
   
    );
    }
}

export default withRouter(ThirdPage);