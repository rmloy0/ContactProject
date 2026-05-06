
const mongodb = require("../database");

const getContact = async () => {
  const result = await mongodb
    .getDb()
    .collection("contacts")
    .find()
    .toArray();

  return result[0];
};

module.exports = { getContact };
