
 

const contactModel = require("../models/contactModel");

const getData = async (req, res) => {
  try {
    const data = await contactModel.getContact();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { getData };