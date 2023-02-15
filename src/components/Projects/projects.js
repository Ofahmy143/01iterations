
import { Fragment , useState } from 'react';
import { Link , Route , Routes } from 'react-router-dom';
import ProjectDetails from './projectDetails/projectDetails';
import projectData from './projects.json'
import Grid from '../grid/grid'
import ProjectCard from '../cards/projectCard/projectCard';
import './projects.css';

function Project() {
  const [projects , setProjects] = useState(projectData)
  return (
    <div className='projects'>
    <p id="projectPageTitle">Selected Adventures</p>
    <Grid 
    type={ProjectCard}
    cards={projects}
    gridID={"grid2"}
    />


    </div>


  );
}

export default Project;


    /* <div className='grid2'>

      {projects.map((project,index)=>(

    <div className='project' key={index} >
          <Link to={`/projects/${project.title}`}>
        <div id="test">
            <h4> {project.title}</h4>
            <p>{project.shortDescription}</p>
          </div>
          </Link>
        <img
        className="d-block w-100 card"
        src={project.thubmnail}
        alt={`project ${index}`}
      />
        </div>

      ))}

        
    </div> */

/*
<div className='project' >
        <div  id="test">
            <h4> Lorem Ipsum</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</p>
          </div>
        <img
        className="d-block w-100 card"
        src="/assets/Carousel/slide5.jpg"
        alt="First slide"
      />
        </div>
        <div className='project' >
          <Link to="/projects/project-title">
        <div  id="test">
            <h4> Lorem Ipsum</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius</p>
          </div>
          </Link>
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
        
        */