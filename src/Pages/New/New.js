import React from 'react'
import './new.scss'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from "../../components/Navbar/Navbar"
import { useState } from 'react'
const New = ({ input, title }) => {

  const [file, setFile] = useState("");



  return (
    <div className="new">
      <Sidebar />
      <div className="new-container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file): "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"} alt="" />
          </div>
          <div className="right">
            <div className="mb-3">
              <form action="" className="form-right">

                <div className="col-lg-5">
                  <label htmlFor='' className="form-label mt-3">Upload Profile Picture</label>
                  <input type="file" onChange={e=>setFile(e.target.files[0])} className="form-control" name="" id="" placeholder="" aria-describedby="fileHelpId" />
                </div>
                {input.map((items)=>(
                  <div className="col-lg-5" key={items.id}>
                  <label htmlFor='' className="form-label mt-3">{items.label}</label>
                  <input type={items.type} className="form-control" name="" id="" placeholder={items.placeholder} />
                </div>
                ))}
                
                
                
                <div className="col-lg-5">
                <button type="submit" className="btn btn-red rounded-0 mt-3 form-control">Submit</button>
                </div>
                <div className="col-lg-5">
                <button type="reset" className="btn btn-dark rounded-0 mt-3 form-control">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New
