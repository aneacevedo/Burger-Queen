import React,{useState, Fragment} from 'react';
import menuLunch from '../data/menuLunch.json';
import menuAcompanimients from '../data/menuAccompaniment.json';
import menuAggregates from '../data/menuAggregates.json';
import menuDrinks from '../data/menuDrinks.json';


function ShowMenuTradi (props) {
  const [MenuLunch ] = useState(menuLunch);
  const [MenuAcomp] = useState(menuAcompanimients);
  const [MenuAggregates] = useState(menuAggregates);
  const[MenuDrinks] = useState(menuDrinks);
  const { order, handleSetOrder} = props;

  const selectFood = (item) =>{
    const newSelect = [
      ...order,
      {
        id: item.id,
        title:item.title,
        price: item.price,
        total:1
      },
    ];
    handleSetOrder(newSelect);
  };


  return ( 
    <Fragment>
      {MenuLunch.map((item)=> 
      <label className="containerFood" key={item.id}>
        <div className='textImgBox'>
           <div className='textContainer'>
             <p>{item.title}</p>
             <p>{item.time}</p>
             <p>${item.price}</p>
            </div>
            <div className='containerImgFood'>
              <img className='imgFood' alt=""/>
            </div>
         </div>
        <input key={item.id} type='checkbox' onChange={() => selectFood(item)}/>
        <span className='checkmark'></span>
      </label>
       )}
        <div>
          <p className='containerTextMenuPage'>Acompañamientos</p>
          <div className="containerMenuLunchOthers">
          {MenuAcomp.map((item, id)=>
                  <label className="containerFood" key={item.id}>
                  <div className='textImgBox'>
                     <div className='textContainer'>
                       <p>{item.title}</p>
                       <p>{item.time}</p>
                       <p>${item.price}</p>
                      </div>
                      <div className='containerImgFood'>
                        <img className='imgFood' 
                        src={item.img} alt=""/>
                      </div>
                   </div>
                  <input key={item.id} type='checkbox' onChange={() => selectFood(item)} />
                  <span   className='checkmark'></span>
                </label>
          )}
          </div>
        </div>
        <div>
          <p className='containerTextMenuPage'>Agregados</p>
          <div className='containerMenuLunchOthers'>
          {MenuAggregates.map((item)=>
                <label className="containerFood" key={item.id}>
                <div className='textImgBox'>
                   <div className='textContainer'>
                     <p>{item.title}</p>
                     <p>{item.time}</p>
                     <p>${item.price}</p>
                    </div>
                    <div className='containerImgFood'>
                      <img className='imgFood' 
                      src={item.img} alt=""/>
                    </div>
                 </div>
                <input key={item.id} type='checkbox' onChange={() => selectFood(item) }/>
                <span className='checkmark'></span>
              </label>
          )}
        </div>
        </div>
        <div>
          <p className='containerTextMenuPage'>Bebestibles</p>
          <div className='containerMenuLunchOthers'>
          {MenuDrinks.map((item)=>
             <label className="containerFood" key={item.id}>
             <div className='textImgBox'>
                <div className='textContainer'>
                  <p>{item.title}</p>
                  <p>{item.time}</p>
                  <p>${item.price}</p>
                 </div>
                 <div className='containerImgFood'>
                   <img className='imgFood' 
                   src={item.img} alt=""/>
                 </div>
              </div>
             <input key={item.id}type='checkbox' onChange={() => selectFood(item)}/>
             <span className='checkmark'></span>
           </label>
        )}
        </div>
        </div>
      </Fragment>
      );

}
 
export default ShowMenuTradi;