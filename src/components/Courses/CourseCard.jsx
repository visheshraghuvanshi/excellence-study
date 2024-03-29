import './CourseCard.css';

function CourseCard({course}) {
    return (
        <div className="course-card">
            <img src={
                    course.image
                }
                alt={
                    course.title
                }
                className="course-image"/>
            <div className="course-details">
                <h2>{
                    course.title
                }</h2>
                <p>{
                    course.description
                }</p>
                <p className="course-price">${
                    course.price
                }</p>
                <button className="buy-button">Buy Now</button>
            </div>
        </div>
    );
}

export default CourseCard;
