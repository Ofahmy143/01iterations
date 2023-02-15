import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faBehance, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone , faMailForward} from '@fortawesome/free-solid-svg-icons'



function Contact() {
  // Add to grid course object which has outline and other information
  return (
    <div id='contact'>
        <p id='contactPageTitle'>Contact Us</p>
        <div id='blockContainer'>
        <div id="leftBlock">
        
            <p> <FontAwesomeIcon icon={faMailForward} /> Email@emailTest.com</p>
            <p><FontAwesomeIcon icon={faPhone} /> +20 01xxxxxxxxxx</p>
            
            <p> <FontAwesomeIcon icon={faInstagram} /> Instagram</p>   
            <p><FontAwesomeIcon icon={faBehance} />  Behance</p>    
            <p><FontAwesomeIcon icon={faLinkedin} />  LinkedIn</p>    
 
        </div>
        <div id="rightBlock">
            <section>
                <input id="senderName" type="text" placeholder='Name'></input>
            </section>
            <section>
                <input id="senderEmail" type="email" placeholder='Email'></input>
            </section>
            <section>
                <textarea id="senderMsg"  placeholder='Message'></textarea>
            </section>
            <section>
                <button type='submit' id="submitButton">Submit</button>
            </section>

        </div>
        </div>
    </div>
  );
}

export default Contact;