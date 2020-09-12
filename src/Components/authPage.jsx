import React, {useState } from 'react';
import{useHistory} from 'react-router-dom';
import 'firebase/auth';
import 'firebase/firestore';
import { useFirebaseApp } from 'reactfire';
import BurgerToggle from './burgerToggle';
import bqtrans from '../media/BQ-trans.png';


function AuthPage(props){
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


    //Firebase registro
    const firebase = useFirebaseApp();
    //const user = useUser();
    //console.log(user)

    const submit = async (e) => {
     // console.log(email, password)
   
        await firebase.auth().signInWithEmailAndPassword(email, password)
       
    
    } 
    
        return(
            <div className='authPageBackground'>
                <BurgerToggle/>
                
                <div className='authPageContent'>
                    <div className='logoContainer'>
                    <img src={bqtrans} className="imgLogoAuth" alt="logo"/>
                    </div>
                    <div className='authContainer'>
                    <form className='formCont'  >
                        <label htmlFor='email' 
                        >
                            Ingresar email: </label>
                        <input type='email' 
                        placeholder='Correo Electrónico' 
                        autoComplete='username'
                        className='inputAuth'
                     
                        onChange={ (e)=> setEmail(e.target.value)}
                        />
                       
                        <label htmlFor='password'>Ingresar contraseña: </label>
                        <input type='password' 
                        placeholder='Contraseña' 
                        autoComplete='current-password'
                        className='inputAuth'
                        
                        onChange={ (e)=> setPassword(e.target.value)} />
                        <button
                        
                        className='btnAuthPage'onClick={eventClick}>
                            Ingresar
                            </button>
                    </form>
                </div>
               
               
                </div>
            </div>
        );
}



export default  AuthPage;










//cosas que no funcionaron 

//    .then((user) => {
    //     if (user != null) {
    //         window.location.hash = '#/thirdPage';
    //     } else {
    //         window.location.hash = '#/';
    //     }
    // })
    // .catch(function(error) {
    //     // Handle Errors here.
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     switch (errorCode) {
    //         case 'auth/invalid-email':
    //             alert('Email incorrecto.'); // eslint-disable-line no-alert
    //             break;
    //         case 'auth/user-not-found':
    //             alert('Usuario no encontrado.'); // eslint-disable-line no-alert
    //             break;
    //         case 'auth/wrong-password':
    //             alert('Contraseña incorrecta.'); // eslint-disable-line no-alert
    //             break;
    //         default:
    //             alert(errorMessage); // eslint-disable-line no-alert
    //     }
    // });]]]*/