import './footer.css';
import { faInstagram , faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <div className='footer'>
        <ul>
            <li>&copy; copyright 2023 01iterations  </li>
            <div className='contact'>
            <li >Contact us</li>
            <li ><FontAwesomeIcon icon={faInstagram}/></li>
            <li ><FontAwesomeIcon icon={faBehance}/></li>
            <li><FontAwesomeIcon icon={faLinkedin}/></li>
            </div>


        </ul>
    </div>
  );
}

export default Footer;