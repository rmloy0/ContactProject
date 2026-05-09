const express = require('express');
const router = new express.Router();

const contactController = require('../controllers/contactController');

router.get(
  '/',
  /* 
    #swagger.tags = ['Contacts']
    #swagger.path = '/contacts'
  */
  contactController.getData,
);

router.get(
  '/:object_id',
  /*
    #swagger.tags = ['Contacts']
    #swagger.path = '/contacts/{object_id}'
  */
  contactController.getContact,
);

router.post(
  '/',
  /* 
    #swagger.tags = ['Contacts']
    #swagger.path = '/contacts'
  */
  contactController.createContact,
);

router.put(
  '/:object_id',
  /* 
    #swagger.tags = ['Contacts']
    #swagger.path = '/contacts/{object_id}'
  */
  contactController.updateContact,
);

router.delete(
  '/:object_id',
  /*
    #swagger.tags = ['Contacts']
    #swagger.path = '/contacts/{object_id}'
  */
  contactController.deleteContact,
);

module.exports = router;
