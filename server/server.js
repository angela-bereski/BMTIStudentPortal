const express = require('express');
const app = express();
const cors = require ('cors');
app.use(cors());
require('./routes/portal.routes')(app);
const port = 8000;
app.listen(port, () => console.log(`Party on port: ${port}`) );