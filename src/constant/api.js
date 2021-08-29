const baseUrl = "http://localhost:2020/api/";
export default {
  login: baseUrl + "admin/login",

  // Product
  getAllProduct: baseUrl + "admin/view/product",

  // Events
  getAllEvents: baseUrl + "admin/get/event",

  // Users
  getAllActiveUsers: baseUrl + "admin/getalluser",

  // admin
  checkUser: baseUrl + "admin/checklogin",

  // logout
  logout: baseUrl + "admin/logout",
};
