import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
        <div class="profile-sidebar">
          <div class="profile-userpic">
            <img
              src="http://placehold.it/50/30a5ff/fff"
              class="img-responsive"
              alt=""
            />
          </div>
          <div class="profile-usertitle">
            <div class="profile-usertitle-name">Username</div>
            <div class="profile-usertitle-status">
              <span class="indicator label-success"></span>Online
            </div>
          </div>
          <div class="clear"></div>
        </div>
        <div class="divider"></div>

        <ul class="nav menu">
          <li class="active">
            <Link to="/home">
              <em class="fa fa-dashboard">&nbsp;</em> Dashboard
            </Link>
          </li>
          <li>
            <Link to="/product">
              <em class="fa fa-cutlery">&nbsp;</em> Product
            </Link>
          </li>
          <li>
            <Link to="/events">
              <em class="fa fa-calendar">&nbsp;</em> Events
            </Link>
          </li>
          <li>
            <Link to="/users">
              <em class="fa fa-users">&nbsp;</em> Users
            </Link>
          </li>
          <li>
            <a href="#">
              <em class="fa fa-user">&nbsp;</em> Profile
            </a>
          </li>

          <li>
            <Link to="/">
              <em class="fa fa-power-off">&nbsp;</em> Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
