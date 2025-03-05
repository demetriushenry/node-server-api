require('dotenv').config();
import express, { json, urlencoded } from 'express';
import cors from 'cors';

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

import { sequelize } from './app/models';

sequelize.sync();

// simple route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to node api application.' });
});

require('./app/routes/turorial.routes')(app);

// set port, listen for requests
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
