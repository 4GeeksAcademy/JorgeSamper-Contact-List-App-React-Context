import React from "react";

export const NewContact = () => {
    const inputFields = [
        {
            label: "Full name",
            name: "full-name",
            type: "text"
        },
        {
            label: "Phone",
            name: "phone",
            type: "text",
        },
        {
            label: "Email",
            name: "email",
            type: "email",
        },
        {
            label: "Address",
            name: "address",
            type: "text",
        },
    ];
    return (
        <>
        <h1>Add new contact</h1>
        <form className="m-4">
            {inputFields.map((inputOptions) => {
            return (
                <div key={inputOptions.name} className="mb-3 text-start fw-bold">
                <label htmlfor={inputOptions.name} className="form-label" >{inputOptions.label}</label>
                <input 
                    type= {inputOptions.type}
                    className="form-control" 
                    id= {inputOptions.name}
                    name= {inputOptions.name}
                    placeholder= {inputOptions.label}
                />
                </div>
            );
            })}

            {/* <h1 className="fw-bold">Add a new contact</h1>
            
            <div className="mb-3 text-start fw-bold">
                <label htmlFor="exampleInputEmail1" className="form-label" >Email</label>
                <input 
                type="email" 
                className="form-control" 
                id="contactEmail" 
                placeholder="Email" 
                />
            </div>

            <div className="mb-3 text-start fw-bold">
                <label htmlFor="exampleInputEmail1" className="form-label" >Phone</label>
                <input 
                type="email" 
                className="form-control" 
                id="contactPhone" 
                placeholder="Phone" 
                />
            </div>

            <div className="mb-3 text-start fw-bold">
                <label htmlFor="exampleInputEmail1" className="form-label" >Address</label>
                <input 
                type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter Address" 
                />
            </div> */}
            
            <button type="submit" className="btn btn-primary w-100">Save</button>
            <a href="#" class="text-primary text-start">or get back to contacts.</a>

        </form>
        </>
    );
};