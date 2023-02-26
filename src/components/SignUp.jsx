import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const host = "https://noteable-backend.onrender.com";
  const navigate = useNavigate();

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password === user.cpassword) {
      const response = await fetch(`${host}/api/auth/createUser`, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
        }),
      });

      const json = await response.json();
      if (json.success) {
        // localStorage.setItem("token", json.authToken);
        // fetchNote();
        // alert("User registered successfully");
        props.showAlert("Acount created successfully", "success");
        navigate("/login");
      } else {
        props.showAlert("User Already Exists", "danger");
      }
    } else {
      props.showAlert("Passwords should be equal", "warning");
    }
  };

  return (
    <div>
      <h1 className="fw-bold">Register to continue to Noteable</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="emailHelp"
            required
            onChange={onChange}
            value={user.name}
            minLength={3}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            required
            onChange={onChange}
            value={user.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passworrd" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            required
            onChange={onChange}
            value={user.password}
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassworrd" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            required
            onChange={onChange}
            value={user.cpassword}
            minLength={5}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
    </div>
  );
};
