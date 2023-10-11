import React from 'react';
 import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth } from './firebase/firebase.utils'; 
 


// const HatsPage =()=>{
//   <div>
//     <h1>
//       Hats Page
//     </h1>
//   </div>
// }

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }


  componentDidMount(){
    auth.onAuthStateChanged(user =>{
      this.setState({currentUser : user});

      console.log(user);
    })
  }
 render(){
  return (
    <div >
    <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          {/* <Route path='/hats' Component={HatsPage}/> */}
          <Route  path="/shop" element= {<ShopPage/>}/> 
          <Route  path="/signIn" element= {<SignInAndSignUpPage/>}/> 
         


          </Routes>
    </div>
  );
 }
}

export default App;
