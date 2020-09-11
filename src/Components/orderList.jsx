import React, {useState} from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
import trash from '../media/trash.png';

function OrderList({order,  handleSetOrder}){


    //const [total, setTotal]= useState();
    const [dataQ, setDataQ] = useState(1);

    function handleRemove(id){
        const newSum = order.filter((item) => item.id !== id);
        handleSetOrder(newSum);
    }

    const calculation = order.map((item) => 
    Math.floor(item.price)
    );

    let plus = 0;
    calculation.forEach(function(operation){
    plus += operation 
    });

    //const diezmo = (plus * 10)/100;

    function olaa(diezmo, plus){
    const yawey = diezmo + plus;
        return (yawey);
    }


  const handleInputChange  = (event) => { 

    // console.log(event.target.value)
    setDataQ({
         ...dataQ,
        [event.target.value]: event.target.value 
    })

  }

//Pedido a FB
const db = firebase.firestore();
// enviar orden a cd firestore
const SendingOrder = () => {
    const productTitle = order.map((item) => item.title);
    const productTotal = order.map((item) => item.total.value);
    console.log(productTitle);
    db.collection("orders")
    .add({
        product: productTitle, productTotal 
    })
    .then(function (docRef){
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error)
    });
};


    return (
        <div className='orderContainer'>
        <div className='textOrder'> 
           <div className='titleAndImg'>
             <p className='titleOrder'>Pedido</p>
             <div className='imgTrashContainer'>
               <img src={trash} className='imgTrash' alt='trash'/>
             </div>
           </div>
           <div>
           <div className='orderPicksContainer'>
                {order.map((item) =>
                    <div className="containerPick" key={item.id} item={item}>
                        <p className='textOrder'>{item.title}</p>
                        <p className='textOrder'>${item.price}</p>
                         <div>
                            <input type="number" min="1" max="20" className="inputOrder" onChange={()=> handleInputChange}/> 
                        </div>
                        <p className='textOrder'onClick={() => handleRemove(item.id)}>X</p>
                    </div>
                )}
             </div>
        <div className='containerTipsAndBtn'>
          <div>
            <textarea placeholder='Añadir notas al chef'></textarea>
          </div>
          <div className='containerTips'>
            <p className='titleTips'>Propina</p>
                <button className='btnTips' onClick={() => olaa()}>10%</button>
          </div>
          <div className='containerPriceBtn'>
                <p className='totalPrice'>Total ${plus}</p>
            <button className='aceptBtn' onClick={() => SendingOrder()}>CONFIRMAR PEDIDO</button>
          </div>
         </div>
           </div>  
        </div>
       </div>   
    
    );
}

export default OrderList;




// Cosas que no funcionaron 
    //   const handleSum = () => {
    //       console.log('ascucho');
    //     setTotal( total + 1);
    // }
        //   const ola = order.filter((item) => item.id !== id); 
        //   if (e.target.id !== undefined){
        //     ola(id.total + 1);
        //     setSum(ola);}
         
    //      setSum ({
    //          ...sum,
           
    //      })