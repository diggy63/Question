const express      = require('express');
const path         = require('path');
const bodyParser   = require('body-parser');
require("dotenv").config();


require('./config/environment');
require('./database');

const routes          = require('./routes/index');
const configPassport  = require('./passport/config');

console.log("here")

const assetFolder  = path.resolve(__dirname, '../dist/');
const port         = process.env.PORT;
const app          = express();
const db           = process.env.DATABASE_URL

app.use(express.static(assetFolder));
app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port} and connected to ${db}`));
