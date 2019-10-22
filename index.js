const server = require("./api/server.js");

const port = process.env.PORT || 4400;
server.listen(port, () => {
  console.log(`\n *** API running on http://localhost:${port} *** \n`);
});
