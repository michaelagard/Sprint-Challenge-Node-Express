const express = require('express');
const server = express();
const port = 7100;
server.use(express.json());
function logger(req, res, next) {
  console.log(
    `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.get(
      'Origin'
    )}`
  );

  next();
}
server.use(logger)
server.get('/', logger, (req, res) => {
  res.send('<h1><a href="https://github.com/michaelagard/Sprint-Challenge-Node-Express" style="text-decoration:none; color:black"><code>Sprint-Challenge-Node-Express Node.js Server</code></a></h1>');
}); // root server endpoint fluff

server.listen(port, () => {
  console.log(`\n### Node-Blog server started on ${port} ###`);
});