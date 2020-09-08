import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import 'firebase/auth';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';


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
                <div className='authPageContent'>
                    <div className='logoContainer'>
                        <p>logo</p>
                    </div>
                    <form >
                        <label htmlFor='email' 
                        >
                            Ingresar email</label>
                        <input type='email' 
                        placeholder='Correo Electrónico' 
                        autoComplete='username'
                        onChange={ (e) => setEmail(e.target.value) }
                        >
                        </input>
                        <label htmlFor='password'>Ingresar contraseña</label>
                        <input type='password' 
                        placeholder='Contraseña' 
                        autoComplete='current-password'
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
        );
}



export default AuthPage;