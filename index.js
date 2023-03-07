const path = require("node:path")
// console.log(path.dirname())
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename)); //! tên file hiện tại đang code
// console.log(path.basename(__dirname)); //! tên thư mục cha

// console.log(path.extname(__filename)); //! trả về kết quả sau giấu chấm của file đang code
// console.log(path.extname(__dirname)); //! ko có j

// path.parse //! Định dạng một chuỗi đường dẫn thành một đối tượng đường dẫn
// console.log(path.parse(__filename));//! root chứa tất cả thông tin của path

// console.log(path.format(path.parse(__filename)));//! Định dạng một đối tượng đường dẫn thành một chuỗi đường dẫn

// path.isAbsolute //! Trả về true nếu đường dẫn là đường dẫn tuyệt đối, ngược lại trả về false
// console.log(path.isAbsolute('/test/demo_path.js')); //! true
// console.log(path.isAbsolute('test/demo_path.js')); //! false
// console.log(path.isAbsolute('C:\\test\\demo_path.js')); //! true

// path.join //! nối các chuỗi chỉ định thành 1 path
// console.log(path.join("fdsfds","fsfsdf","Fdsfds"));
// path.resolve //! Giải quyết các đường dẫn đã chỉ định thành một đường dẫn tuyệt đối
// console.log(path.resolve("folder1", "folder2", "index.html")); 
// console.log(path.resolve("/folder1", "folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "index.html"));
// console.log(path.resolve("/folder1", "//folder2", "../index.html"));
// console.log(path.resolve(__dirname, "data.json"));