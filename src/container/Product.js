import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
//Bootstrap and jQuery libraries
// import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// api
import api from "../constant/api";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getAllProduct = () => {
    axios({
      method: "GET",
      url: api.getAllProduct,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProduct();
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
      <Header />
      <SideNav />
      <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <table id="example" class="display">
          <thead>
            <tr>
              <th>SN</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Product Price</th>
              <th>Product Image</th>
              <th>Product Category</th>
              <th>Product Uploaded by</th>
              <th>User Image</th>
              <th>Date</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.product_name}</td>
                  <td>{item.product_desc}</td>
                  <td>{item.product_price}</td>
                  <td>
                    <img src={item.image} width="80" />
                  </td>
                  <td> {item.category}</td>
                  <td> {item.user_id.name}</td>
                  <td>
                    <img src={item.user_id.image} width="80" />
                  </td>
                  <td>{Date(item.created_at).substr(0, 10)}</td>
                  <td>
                    <button>Delete</button>
                  </td>

                  {/* <td><Link to ={'updatefood/'+ fooditem._id}>Update</Link>| <a href ="/fooditems"  onClick={this.deleteFood.bind(this, fooditem._id)}>Delete</a></td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
