import React, { useState } from "react";
import "./Registration.css"; // Import CSS file
import axios from 'axios'
// http://localhost:3000/worker/postworker
// useEffect(() => {
  //   axios
  //     .post("http://localhost:3000/worker/postworker", data)
  //     .then((res) => console.log(res.data))
  //     .catch((error) => console.log(error));
  // }, []);
const WorkerReg = () => {

  const  [ name, setName ] = useState('');
    const  [ email, setEmail ] = useState('');
    const  [ number, setNumber ] = useState('');
    const  [ category, setCategory ] = useState('');
    const  [ gender, setGender ] = useState('');
    const  [ city, setCity ] = useState('');
    const  [ state, setState ] = useState('');

    const data = {
      name,
      email,number,category,gender,city,state
    }
    const handleSubmit =()=>{
      axios
      .post("http://localhost:3000/worker/postworker", data)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
    }
  return (
    <div className="registration-form">
      {/* <img src={registration} alt="" /> */}

      <form onSubmit={handleSubmit}>
        <h1 className="reg">Register here</h1>
        <p className="reg-p">Lets show your work to our users.</p>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e)=>setName(e.target.value)}
            required
            placeholder="Enter your name..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e)=>setEmail(e.target.value)}

            required
            placeholder="Enter your email..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e)=>setNumber(e.target.value)}

            required
            placeholder="Enter your no..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
        </div>{" "}
        <select
          id="category"
          name="category"
          onChange={(e)=>setCategory(e.target.value)}

          required
        >
          <option value="">Select Category</option>
          <option value="Salon">Salon</option>
          <option value="Massage">Massage</option>
          <option value="painter">painter</option>
          <option value="carpainter">carpainter</option>
          <option value="Ac service">Ac service</option>
          <option value="Appliance">Appliance</option>
          <option value="Cleaning & Disinfection">
            Cleaning & Disinfection
          </option>
          <option value="Electrician">Electrician</option>
        </select>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            onChange={(e)=>setGender(e.target.value)}

            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={(e)=>setCity(e.target.value)}

            required
            placeholder="Enter your city..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            onChange={(e)=>setState(e.target.value)}

            required
            placeholder="Enter your state..."
          />
        </div>
        <button id="reg-btn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};
export default WorkerReg;
