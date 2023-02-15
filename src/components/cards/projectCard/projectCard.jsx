import './projectCard.css';
import { Link  } from 'react-router-dom';

function ProjectCard({thumbnail , courseTitle, courseDescription , id}) {
  return (

<div className='project' >
      <Link to={`/projects/${courseTitle}`}>
    <div class="test" id={id !== undefined? id: null}>
        <h4> {courseTitle}</h4>
        <p>{courseDescription}</p>
      </div>
      </Link>
    <img
    className="d-block w-100 card"
    src={thumbnail}
    alt={`project thumbnail `}
  />
    </div>
  );
}

export default ProjectCard;