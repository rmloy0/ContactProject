const express = require("express")
const router = new express.Router() 

const contactController = require("../controllers/contactController")



router.get("/", contactController.getData);

router.get("/:object_id", contactController.getContact);


module.exports = router;