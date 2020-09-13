import React, {useState} from 'react';
import 'firebase/firestore';
import firebase from 'firebase/app';
import trash from '../media/trash.png';

function OrderList({order,  handleSetOrder}){

    //const [total, setTotal]= useState('');
    const [dataQ, setDataQ] = useState(1);
    const [note, setNote] = useState({
    note:''});
    

    const notesSave =(e) => {
      console.log(e.target.value)
      setNote({
          ...note,
          [e.target.name] : e.target.value
      })

  }

    //Remover productos uno a uno.
    function handleRemove(id){
        const newSum = order.filter((item) => item.id !== id);
        handleSetOrder(newSum);
    }
    
    //Eliminar pedido completo
    const deleteAll = (id) => {
      const filterOrder = order.filter((item) => item.id === id);
      handleSetOrder(filterOrder);
    };
    
    //Sumar los precios totales del pedido.
    const calculation = order.map((item) => 
    Math.floor(item.price)
    );
    
    let plus = 0;
    calculation.forEach(function(operation){
    plus += operation 
    });
    

//Cálculo de propina 10%
    //const diezmo = (plus * 10)/100;

    // function tips(diezmo, plus){
    // const yawey = diezmo + plus;
    //     return (yawey); 
    // }

const handleInputChange  = (event) => { 
setDataQ({
    ...dataQ,
      [event.target.name]: event.target.value 
})
console.log(event.target.value)
 }



//Pedido a FB
const db = firebase.firestore();
// enviar orden a cd firestore
const SendingOrder = () => {
   
    const productTitle = order.map((item) => item.title);
    const timeOrder = new Date();
    //const productTotal = order.map((item) => item.total);
  
    console.log(productTitle);
    db.collection("orders")
    .add({
        product: productTitle,
        //note: note,
        time: timeOrder.toLocaleString([], {timeStyle: 'short'}),
       
    })
    .then(function (docRef){
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error)
    });
    
};

//Eliminar el pedido al enviarlo
function sendOrders(){
    SendingOrder();
    deleteAll();
};



    return (
        <div className='orderContainer'>
        <div className='textOrder'> 
           <div className='titleAndImg'>
             <p className='titleOrder'>Pedido</p>
             <div className='imgTrashContainer'>
               <img src={trash} className='imgTrash' alt='trash' onClick={() => deleteAll() }/>
             </div>
           </div>
           <div>
           <div className='orderPicksContainer'>
                {order.map((item) =>
                    <div className="containerPick" key={item.id} item={item}>
                        <p className='textOrder'>{item.title}</p>
                        <p className='textOrder'>${item.price}</p>
                       
                         <div>
                    
                          <input type="number" min="1" max="20" name="cant" className="inputOrder" onInput={()=> handleInputChange}/>
                        </div>
                        <p className='textOrder'onClick={() => handleRemove(item.id)}>X</p>
                    </div>
                )}
             </div>
        <div className='containerTipsAndBtn'>
         
          <div>
          <form onSubmit={notesSave}>
            <textarea name="note" placeholder='Añadir notas al chef' onChange={ (e) => setNote(e.target.value) }></textarea>
            </form>
          </div>
          {/* <div className='containerTips'>
            <p className='titleTips'>Propina</p>
                <button className='btnTips' onClick={() => tips()}>10%</button>
          </div> */}
          <div className='containerPriceBtn'>
                <p className='totalPrice'>Total ${plus}</p>
            <button type="submit" className='aceptBtn' onClick={() => sendOrders()}>CONFIRMAR PEDIDO</button>
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