import React, { useState } from 'react'

const Login = () => {
    var [username,setUser]=useState("")
    var [password,setPass]=useState("")
    const subData=()=>{
        const data={"name":username,"password":password}
        console.log(data)
    }
  return (
    <div>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">User Name</label>
                    <input onChange={(e)=>{setUser(e.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                   <input onChange={(e)=>{setPass(e.target.value)}} placeholder="Enter password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">LOGIN</button>
                </div>
                <div classNameName="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <a href="/regiser">New User Click Here</a>
                </div>
            </div>
        </div>
    </div>
</div>


    </div>
  )
}

export default Login