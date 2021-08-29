import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Title from "../components/Title";
import api from "../constant/api";

const EditEvent = (props) => {
  //   const [event, setEvent] = useState({});
  const [event_name, setEventName] = useState("");
  const [event_desc, setEventDesc] = useState("");
  const [event_image, setEventImage] = useState("");

  //   Single Event fetch
  const singleEvent = () => {
    axios({
      method: "GET",
      url: api.getSingleEvent + props.match.params.id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setEventName(res.data.result.event_name);
        setEventDesc(res.data.result.event_desc);
        setEventImage(res.data.result.event_image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //   update Event
  const updateEvent = () => {
    axios({
      method: "PUT",
      url: api.updateEvent + props.match.params.id,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        event_name: event_name,
        event_desc: event_desc,
        event_image: event_image,
      },
    })
      .then((res) => {
        console.log(res.data);
        window.location.href = "/events";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    singleEvent();
  }, []);

  return (
    <div>
      <Header />
      <SideNav />
      <Title name="Edit Event" />
      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div class="panel panel-default">
          <div class="panel-heading">Edit</div>
          <div class="panel-body">
            <div class="col-md-6">
              <form role="form">
                <div class="form-group has-success">
                  <label>Event Name</label>
                  <input
                    class="form-control"
                    placeholder="Event Name"
                    value={event_name}
                    onChange={(event) => setEventName(event.target.value)}
                  />
                </div>

                <div class="form-group has-success">
                  <label>Event Description</label>
                  <textarea
                    class="form-control"
                    rows="3"
                    value={event_desc}
                    onChange={(event) => setEventDesc(event.target.value)}
                  ></textarea>
                </div>
                <div class="form-group">
                  <label>Event Photo</label>
                  <input
                    type="file"
                    onChange={(e) => {
                      const image = e.target.files[0];
                      console.log(image);
                      const data = new FormData();
                      data.append("image", image);
                      axios({
                        method: "POST",
                        url: api.uploadImage,
                        headers: {
                          Accept: "application/json",
                          "Content-Type": "multipart/form-data",
                        },
                        data: data,
                      })
                        .then(function (res) {
                          console.log(res.data);
                          setEventImage(res.data.image);
                          // console.log(profilePic);
                        })
                        .catch(function (err) {
                          console.log(err);
                        });
                    }}
                  />
                  <img src={event_image} width="80" />
                </div>
              </form>
              <button
                type="submit"
                class="btn btn-primary"
                onClick={updateEvent}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEvent;
