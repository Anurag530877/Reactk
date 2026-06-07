import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginPage(){
    const[user,setUser]=useState(
        {
            username:"",
            password:""   
             }
    )
    const inputHandlar=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const OnsubmitUser=(e)=>{
        e.preventDefault();
    }
    return(<>

    <div className="container">
<form onSubmit={OnsubmitUser}>
        <div className="row justify-content-center">
            <div className="col-md-4 p-4 bg-light px-3 py-2 text-center">
                <div className="mb-3">
                    <h3>Login User</h3>
                </div>
                <div className="mb-3">
                    <input type=" text " placeholder="Enter Your username" name="username" value={user.username} 
                    onChange={inputHandlar} className="form-control"/>
                    </div>
                     <div className="mb-3">
                      <input type=" password " placeholder="Enter Your password" name="password" value={user.password} 
                    onChange={inputHandlar} className="form-control"/>
                        </div>
                    <div className="mb-3">
                        <button className="btn btn-info">Login</button>

                <Link to="/register" className="btn btn-info mx-2">New User</Link>
                </div>
            </div>
        </div>
        </form>
    </div>
    </>)
}