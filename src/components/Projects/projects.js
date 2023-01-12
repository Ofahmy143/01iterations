
import { Fragment } from 'react';
import './projects.css';

function Project() {
  return (
    <Fragment>
    <div className='grid'>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide5.jpg"
        alt="First slide"
      />
        </div>
        <div className='project center' >
        <img 
        className="d-block w-100 "
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f743d2133493707.61bf28717243b.jpg"
        alt="First slide"
      />
        </div>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide4.jpg"
        alt="First slide"
      />
        </div>
        <div className='project center'  >
        <img
        className="d-block w-100 card"
        src="https://cdn.discordapp.com/attachments/910313432258068522/1054516749149671464/07.png"
        alt="First slide"
      />
        </div>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4edc76155607531.6357f5a96ca8a.png"
        alt="First slide"
      />
        </div>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide2.jpg"
        alt="First slide"
      />
              </div>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide6.jpg"
        alt="First slide"
      />
        </div>
        <div className='project' >
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide3.jpg"
        alt="First slide"
      />
        </div>
        
        
    </div>
    </Fragment>


  );
}

export default Project;
