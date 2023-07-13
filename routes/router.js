const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getAllBlogs,
  getAllPhotos,
} = require("../controllers/site");

const {
  getAllNotices,
  createNotice,
  getNotice,
  updateNotice,
  deleteNotice,
} = require("../controllers/notice");

// homepage
router.route("/").get(getHomePage);
router.route(":id");

// notice page
router.route("/notices").get(getAllNotices).post(createNotice);
router.route("/notices/:id").get(getNotice).patch(updateNotice).delete(deleteNotice);

// blogs page
router.route("/blogs").get(getAllBlogs);
router.route(":id");

router.route("/photos").get(getAllPhotos);
router.route(":id");

module.exports = router;
