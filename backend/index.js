const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const app = express();
app.use(express.json());
app.use(cors())
app.use(morgan("dev"));

const port = 5000;

const { employeeRoute } = require('./routes/employeeRoutes');
app.use('/api', employeeRoute);


app.listen(port, (err) => {
  console.log(`server is connected on port http://localhost:${port}`);
});
