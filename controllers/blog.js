const Blog = require("../models/blogs");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    // render ejs template and pass the data
    res.render('blogs', {blogs})
    // res.json({ blogs });
  } catch (error) {
    res.json({ msg: error });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.json({ blog });
  } catch (error) {
    res.json({ msg: error });
  }
};

const getBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const blog = await Blog.findOne({ _id: blogID });
    if (!blog) {
      return res.json({ msg: `No blog with id: ${blogID}` });
    }
    res.json({ blog });
  } catch (error) {
    res.json({ msg: error });
  }
};

const updateBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const blog = await Blog.findOneAndUpdate({ _id: blogID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blog) {
      return res.json({ msg: `No blog with id: ${blogID}` });
    }
    res.json({ blog });
  } catch (error) {
    res.json({ msg: error });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const { id: blogID } = req.params;
    const blog = await Blog.findOneAndDelete({ _id: blogID });
    if (!blog) {
      return res.json({ msg: `No blog with id: ${blogID}` });
    }
    res.json({ blog });
  } catch (error) {
    res.json({ msg: error });
  }
};

module.exports = { getAllBlogs, createBlog, getBlog, updateBlog, deleteBlog };
