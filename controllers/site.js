const getHomePage = async (req, res) => {
  res.render("base");
};

const getAllNotice = async (req, res) => {
  res.render("notice");
};

const getAllBlogs = async (req, res) => {
  res.render("blogs");
};

const getAllPhotos = async (req, res) => {
  res.render("Photos");
};

module.exports = { getHomePage, getAllNotice, getAllBlogs, getAllPhotos };
