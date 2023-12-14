import React from 'react';
 import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth,createUserProfileDocument } from './firebase/firebase.utils'; 
 

 

class App extends React.Component {

  constructor(){
    super();
    this.state={
      currentUser:null
        
    }
  }
unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef=await createUserProfileDocument(userAuth);

        userRef.onSnapshot(Snapshot=>{
          this.setState({
            currentUser :{
              id:Snapshot.id,
              ...Snapshot.data()
            
          } 
          }
          );
          console.log(this.state);

        });
        
      
      }
      this.setState({currentUser:userAuth});
    })

  }

  componenetWillUnmount(){
    this.unsubscribeFromAuth();
  }
 render(){
  return (
    <div >
    <Header currentUser = {this.state.currentUser}/>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          {/* <Route path='/hats' Component={HatsPage}/> */}
          <Route  path="/shop" element= {<ShopPage/>}/> 
          <Route  path="/signin" element= {<SignInAndSignUpPage/>}/> 
         


          </Routes>
    </div>
  );
 }
}

export default App;
