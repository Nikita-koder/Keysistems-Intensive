const express = require('express');
const cors = require('cors');
const app = express();
const postsRouter = require("./server/routes/post-routes.js");
const commentsRouter = require('./server/routes/comment-routes')

var corsOption = {
    origin: 'http://localhost:3001'
}

app.use(cors(corsOption));
// parse requests of content-type - application/json
app.use(express.json());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});
// set port, listen for requests
app.use('/post', postsRouter);
app.use('/comment', commentsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

