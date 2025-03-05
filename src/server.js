require('dotenv').config();
const express = require('express');
const cors = require('cors');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');
const bodyParser = require('body-parser');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require('./app/models');

db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to node api application.' });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

require('./app/routes/device.routes')(app);
require('./app/routes/category.routes')(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
