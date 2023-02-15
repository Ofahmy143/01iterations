import './outlineCard.css';

import CourseContent from '../../Courses/courseContent/courseContent';

import {
  BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from 'react-router-dom';

function OutlineCard({thumbnail , courseTitle, courseDescription , id}) {
  document.querySelector(".outlineCard")
  let courseID = 1;
    return (
    <div className='outlineCard' id={id !== undefined ? id : null}>
      <img src={thumbnail} alt="course thumbnail" />
      <div className='description'>
        <h1>{courseTitle}</h1>
        <p>{courseDescription}</p>
           <Link to={`courses/${courseTitle}`}><button>Learn more...</button></Link>
      
      </div>

      {/* <Routes>
        <Route exact path="courses/:courseID" element={<CourseContent />} />
      </Routes> */}

    </div>
  );
}

export default OutlineCard;