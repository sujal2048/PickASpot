import React, { useState } from "react";
import { ToastContainer, toast, collapseToast } from 'react-toastify';
import "../../Css/form.css";
import emailjs from "@emailjs/browser";
import validator from 'validator';
const Form = () => {
  const values = {
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    email: "",
    phone: "",
    areaps: "",
    capacityps: "",
    floors: "",
    slotspf: "",
    camera:"",
  };

  const [initialState, setState] = useState(values);
 

  const {
    name,
    address,
    city,
    state,
    country,
    pincode,
    email,
    phone,
    areaps,
    capacityps,
    floors,
    slotspf,
    camera,
  } = initialState;

  const handleChange = (e) => {
    setState({ ...initialState, [e.target.name]: e.target.value });
    console.log(initialState);
  };

  const handleSubmit = async (e) => {
    console.log('submit hogaya');
    console.log(e.target.email.value);
    e.preventDefault();
    if(!validator.isEmail(e.target.email.value))
    {
      
      toast("Please enter a valid E-mail ID!", {
        className:"custom-style",
                  progressClassName:"custom-progress",
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
        });


    } 
    else{
     emailjs.sendForm('service_favm3gd','template_k9ambrs',e.target,'dGHtBMcN3yrh1fo-W')
     .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
        toast("Thank you for your interest! We will reach out to you with further details soon!", {
            className:"custom-style",
                      progressClassName:"custom-progress",
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
            });
    

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/sujal2048/google_sheets/RIXyjLiPlXsGvfwz?tabId=Sheet1",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([
            [
              name,
              address,
              city,
              state,
              country,
              pincode,
              email,
              phone,
              areaps,
              capacityps,
              floors,
              slotspf,
              camera,
            ],
          ]),
        }
      );
      await response.json();
      setState({
        ...initialState,
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        email: "",
        phone: "",
        areaps: "",
        capacityps: "",
        slotspf:"",
        floors: "",
        camera: "",
      });

      // alert(
      //   "Thank you for your order! We will reach out to you with further details soon!"
      // );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  };
  return (
    <>
      <h1 className="form">Registration Form</h1>
      <form className="container-form" onSubmit={handleSubmit}>
        <div className="container main-form">
          <div className="personal-info">
            <div className="personal-info-heading">
              <h2 >Personal Info:</h2>
            </div>
            <div className="personal-info-body">
            <div className="required-field">
              <label htmlFor="name"></label>
              <input
                placeholder="Name"
                type="text"
                name="name"
                autoComplete="off"
                value={name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="required-field">
            <label htmlFor="email"></label>
            <input
              placeholder="Email Id"
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="required-field">
            <label htmlFor="phone"></label>
            <input
              placeholder="Phone No."
              type="text"
              name="phone"
              autoComplete="off"
              value={phone}
              onChange={handleChange}
              required
            />
          </div>

            </div>
          </div>
        <div className="parking-space-info">
          <div className="parking-space-info-heading">
            <h2>Parking Space Info:</h2>
          </div>
          <div className="parking-space-info-body">
          <div className="required-field">
            <label htmlFor="address"></label>
            <input
              placeholder="Address of Parking Space"
              type="text"
              name="address"
              autoComplete="off"
              value={address}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="city"></label>
            <input
              placeholder="City"
              type="text"
              name="city"
              autoComplete="off"
              value={city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="state"></label>
            <input
              placeholder="State"
              type="text"
              name="state"
              autoComplete="off"
              value={state}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="country"></label>
            <input
              placeholder="Country"
              type="text"
              name="country"
              autoComplete="off"
              value={country}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="pincode"></label>
            <input
              placeholder="Pin Code"
              type="text"
              name="pincode"
              autoComplete="off"
              value={pincode}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="areaps"></label>
            <input
              placeholder="Area of parking space"
              type="text"
              name="areaps"
              autoComplete="off"
              value={areaps}
              onChange={handleChange}
              required
            />
          </div>

          <div className="required-field">
            <label htmlFor="capacityps"></label>
            <input
              placeholder="Capacity of parking space"
              type="text"
              name="capacityps"
              autoComplete="off"
              value={capacityps}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="required-field">
            <label htmlFor="floors"></label>
            <input
              placeholder="Number of floors"
              type="text"
              name="floors"
              autoComplete="off"
              value={floors}
              onChange={handleChange}
              required
            />
          </div>
          <div className="required-field"  required="">
            <label htmlFor="slotspf"></label>
            <input
              placeholder="Slots per floor"
              type="text"
              name="slotspf"
              autoComplete="off"
              value={slotspf}
              onChange={handleChange}
              required
            />
          </div>
        
          
          <div>
           <label htmlFor="camera"></label>
             <select
              style={{
                backgroundColor: "#fff",
                boxShadow: "none",
                borderRadius: "0",
                borderBottom: "2px solid blue",
                borderLeft: "2px solid blue",
                borderTop: "none",
                borderRight: "none",
                display: "block",
                padding: "0.5rem 0.75rem",
                width: "100%",
                fontSize: "1rem",
                lineHeight: "1.25",
                color: "#03045E",
              }}
              className="form-select"
              onChange={handleChange}
              name="camera"
              value={camera}
              required
            >
              <option selected value="">
                Does it have IP Cameras?
              </option>
              <option value="YES">Yes</option>
              <option value="NO">No</option>
            </select>
          </div>
          </div>
        </div>
       
        </div>
        <button
            className="btn btn-block text-light"
            data-toggle="modal"
            data-target="#exampleModalCenter"
            type="submit"
            value="Register"
          >
            Register
          </button>

      </form>
      <ToastContainer/>

    </>
  );
};

export default Form;