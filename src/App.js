
import './App.css';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//homepage 
import Header from './Components/Home/Header';
import Banner from './Components/Home/Banner';
import Whyus from './Components/Home/Whyus';
import Contact from './Components/Home/Contact';
import Footer from './Components/Home/Footer';
import Services from './Components/Home/Services';
import Team from './Components/Home/Team';


//bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

//registration page
import Form from './Components/Register/Form';

//User Home page
import UserHome from './Components/UserHome/UserHome';
import Bodymain from './Components/UserHome/Bodymain';

function App() {
  const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);
  const [userGoogleData, setUserGoogleData] = useState()
  // console.log(Data);
  let handleLoggedIn=(response)=>{
    setUserGoogleData(response);
    setIsUserLoggedIn(true); 
    console.log(userGoogleData);
  }
  let handleLoggedOut=(response)=>{
    console.log(response);
    console.log("logged out 1");
    setIsUserLoggedIn(false);
  //  window.location.reload(true);
  }
  if(isUserLoggedIn){
    console.log("login");
    return (
           <>   
           <UserHome data={{userGoogleData}} handleLoggedOut={handleLoggedOut}/>
           <Bodymain/>
           </>
    )
  }
  else{
   return (
      <>
       <Routes>
            <Route exact path="/" element={
              <>  
                <Header handleLoggedIn={handleLoggedIn}/>
                <Banner/>
                <Whyus/>
                <Services/>
                <Team/>
                <Contact/>
                <Footer/>
              </>}>

            </Route>
            
            <Route exact path="/register" element={
              <>  
              <Header handleLoggedIn={handleLoggedIn}/>
              <Form/>
              <Footer/>
              </>}>

            </Route>
         
        </Routes>
      </>
    );
  }
  
}

export default App;
