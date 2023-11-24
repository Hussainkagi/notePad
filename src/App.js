
// import { useState, useSyncExternalStore } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React , {useState} from 'react'; 
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  const [mode, setmode] = useState('light');
 const [alert, setalert] = useState(null);

 const showAlert = (message, type)=>{
   setalert({
     msg: message,
     type: type

   })
   setTimeout(() => {
     setalert(null);
     
   }, 3000);

 }

  const toggleMode = ()=>{
    if(mode==='light'){
      setmode('dark')
      showAlert("Dark Mode Is Enabled" , "success");
      document.title = 'Haky - DM';
    }
    else{
      setmode('light')
      showAlert("Light   Mode Is Enabled" , "success");
      document.title = 'Haky - LM';
    }
    

  }
  return (
    <>
    <Router>   
       <Navbar title = "hyyy" mode = {mode} toggleMode = {toggleMode} />
     <Alert alert = {alert}/>
     <div className="container my-3">
     <Switch>
          <Route  exact path="/about">
          <About/>
          </Route>
          <Route exact path="/">
          <TextForm  showAlert = {showAlert} heading = "Enter Text To Analyze"/>
          </Route>
      </Switch>
    
     </div>
     </Router>

    
     </>
  );
}

export default App;
