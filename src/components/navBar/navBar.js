import './navBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <div className='nav'>
        <h3>0 1&nbsp; i t e r s</h3>
        <div className='links'>
            <a href="">Home</a>
            <a href="">Projects</a>
            <a href="">Courses</a>
            <a href="">About</a>
            <a href="">Careers</a>
            <a href="">Contact</a>

        </div>
    </div>

  );
}

export default NavBar;