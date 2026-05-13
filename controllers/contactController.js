const contactModel = require('../models/contactModel');

const getData = async (req, res) => {
  try {
    const data = await contactModel.getContacts();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getContact = async (req, res) => {
  try {
    const object_id = req.params.object_id;
    console.log(object_id);
    const data = await contactModel.getContact(object_id);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createContact = async (req, res) => {
  try {
    console.log('BODY:', req.body);
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: new Date(req.body.birthday),
    };
    const data = await contactModel.createContact(contact);
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateContact = async (req, res) => {
  try {
    const object_id = req.params.object_id;
    console.log('BODY update:', req.body);

    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: new Date(req.body.birthday),
    };

    const data = await contactModel.updateContact(object_id, contact);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteContact = async (req, res) => {
  try {
    const object_id = req.params.object_id;

    const data = await contactModel.deleteContact(object_id);
    res.status(204).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getData,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
