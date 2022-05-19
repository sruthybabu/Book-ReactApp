import React, { useState } from 'react'

const Addbook = () => {
    var [bookname,setBook]=useState("")
    var [author,setAuthor]=useState("")
    var [price,setPrice]=useState("")
    const subData=()=>{
        const data={"bookName":bookname,"author":author,"price":price}
        console.log(data)
    }
  return (
    <div>
        <div className="container">
    <div className="row">
        <div className="col col12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Book Name</label>
                    <input onChange={(e)=>{setBook(e.target.value)}} placeholder="Enter book name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Author</label>
                    <input onChange={(e)=>{setAuthor(e.target.value)}} placeholder="Enter author name" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Price</label>
                    <input onChange={(e)=>{setPrice(e.target.value)}} placeholder="Enter book price" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button onClick={subData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Addbook