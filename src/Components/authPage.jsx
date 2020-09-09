import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'firebase/auth';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import BurgerToggle from './burgerToggle';
import bqtrans from '../media/BQ-trans.png';


function AuthPage(){

    let history = useHistory();
    function handleClick(){
        history.push('/thirdPage');
    }
   
    function eventClick(){
        handleClick();
        submit();
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const firebase = useFirebaseApp();

    const submit = async () => {
       await firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    
        return(
            <div className='authPageBackground'>
                <BurgerToggle/>
                <div className='authPageContent'>
                    <div className='logoContainer'>
                    <img src={bqtrans} className="imgLogo1" alt="logo"/>
                    </div>
                    <div className='authContainer'>
                    <form className='formCont'>
                        <label htmlFor='email' 
                        >
                            Ingresar email: </label>
                        <input type='email' 
                        placeholder='Correo Electrónico' 
                        autoComplete='username'
                        className='inputAuth'
                        onChange={ (e) => setEmail(e.target.value) }
                        >
                        </input>
                        <label htmlFor='password'>Ingresar contraseña: </label>
                        <input type='password' 
                        placeholder='Contraseña' 
                        autoComplete='current-password'
                        className='inputAuth'
                        onChange={ (e) => setPassword(e.target.value) }
                        >
                        </input>
                        <button
                        type='submit'
                        className='btnAuthPage' 
                        onClick={() => eventClick()}>
                            Ingresar
                            </button>
                    </form>
                </div>
                </div>
            </div>
        );
}



export default AuthPage;