const server = require('./server.js');
require('dotenv').config();

const PORT = process.env.DB_PORT;
console.log(PORT)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
