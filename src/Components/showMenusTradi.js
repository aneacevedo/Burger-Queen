import React,{useState, Fragment} from 'react';
import menuLunch from '../data/menuLunch.json';
import menuAcompanimients from '../data/menuAccompaniment.json';
import menuAggregates from '../data/menuAggregates.json';
import menuDrinks from '../data/menuDrinks.json';

function ShowMenuTradi () {
  const [MenuLunch ] = useState(menuLunch);
  const [MenuAcomp] = useState(menuAcompanimients);
  const [MenuAggregates] = useState(menuAggregates);
  const[MenuDrinks] = useState(menuDrinks);

  return ( 
    <Fragment>
      {MenuLunch.map((item, index)=> 
        <div className="containerFood" key={index.id}> 
         <div className='textImgBox'>
            <div className='textContainer'>
              <p>{item.title}</p>
              <p>{item.time}</p>
              <p>${item.price}</p>
            </div>
           <div className='containerImgFood'>
             {/* <img className='imgFood' 
             src={item.img}/> */}
           </div>
         </div>
        </div>)}
        <div>
          <p className='containerTextMenuPage'>Acompañamientos</p>
          <div className="containerMenuLunchOthers">
          {MenuAcomp.map((item,index)=>
            <div className="containerFood" key={index.id}> 
            <div className='textImgBox'>
               <div className='textContainer'>
                 <p>{item.title}</p>
                 <p>{item.time}</p>
                 <p>${item.price}</p>
               </div>
              <div className='containerImgFood'>
                {/* <img className='imgFood' 
                src={item.img}/> */}
              </div>
            </div>
           </div>
          )}
          </div>
        </div>
        <div>
          <p className='containerTextMenuPage'>Agregados</p>
          <div className='containerMenuLunchOthers'>
          {MenuAggregates.map((item,index)=>
          <div className="containerFood" key={index.id}> 
            <div className='textImgBox'>
               <div className='textContainer'>
                 <p>{item.title}</p>
                 <p>{item.time}</p>
                 <p>${item.price}</p>
               </div>
              <div className='containerImgFood'>
                {/* <img className='imgFood' 
                src={item.img}/> */}
              </div>
            </div>
           </div>
          )}
        </div>
        </div>
        <div>
          <p className='containerTextMenuPage'>Bebestibles</p>
          <div className='containerMenuLunchOthers'>
          {MenuDrinks.map((item,index)=>
          <div className="containerFood" key={index.id}> 
            <div className='textImgBox'>
               <div className='textContainer'>
                 <p>{item.title}</p>
                 <p>{item.time}</p>
                 <p>${item.price}</p>
               </div>
              <div className='containerImgFood'>
                {/* <img className='imgFood' 
                src={item.img}/> */}
              </div>
            </div>
           </div>
        )}
        </div>
        </div>
      </Fragment>
      );
}

export default ShowMenuTradi;