
const http = require("node:http");

const people = {
    name:"quang",
    age:"25"
}
const server = http.createServer((req, res) => {
  res.writeHead(200,{'Content-Type': 'quang test'});
  res.end(JSON.stringify(people));
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});