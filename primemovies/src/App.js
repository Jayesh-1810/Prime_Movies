import './App.css';
import React, { useState } from 'react'
import Header from './view/header';
import Footer from './view/Footer';
import Main from './view/Main';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import  UserContext  from './AppContext';


function App() {
  const [value, setValue] = useState('');
  return (
   <Router>
      <UserContext.Provider value={[value,setValue]}>
        <Header />
        <Main/>
        <Footer />
      </UserContext.Provider>
   </Router>
  );
}

export default App;
