const express = require("express");
const router = express.Router();
// static routes
const { getHomePage, getAllPhotos } = require("../controllers/site");

// notice routes
const {
  getAllNotices,
  createNotice,
  getNotice,
  updateNotice,
  deleteNotice,
} = require("../controllers/notice");

// blog routes
const {
  getAllBlogs,
  createBlog,
  getBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blog");

// homepage
router.route("/").get(getHomePage);
router.route(":id");

// notice page
router.route("/notices").get(getAllNotices).post(createNotice);
router
  .route("/notices/:id")
  .get(getNotice)
  .patch(updateNotice)
  .delete(deleteNotice);

// blogs page
router.route("/blogs").get(getAllBlogs);
router.route("/blogs/createblog").post(createBlog);
router.route("/blogs/:id").get(getBlog).patch(updateBlog);
router.route("/deleteblogs/:id").delete(deleteBlog);

// photos page
router.route("/photos").get(getAllPhotos);
router.route(":id");

module.exports = router;
