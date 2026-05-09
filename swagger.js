const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'User API',
    description: 'User API',
  },
  host: 'localhost:8080',
  schemes: ['https'],
};

const outPutFile = './swagger.json';
const endPointsFiles = ['./routes/index.js', './routes/contactRoute.js'];

// this will generate swagger.json

swaggerAutogen(outPutFile, endPointsFiles, doc);
