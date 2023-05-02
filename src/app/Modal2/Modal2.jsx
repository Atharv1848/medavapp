import React from 'react';
import "./style.scss"

export default function Modal2() {
  return (
    <div className="enqContainer d-flex justify-content-center align-items-center">
      <button
        type="button"
        className="btn enqBtn"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Enquire Now
      </button>

      <div
        className="modal fade"
        tabIndex={-1}
        role='dialog'
        id="exampleModalCenter"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered ">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
              Enter Your Details here</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
        <form>
             <div className="form-group">
              <label htmlFor="exampleInputFirstName">First Name*</label>
              <input type="text"  id="exampleInputFirstName" placeholder="First Name" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlfor="exampleInputLastName">Last Name*</label>
              <input type="text"  id="exampleInputLastName" placeholder="Last Name" className="form-control" />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address*</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter E-mail'/>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Mobile Number*</label>
              <input type="email" className="form-control" id="exampleInputNumber" placeholder='Mobile Number'/>
            </div>
           
             <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
