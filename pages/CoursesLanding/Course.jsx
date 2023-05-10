import Image from "next/image";
import ImageCourse from "../assets/images/neurological.png";
import Button from "react-bootstrap/Button";

function Course({item}) {
    return (
        <div className="box-one course-box">
        <div className="card-top">
          <div className="course-image">
            <Image
              src={ImageCourse}
              alt="Picture of the author"
              className="img-fluid"
            />
          </div>
          <div className="badge-position">
            <span className="badge">{item.courseType}</span>
          </div>
        </div>
        <div className="mt-3">
          <h6>{item.Title}</h6>
          <div className="text-end">
            <span>{item.months}</span>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <Button className="preview-btn btn-one">{item.button}</Button>
            </div>
            <div>{item.Rating}</div>
          </div>
        </div>
      </div>
    );
}

export default Course;