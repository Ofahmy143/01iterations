import './courses.css';
import Grid from '../grid/grid';
import OutlineCard from '../cards/outlineCard/outlineCard';
import courseData from './coursesData.json'
import { useState } from 'react';
function Courses() {
  const [courses , setCourses] = useState(courseData)
  return (
    <div className='courses'>
      <h1 id="coursesTitle">01 iterations Courses</h1>
      <hr/>
      <Grid 
      type={OutlineCard}
      cards={courseData}
      gridID={"coursesGrid"}
      />
    </div>
  );
}

export default Courses;