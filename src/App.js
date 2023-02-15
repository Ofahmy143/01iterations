import { Fragment , useState } from 'react';
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

  return (
    <Router>
    <div className='parent' >
      <NavBar/>
    </div>
    </Router>


  );
}

export default App;
