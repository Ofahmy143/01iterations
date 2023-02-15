import './courseCard.css';

function CourseCard() {
// get course contents from database
  return (
    <div className='courseCard'>
        <div className='courseCover'>
            <img src="/assets/Carousel/slide2.jpg" alt='course Cover Image'></img>
        </div>
        <h3 className='courseTitle text'>Course Title</h3>
        <p className='coursePrice text'> ????EGP +VAT (22%)</p>
        <div className='enrollmentStatus '>Not enrolled</div>

        <div className='courseContent text'>
            <h6>Course Includes</h6>
            <ul>
                <li>?? chapter</li>
                <li>?? videos</li>
                <li>?? projects</li>
                <li>Course Certificate</li>

            </ul>
        </div>

    </div>
  );
}

export default CourseCard;