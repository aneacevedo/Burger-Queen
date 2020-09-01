import React from 'react';
import './App.css';
import InitialPage from './Components/initialPage.js';
import SecondPage  from './Components/secondPage.js';
import ThirdPage from './Components/thirdPage.js';
import BurgerToggle from './Components/burgerToggle.js';

function App() {
  return (
    <div className="App">
    {/* <InitialPage/> */}
    {/* <SecondPage/> */}
    <ThirdPage/>
    </div>
  );
}

export default App