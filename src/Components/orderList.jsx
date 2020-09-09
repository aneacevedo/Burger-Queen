import React, {useState} from 'react';

function OrderList({order,  handleSetOrder}){


    const [sum, setSum]= useState(1);
   
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
     const diezmo =  (plus * 10)/100;
  

    //   const handleSum = (e, id) => {
    //       const ola = order.filter((item) => item.id !== id); 
    //       if (e.target.id !== undefined){
    //         ola(id.total + 1);
    //         setSum(ola);}
    //      console.log(eventClickCapture);
         
    //      setSum ({
    //          ...sum,
           
    //      })
    // }
    return (
        <div>
            <div className='orderPicksContainer'>
                {order.map((item) =>
                    <div className="containerPick" key={item.id} item={item}>
                    <p className='textOrder'>{item.title}</p>
                    <p className='textOrder'>${item.price}</p>
                    <div>
                        <div className='btnSum' >
                            <p className='textSum'>+</p>
                        </div>
                <p className="textTotalOrder"> {sum} </p>
                        <div className='btnLess'>
                            <p className='textLess'>-</p>
                        </div>
                    </div>
                    
                    <p className='textOrder'
                     onClick={() => handleRemove(item.id)}>X</p>
                    </div>
                )}
            </div>
        <div className='containerTipsAndBtn'>
          <div>
            <textarea placeholder='Añadir notas al chef'></textarea>
          </div>
          <div className='containerTips'>
            <p className='titleTips'>Propina</p>
                <button className='btnTips'>10%</button>
          </div>
          <div className='containerPriceBtn'>
                <p className='totalPrice'>Total ${plus}</p>
            <button className='aceptBtn'>CONFIRMAR PEDIDO</button>
          </div>
         </div>
        </div>
    );
}

export default OrderList;