const Notice = require("../models/notices");

const getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find({});
    // render ejs template and pass the data
    res.render('notice', {notices})
    // res.json({ notices });
  } catch (error) {
    res.json({ msg: error });
  }
};

const createNotice = async (req, res) => {
  try {
    const notice = await Notice.create(req.body);
    res.json({ notice });
  } catch (error) {
    res.json({ msg: error });
  }
};

const getNotice = async (req, res) => {
  try {
    const { id: noticeID } = req.params;
    const notice = await Notice.findOne({ _id: noticeID });
    if (!notice) {
      return res.json({ msg: `No notice with id: ${noticeID}` });
    }
    res.json({ notice });
  } catch (error) {
    res.json({ msg: error });
  }
};

const updateNotice = async (req, res) => {
  try {
    const { id: noticeID } = req.params;
    const notice = await Notice.findOneAndUpdate({ _id: noticeID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!notice) {
      return res.json({ msg: `No notice with id: ${noticeID}` });
    }
    res.json({ notice });
  } catch (error) {
    res.json({ msg: error });
  }
};

const deleteNotice = async (req, res) => {
  try {
    const { id: noticeID } = req.params;
    const notice = await Notice.findOneAndDelete({ _id: noticeID });
    if (!notice) {
      return res.json({ msg: `No notice with id: ${noticeID}` });
    }
    res.json({ notice });
  } catch (error) {
    res.json({ msg: error });
  }
};

module.exports = {
  getAllNotices,
  getNotice,
  createNotice,
  updateNotice,
  deleteNotice,
};
