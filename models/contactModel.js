const mongodb = require('../database');

const { ObjectId } = require('mongodb');

const getContacts = async () => {
  const result = await mongodb.getDb().collection('contacts').find().toArray();

  return result;
};

const getContact = async (object_id) => {
  const result = await mongodb
    .getDb()
    .collection('contacts')
    .findOne({
      _id: new ObjectId(object_id),
    });

  return result;
};

const createContact = async (contact) => {
  const result = await mongodb
    .getDb()
    .collection('contacts')
    .insertOne(contact);

  return result;
};

const updateContact = async (object_id, contact) => {
  console.log(object_id, contact);
  const result = await mongodb
    .getDb()
    .collection('contacts')
    .replaceOne(
      {
        _id: new ObjectId(object_id),
      },
      contact,
    );

  return result;
};

const deleteContact = async (object_id) => {
  const result = await mongodb
    .getDb()
    .collection('contacts')
    .deleteOne({
      _id: new ObjectId(object_id),
    });

  return result;
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
