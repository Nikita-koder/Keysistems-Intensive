const express = require('express');
const cors = require('cors');
const app = express();

var corsOption = {
    origin: 'http://localhost:3001'
}

app.use(cors(corsOption));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});
// set port, listen for requests

require("./server/routes/post-routes.js")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

