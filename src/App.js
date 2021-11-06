
import React from "react";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router,Switch,Route }from 'react-router-dom';
import './App.css';
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import SignUp from "./components/Pages/SignUp";


class App extends React.Component{
  render(){ 
     return (
    <>
    <Router>
    <NavBar />
    
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/products'  component={Products}/>
      <Route path='/sign-up'  component={SignUp}/>
      
    </Switch>
    </Router>

     

    </>
  );
}}

export default App;
