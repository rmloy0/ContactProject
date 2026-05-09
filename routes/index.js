const express = require('express');
const router = new express.Router();
contactsRoute = require('./ContactRoute');

router.use('/', require('./swagger'));

// #swagger.tags = ['Default']
router.get('/', (req, res) => {
  res.send('Welcome to Contact Project API');
});

router.use('/contacts', contactsRoute);

module.exports = router;
