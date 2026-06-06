import { useState } from "react";
import { Link } from "react-router-dom";
export default function Courses() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: "MERN Stack Development",
      price: 9999,
      duration: "6 Months",
    },
    {
      id: 2,
      name: "React JS",
      price: 4999,
      duration: "3 Months",
    },
  ]);

  const deleteCourse = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Courses Management</h2>

       <Link to="/addcourse" className="btn btn-success">
  Add Course
</Link>
      </div>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Course Name</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {courses.map((course) => (
            <tr key={course.id}>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>₹{course.price}</td>
              <td>{course.duration}</td>
              <td>
                <button className="btn btn-primary btn-sm me-2">
                  Edit
                </button>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCourse(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}