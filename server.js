/* ***********************
 * Require Statements
 *************************/

const express = require('express');
const app = express();
const env = require('dotenv').config();

const Routes = require('./routes/');
const cors = require('cors');
const port = process.env.PORT || 8080;
const connectDB = require('./database/');
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Z-Key',
    ],
  }),
);

app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/contacts', require('./routes/contactRoute'));
app.use('/api-docs', swaggerUI.serve);
app.get('/api-docs', swaggerUI.setup(swaggerDocument));

connectDB.initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(process.env.PORT || port);
    console.log(`App listening on port ${port}`);
  }
});
