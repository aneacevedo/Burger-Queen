import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './Components/initialPage';
import AuthPage from './Components/authPage';
import SecondPage  from './Components/secondPage';
import ThirdPage from './Components/thirdPage';
import MenuPage from './Components/menu';
import KitchenPage from './Components/kitchenPage';
import {useFirebaseApp} from 'reactfire';

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
 
  return (
    // <AuthProvider>
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
          path="/authPage"
          render={ () => <AuthPage/>} />
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
          <Route
          exact
          path="/kitchenPage"
          render={ () => <KitchenPage/>} />
        </Switch>
      </div>
   </BrowserRouter>



   )};


export default App;