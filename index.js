const express = require('express');
const server = express();
const actionModelRoutes = require('./routes/projectModelRoutes.js')
const projectModelRoutes = require('./routes/projectModelRoutes.js')
const port = 7100;

server.use(express.json());

server.use('/api/action', actionModelRoutes);
server.use('/api/project', projectModelRoutes);

server.get('/', (req, res) => {
  res.send('<h1><a href="https://github.com/michaelagard/Sprint-Challenge-Node-Express" style="text-decoration:none; color:black"><code>Sprint-Challenge-Node-Express Node.js Server</code></a></h1>');
}); // root server endpoint fluff

server.listen(port, () => {
  console.log(`\n### Node-Blog server started on ${port} ###`);
});