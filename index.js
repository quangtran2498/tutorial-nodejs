const fs = require("fs");

console.log("First");
// const fileContents = fs.readFileSync("./file.txt", "utf8");
// console.log(fileContents);

console.log("Second");
fs.readFile("./file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

console.log("Third");


fs.writeFileSync("./file","quang test write text to file")
