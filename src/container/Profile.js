import React, { useState, useEffect } from "react";
import api from "../constant/api";
import { Link, Redirect } from "react-router-dom";

import axios from "axios";
import Title from "../components/Title";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
const Profile = () => {
  const [adminDetails, setAdminDetails] = useState({});

  const checkLogin = () => {
    axios({
      method: "GET",
      url: api.checkUser,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setAdminDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Profile" />
          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <p>Name:{adminDetails.name}</p>
            <p>Address:{adminDetails.address}</p>
            <p>Phone:{adminDetails.phone}</p>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Profile;
