import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const UserDetails = () => {
  const token = localStorage.getItem("token");
  const host = "http://localhost:5000";

  useEffect(() => {
    getUserDetails();
    // eslint-disable-next-line
  }, []);
  const [user, setUser] = useState({ name: "", email: "" });

  const getUserDetails = async () => {
    const response = await fetch(`${host}/api/auth/getuser`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
    });

    const json = await response.json();
    setUser({ name: json.name, email: json.email });
  };
  return (
    <div className="d-flex justify-content-center">
      <div className="card text-center" style={{ width: "50%" }}>
        <div className="card-header fs-3 fw-bold">Noteable</div>
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-center">
            <i className="fa-regular fa-user"></i>
            <div className="mx-3">{user.name}</div>
          </h5>
          <p className="card-text d-flex justify-content-center">
            <i className="fa-regular fa-envelope"></i>
            <div className="mx-3">{user.email}</div>
          </p>
          <Link to="/" className="btn btn-primary">
            Your Notes
          </Link>
        </div>
      </div>
    </div>
  );
};
