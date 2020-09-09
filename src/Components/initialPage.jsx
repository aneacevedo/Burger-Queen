import React from 'react';
import { withRouter } from 'react-router'

class InitialPage extends React.Component {
    nextPath(path) {
        this.props.history.push(path);
      }
      render(){
    return ( 
    <div className = "initialPageBackground">
        <div className='initialPageCard'>
            <div className='initialPageContent'>
                <p>¡Bienvenido a Burger Kingdom!</p>
                <p>¿Quién eres?</p>
                <div className="btnContent">
                    <button className='btnInitialPage'>Cocinero</button>
                    <button className='btnInitialPage' onClick={() => this.nextPath('/authPage') }>Mesero</button>
                </div>
            </div>
        </div>   
    </div>
    );
}

}

export default withRouter(InitialPage);