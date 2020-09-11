import React, {useEffect , useState} from 'react';
import {useHistory} from 'react-router-dom';
import 'firebase/firestore';
import firebase from 'firebase/app';




function KitchenPage(){
  
    const [orders, setOrders] = useState([]);
    
    /*useEffect(() => {
        const obtenerDatos = async () => {
            const db = firebase.firestore()
            try {
                const data = await db.collection('orders').get()
                const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
                console.log(arrayData);
                setOrders(arrayData);   
            } catch (error) {
                console.log(error)
            }
        }
        obtenerDatos();
    }, []);*/

const getOrders = async() => {
    const db = firebase.firestore()
    db.collection('orders').onSnapshot((querySnapshot) => {
    const docs = [];
    querySnapshot.forEach((doc) => {
    docs.push({ ...doc.data(), id: doc.id });
    });
    console.log(docs)
    setOrders(docs);  
})
};
       
 useEffect(() => {
        //(console.log('oka')
 getOrders();
},[])
    
    let history = useHistory();
    function handleClick(){
        history.push('/');
    }

    return(
        
        <div className="kitchen">
            <div className="titleKitchen">
                <h1>Hola cocineros!!!</h1>
            </div>
            <div className="contentKitchen">
           
            <div className="containerWaiting">
                <nav className="headerKitchen">En espera</nav>
                <div className="contentWaiting">
                { orders.map((item) => (
                    <div key={item.id}>
                                <li>{item[0]}</li>
                            </div>
                    ))}
                   
                </div>
            </div>
            <div className="containerDone">
                <nav className="headerKitchen">Listos para servir</nav>
                <div className="contentDone">
                  
                </div>
            </div>
            </div>
            <button className="btnKitchen" onClick={() => handleClick()}>Cambiar de cuenta</button>
        </div>
    
    );
}

export default KitchenPage;
