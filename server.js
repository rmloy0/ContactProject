/* ***********************
 * Require Statements
 *************************/

const express= require('express');
const app = express();
const env = require("dotenv").config();
const bodyParser = require("body-parser");
 
const contactRoutes = require ('./routes/contactRoute');
const cors = require("cors");


const port = process.env.PORT || 8080;


const connectDB = require('./database/');
 

 


app.use(cors());
app.use(bodyParser.json());


 app.use('/contacts', contactRoutes);

connectDB.initDB((err) => {
    if (err) {
        console.log(err);

    } else {
      
       
        app.listen(process.env.PORT || port);
        console.log(`App listening on port ${port}`);
    }

});








 