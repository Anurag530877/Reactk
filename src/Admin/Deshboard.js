import React from "react";
import { Link } from "react-router-dom";
 export default function Dashboard() {
  return (
    <div className="container-fluid p-4">
      <h2 className="mb-4">Admin Dashboard</h2>

      <div className="row">
        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Students</h5>
              <h2>250</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Courses</h5>
              <h2>15</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Orders</h5>
              <h2>180</h2>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Revenue</h5>
              <h2>₹75,000</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow mt-4">
        <div className="card-header">
          <h4>Recent Students</h4>
        </div>
        <div className="card-body">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anurag Gupta</td>
                <td>MERN Stack</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Rahul Singh</td>
                <td>React JS</td>
                <td>Active</td>
              </tr>
              <tr>
                <td>Amit Kumar</td>
                <td>Node JS</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container">
        <div className="col-md-4">
          <Link to="/admincourse" className=" btn btn-info">Manage Course</Link>
        </div>
      </div>
    </div>
  
    
  );
}
