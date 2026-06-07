import { useState } from "react";
import { Link } from "react-router-dom";
export default function RegisterPage(){
  
    const[user,setUser]=useState(
        {
            fname:"",
            email:"",
            mobile:"",
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
                    <h3>Register User</h3>
                </div>
                 <div className="mb-3">
                    <input type=" text " placeholder="Enter Your fname" name="fname" value={user.fnamee} 
                    onChange={inputHandlar} className="form-control"/>
                    </div>
                     <div className="mb-3">
                    <input type=" text " placeholder="email" name="email" value={user.email} 
                    onChange={inputHandlar} className="form-control"/>
                    </div>
                     <div className="mb-3">
                    <input type=" text " placeholder="mobile" name="mobile" value={user.mobile} 
                    onChange={inputHandlar} className="form-control"/>
                    </div>
                <div className="mb-3">
                    <input type=" text " placeholder="username" name="username" value={user.username} 
                    onChange={inputHandlar} className="form-control"/>
                    </div>
                     <div className="mb-3">
                      <input type="password" placeholder="Password" name="password" value={user.password} 
                    onChange={inputHandlar} className="form-control"/>
                        </div>
                    <div className="mb-3">
                        <button className="btn btn-info">Register</button>
               
                <Link to="/login" className="btn btn-info mx-2" >Already register</Link>

                </div>
            </div>
        </div>
        </form>
    </div>
    </>)
}