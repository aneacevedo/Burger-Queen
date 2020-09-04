import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './Components/initialPage.js';
import SecondPage  from './Components/secondPage.js';
import ThirdPage from './Components/thirdPage.js';
import MenuPage from './Components/menu.js';

class App extends React.Component{
  render(){
  return (
    <BrowserRouter>
      <div>
        <Switch>     
          <Route 
            exact
            path="/"
            component={InitialPage} 
          />
          <Route
          exact
          path="/secondPage"
          render={ () => <SecondPage/>} />
           <Route
          exact
          path="/thirdPage"
          render={ () => <ThirdPage/>} />
           <Route
          exact
          path="/menu"
          render={ () => <MenuPage/>}/>
        </Switch>
      </div>
   </BrowserRouter>
   )};
}

export default App;