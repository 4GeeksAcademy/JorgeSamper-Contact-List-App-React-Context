import React, { Component } from "react";

export const addContact = () => (
    <form className="m-4">

	<h1 className="fw-bold">Add a new contact</h1>
      <div className="mb-3 text-start fw-bold">
        <label htmlFor="exampleInputEmail1" className="form-label" >Full Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
      </div>

	  <div className="mb-3 text-start fw-bold">
        <label htmlFor="exampleInputEmail1" className="form-label" >Email</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" />
      </div>

	  <div className="mb-3 text-start fw-bold">
        <label htmlFor="exampleInputEmail1" className="form-label" >Phone</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Phone" />
      </div>

	  <div className="mb-3 text-start fw-bold">
        <label htmlFor="exampleInputEmail1" className="form-label" >Address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Address" />
      </div>
      
      
    <button type="submit" className="btn btn-primary w-100">Save</button>
	  <a href="#" class="text-primary text-start">or get back to contacts.</a>

	</form>
);
