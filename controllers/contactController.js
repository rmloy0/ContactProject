
 

const contactModel = require("../models/contactModel");

const getData = async (req, res) => {
  try {
    const data = await contactModel.getContacts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


const getContact = async (req, res) => {
  try {
    const object_id = req.params.object_id
     console.log(object_id)
    const data = await contactModel.getContact(object_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


module.exports = { getData, getContact };