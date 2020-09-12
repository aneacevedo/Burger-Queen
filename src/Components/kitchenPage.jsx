import React, {useEffect , useState} from 'react';
import {useHistory} from 'react-router-dom';
import 'firebase/firestore';
import firebase from 'firebase/app';
import KitchenWait from './kitchenWait';
import KitchenDone from './kitchenDone';


function KitchenPage(){
  
    const [orders, setOrders] = useState([]);
    
    const getOrders = async() => {
    const db = firebase.firestore()
    db.collection('orders').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id});
    });
    setOrders(docs);  
    });
    };
       
    useEffect(() => {
        //(console.log('oka')
    getOrders();
    },[])
    
    let history = useHistory();
    function handleClick(){
        history.push('/');
    }
    const handleSetOrders= (order) =>{
        setOrders(orders);
      }
    
    return(
        <div className="kitchen">
            <div className="titleKitchen">
                <h1>Hola cocineros!!!</h1>
            </div>
            <div className="contentKitchen">
           
            <div className="containerWaiting">
                <div className="headerKitchen">
                    <h3>En espera</h3></div>
                <div className="contentWaiting">
                <KitchenWait orders={orders} handleSetOrders={handleSetOrders}/>
                </div>
            </div>
            <div className="containerDone">
                <nav className="headerKitchen1">Listos para servir</nav>
                <div className="contentDone">
                  <KitchenDone orders={orders}/>
                </div>
            </div>
            </div>
            <button className="btnKitchen" onClick={() => handleClick()}>Cambiar de cuenta</button>
        </div>
    
    );
}

export default KitchenPage;
