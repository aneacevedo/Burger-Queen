import React from 'react';
import data from '../data/menuBreakfast.json';


// const renderMenuBreak = (arrayBreakfastClub) => {
//     document.querySelector('.showFoodBreakfast').innerHTML = arrayBreakfastClub.map(food =>
//         <p>ayuda</p>)
// }

const dataBreakfast = data.map(food =>
    <div className="containerFood">
        <p>{food.title}</p>
        <div className='containerImgFood'>
            //<img className='imgFood' 
            src={food.img}/>
        </div>
    </div>
);


class ShowBreakClub extends React.Component{
    render(){
        
        return ( 
                <div className='showFoodBreakfast'>
                 {dataBreakfast}
                 </div>
                );
    }
}


export default ShowBreakClub;