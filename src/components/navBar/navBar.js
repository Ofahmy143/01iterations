import './navBar.css';
import Contact from '../Contact/contact';
import { Fragment, useState } from 'react';
import {
  BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';
import Home from '../Home/home';
import Project from '../Projects/projects';
import Courses from '../Courses/courses';
import ProjectDetails from '../Projects/projectDetails/projectDetails';

function NavBar() {
  const [navTitle , setNavTitle] = useState("0 1&nbsp; i t e r s")
  return (
    <Fragment>


    <div className='nav'>
        <h3>0 1&nbsp; i t e r s </h3>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/">Services</Link>
            <Link to="/contact">Contact</Link>

        </div>
    </div>
    <Routes>
        <Route  path ="/" element={<Home/>} />
        <Route  path ="/projects" element={<Project/>} />
        <Route  path ="/courses" element={<Courses/>} />
        <Route  path ="/contact" element={<Contact />} />
        <Route  path ="/projects/project-title" element={<ProjectDetails />} />
   </Routes>

</Fragment>

  );
}

export default NavBar;