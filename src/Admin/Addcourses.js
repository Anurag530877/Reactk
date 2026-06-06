import { useState } from "react";

export default function AddCourse() {
  const [course, setCourse] = useState({
    name: "",
    price: "",
    duration: "",
    category: "",
    instructor: "",
    description: "",
  });

 const handlechange = (e) => {
  e.preventDefault();

  const oldCourses =
    JSON.parse(localStorage.getItem("courses")) || [];

  const newCourse = {
    id: Date.now(),
    ...course,
  };

  oldCourses.push(newCourse);

  localStorage.setItem(
    "courses",
    JSON.stringify(oldCourses)
  );

  alert("Course Added Successfully");

  setCourse({
    name: "",
    price: "",
    duration: "",
    category: "",
    instructor: "",
    description: "",
  });
};

  return (
    <div className="container mt-4">
      <div className="card shadow p-4">
        <h2 className="mb-4">Add New Course</h2>

        <form onSubmit={handlechange}>
          <div className="mb-3">
            <label>Course Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={course.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Course Price</label>
            <input
              type="number"
              name="price"
              className="form-control"
              value={course.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Duration</label>
            <input
              type="text"
              name="duration"
              className="form-control"
              placeholder="6 Months"
              value={course.duration}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <select
              name="category"
              className="form-select"
              value={course.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="Web Development">
                Web Development
              </option>
              <option value="Programming">
                Programming
              </option>
              <option value="Design">
                Design
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label>Instructor Name</label>
            <input
              type="text"
              name="instructor"
              className="form-control"
              value={course.instructor}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label>Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="4"
              value={course.description}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-success">
            Add Course
          </button>
        </form>
      </div>
    </div>
  );
}