const baseUrl = "http://localhost:2020/api/";
export default {
  login: baseUrl + "admin/login",

  // Product
  getAllProduct: baseUrl + "admin/view/product",
  deleteProduct: baseUrl + "admin/food/delete/",

  // Events
  getAllEvents: baseUrl + "admin/get/event",
  getSingleEvent: baseUrl + "admin/get/eventid/",
  updateEvent: baseUrl + "admin/update/event/",
  deleteEvent: baseUrl + "admin/delete/event/",

  // Users
  getAllActiveUsers: baseUrl + "admin/getalluser",

  // admin
  checkUser: baseUrl + "admin/checklogin",

  // logout
  logout: baseUrl + "admin/logout",

  // upload image
  uploadImage: "https://bigos-image-uploader.herokuapp.com/api/uploadImage",
};
