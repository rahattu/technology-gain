import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
       
    <Router>
      <Navbar/>
     
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route path="/service"><Services/> </Route>
        <Route path="/contact"><Contact/></Route>
      </Switch>
      <Footer/>
    </Router>

        
        
      
    </div>
  );
}

export default App;
