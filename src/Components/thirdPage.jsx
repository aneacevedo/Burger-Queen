import React from 'react';
import '../index.css';
import Table from './table';
import BurgerToggle from './burgerToggle';
import { withRouter } from 'react-router'





class ThirdPage extends React.Component {


    render(){

    return ( 

           
    <div className = "thirdPageBackground">
            <BurgerToggle/>
        <div className='thirdPageContent'>
          
    <h1 className='title'>HI</h1>
            <Table/>
        </div>   
    </div>

    
   
    );
    }
}

export default withRouter(ThirdPage);