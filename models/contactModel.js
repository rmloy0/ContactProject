
const mongodb = require("../database");

const { ObjectId } = require("mongodb");

const getContacts = async () => {
  const result = await mongodb
    .getDb()
    .collection("contacts")
    .find()
    .toArray();

  return result;
};

const getContact = async (object_id) => {
  const result = await mongodb
    .getDb()
    .collection("contacts")
    .findOne({
      _id: new ObjectId(object_id)
    });
   

  return result;
};

module.exports = { getContacts, getContact  };
