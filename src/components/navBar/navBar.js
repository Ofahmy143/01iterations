import './navBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../Home/home';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import Project from '../Projects/projects';
import { Fragment } from 'react';

function NavBar() {
  return (
    <Fragment>



    <div className='nav'>
        <h3>0 1&nbsp; i t e r s</h3>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/">Courses</Link>
            <Link to="/">About</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Home</Link>

            {/* <a href="/Project">Projects</a>
            <a href="">Courses</a>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Contact</a> */}



        </div>
    </div>
    <Routes>
        <Route  path ="/" element={<Home/>} />
        <Route  path ="/projects" element={<Project/>} />

   </Routes>

</Fragment>

  );
}

export default NavBar;