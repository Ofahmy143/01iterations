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
  // const[Body , setBody] = useState(0)
  // let Body
  // console.log(window.location.pathname);
  // switch(window.location.pathname){
  //   case "/":
  //     Body=<Home />
  //   break;
  //   case "/projects":
  //      Body = <Project />;
  //     break;


  //  }
  return (
    <Router>
    <div className='parent' >
      <NavBar  />


    </div>
    </Router>


  );
}

export default App;
