import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, Redirect } from "react-router-dom";

import SideNav from "../components/SideNav";
import axios from "axios";
// import { Link, Redirect } from "react-router-dom";
//Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import Title from "../components/Title";
// api
import api from "../constant/api";
const Events = () => {
  const [event, setEvents] = useState([]);
  const getAllEvents = () => {
    axios({
      method: "GET",
      url: api.getAllEvents,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      setEvents(res.data.results);
    });
  };
  useEffect(() => {
    getAllEvents();
    setTimeout(() => {
      $("#example").DataTable({
        lengthMenu: [
          [5, 10, 15, -1],
          [5, 10, 15, "All"],
        ],
      });
    }, 250);
  }, []);

  return (
    <div>
      {localStorage.getItem("token") ? (
        <div>
          <Header />
          <SideNav />
          <Title name="Event" />

          <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
            <table id="example" class="display">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Product Name</th>
                  <th>Product Description</th>
                  <th>Image</th>
                  <th>Date</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {event.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.event_name}</td>
                      <td>{item.event_desc}</td>
                      <td>
                        <img src={item.event_image} width="80" />
                      </td>

                      <td>{Date(item.event_date).substr(0, 10)}</td>
                      <td>
                        <Link to={"editevent/" + item._id}>Edit</Link>|
                        <Link to="#">Delete</Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <Redirect to="/"></Redirect>
      )}
    </div>
  );
};

export default Events;
