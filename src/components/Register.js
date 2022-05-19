import React, { useState } from 'react'

const Register = () => {
    var [newname,setNewname]=useState("")
    var [email,setEmail]=useState("")
    var [username,setUsername]=useState("")
    var [password,setPassword]=useState("")
    var [confirmpassword,setConfirmpass]=useState("")
    const subData=()=>{
        const data={"name":newname,"email":email,"userName":username,"password":password,"confirmPassword":confirmpassword}
        console.log(data)
    }

  return (
    <div>
      <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setNewname(e.target.value)}} placeholder="Enter name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Email</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email id " type="email" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">User Name</label>
                    <input onChange={(e)=>{setUsername(e.target.value)}} placeholder="Enter user name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Password</label>
                    <input onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter confirm your password" type="password" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Confirm Password</label>
                    <input onChange={(e)=>{setConfirmpass(e.target.value)}} placeholder="Enter confirm your password" type="password" name="" id="" className="form-control"/>
                    
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-primary">REGISTER</button>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/" className="btn btn-primary">BACK TO LOGIN</a>
                </div>
            </div>
        </div>
    </div>
</div>    



    </div>
  )
}

export default Register