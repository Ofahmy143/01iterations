import { Fragment , useEffect, useState } from 'react';
import Home from '././components/Home/home'; 
import NavBar from '././components/navBar/navBar';
import Project from './components/Projects/projects';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import './App.css';

function App() {
  let url;
  useEffect(()=>{
    url = "/" + window.location.href.split("/").pop()
  })
  return (
    <Router basename={url}>
    <div className='parent' >
      <NavBar/>
    </div>
    </Router>


  );
}

export default App;
